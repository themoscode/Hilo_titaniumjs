root4all = this;
var ms = ms || {}
ms.hilo = ms.hilo || {
    version: '0.0.1'
}


var Buddy = function (nickname, id, status) {
    this.id = id
    this.ignored = false
    this.fingerprint = null
    this.authenticated = false
    this.fileKey = null
    this.mpPublicKey = null
    this.mpFingerprint = null
    this.mpSecretKey = null
    this.nickname = nickname
    this.genFingerState = null
    this.usingCryptocat = true
    this.status = status
    this.otr = Cryptocat.otr.add(nickname)
}


ms.hilo.Client = function (options) {
    this.options = options || ms.hilo.options;
    Cryptocat.xmpp.defaultDomain = this.options.url;

    this.api = new ms.api();
}

ms.hilo.Client.prototype = {
    ///GLOBAL METHODS
    login: function (nickname, password) {
        var thisObj = this;
        thisObj.connect(nickname, password)
    },
    send: function (message) {

        if (!Cryptocat.me.currentBuddy || Cryptocat.me.currentBuddy == Cryptocat.me.nickname) {
            console.log('bin ich selber');
            return;
        }

        if (Cryptocat.me.currentBuddy !== 'groupChat') {
            console.log(Cryptocat.me.currentBuddy);
            if (Cryptocat.buddies[Cryptocat.me.currentBuddy] == undefined) {
                console.log(Cryptocat.me.currentBuddy + ' ist offline!');
                return false;
            }
            Cryptocat.buddies[
                Cryptocat.me.currentBuddy
                //Cryptocat.getBuddyNicknameByID(Cryptocat.me.currentBuddy)
                ].otr.sendMsg(message);

        } else if (Object.keys(Cryptocat.buddies).length) {//Group Message
            this.sendGroupMessage(message);
        }
    },

    changeConversation: function (buddyId) {
        console.log('current Buddy: ' + buddyId);
        Cryptocat.me.currentBuddy = buddyId;
    },
    joinPrivateRoom: function (buddy) {
        if (!Cryptocat.me.nickname) return;
        var conversation = [Cryptocat.me.nickname, buddy].sort().join('');
        this.joinConversation(conversation, buddy);
    },
    conversations: {},
    joinConversation: function (conversation) {
        if (!conversation) return;
        this.conversations[conversation] = true;

        console.log('join Conversation: ' + conversation);

        var thisObj = this;
        Cryptocat.me.conversation = conversation;
        Cryptocat.xmpp.connection.muc.join(
                Cryptocat.me.conversation + '@' + Cryptocat.xmpp.conferenceServer,
            Cryptocat.me.nickname,
            function (message) {

                if (thisObj.onMessage(message)) {
                    return true
                }
            },
            function (presence) {
                if (thisObj.onPresence(presence)) {
                    return true
                }
            }
        )
    },
    logout: function () {
        if (Cryptocat.xmpp.connection !== null) {
            Cryptocat.xmpp.connection.muc.leave(
                    Cryptocat.me.conversation + '@'
                    + Cryptocat.xmpp.conferenceServer
            )
            Cryptocat.xmpp.connection.disconnect()
            Cryptocat.xmpp.connection = null
            this.loginFlag = false;
        }
        for (var b in Cryptocat.buddies) {
            if (Cryptocat.buddies.hasOwnProperty(b)) {
                delete Cryptocat.buddies[b]
            }
        }
        conversationBuffers = {}
        this.conversations = {}
    },
    register: function (username, password) {
        var thisObj = this;

        Cryptocat.xmpp.connection = new Strophe.Connection(Cryptocat.xmpp.relay);
        Cryptocat.xmpp.connection.register.connect('hilo.im', function (status) {
            thisObj.options.registerCallback(status);
            console.log(Strophe.Status);
            if (status === Strophe.Status.REGISTER) {
                // fill out the fields
                Cryptocat.xmpp.connection.register.fields.username = username;
                Cryptocat.xmpp.connection.register.fields.password = password;
                // calling submit will continue the registration process
                Cryptocat.xmpp.connection.register.submit();
            }
        });
    },
    ///HELPER
    genMyKeys: function (callback) {

        Cryptocat.me.mpPrivateKey = Cryptocat.multiParty.genPrivateKey()

        Cryptocat.me.mpPublicKey = Cryptocat.multiParty.genPublicKey(Cryptocat.me.mpPrivateKey)

        Cryptocat.me.mpFingerprint = Cryptocat.multiParty.genFingerprint()

        // If we already have keys, just skip to the callback.
        if (Cryptocat.me.otrKey) {
            callback()
            return
        }

        Cryptocat.xmpp.prepareKeys(callback);
    },
    connect: function (nickname, password) {
        console.log('connect');
        var thisObj = this;
        Cryptocat.me.nickname = nickname;

        Cryptocat.xmpp.connection = new Strophe.Connection(Cryptocat.xmpp.relay);

        var name = password ? Cryptocat.me.nickname + '@' + Cryptocat.xmpp.domain : Cryptocat.xmpp.domain;

        Cryptocat.xmpp.connection.connect(name, password, function (status) {
            thisObj.options.loginStatusChangeCallback(status);

            if (status === Strophe.Status.CONNECTED) {

                //Cryptocat.xmpp.connection.send($pres().tree());
                thisObj.genMyKeys(function () {
                    thisObj.options.keysCreatedCallback();
                });
                thisObj.afterConnect();


            }
        });
    },
    afterConnect: function () {
        Cryptocat.xmpp.connection.ibb.addIBBHandler(Cryptocat.otr.ibbHandler)
        /* jshint -W106 */
        Cryptocat.xmpp.connection.si_filetransfer.addFileHandler(Cryptocat.otr.fileHandler)
        /* jshint +W106 */

    },
    onPresence: function (presence) {
        var status
        var nickname = cleanNickname($(presence).attr('from'))
        this.options.buddiePresence(presence);

        // If invalid nickname, do not process
        if ($(presence).attr('type') === 'error') {
            if ($(presence).find('error').attr('code') === '409') {
                // Delay logout in order to avoid race condition with window animation
                window.setTimeout(function () {
                    Cryptocat.logout()
                    Cryptocat.loginFail(Cryptocat.locale['loginMessage']['nicknameInUse'])
                }, 3000)
                return false
            }
            return true
        }
        // Ignore if presence status is coming from myself
        if (nickname === Cryptocat.me.nickname) {
            return true
        }
        // Detect nickname change (which may be done by non-Cryptocat XMPP clients)
        if ($(presence).find('status').attr('code') === '303') {
            Cryptocat.removeBuddy(nickname);
            console.log(nickname + ' verlässt die unterhaltung');
            console.log(Cryptocat.buddies);
            return true
        }
        // Detect buddy going offline.
        if ($(presence).attr('type') === 'unavailable') {
            Cryptocat.removeBuddy(nickname);
            console.log(nickname + ' verlässt die unterhaltung');
            return true
        }
        // Create buddy element if buddy is new.
        else if (!Cryptocat.buddies.hasOwnProperty(nickname)) {
            Cryptocat.addBuddy(nickname, null, 'online');
            console.log(nickname + ' kommt rein');
            for (var u = 0; u < 4000; u += 2000) {
                window.setTimeout(Cryptocat.xmpp.sendPublicKey, u, nickname);
            }
        } else if (Cryptocat.buddies.hasOwnProperty(nickname)) {
            console.log('buddie exists');
        }
        // Handle buddy status change to 'available'.
        else if (
            $(presence).find('show').text() === '' ||
            $(presence).find('show').text() === 'chat'
            ) {
            status = 'online'
        }
        // Handle buddy status change to 'away'.
        else {
            status = 'away'
        }
        // Perform status change.
        Cryptocat.buddyStatus(nickname, status)

        return true

    },
    onMessage: function (message) {

        var nickname = cleanNickname($(message).attr('from'))
        var body = $(message).find('body').text()
        var type = $(message).attr('type')
        if (type == 'error') {
            console.log('Nachricht aus einem anderen Raum.');
            type = 'chat';
        }
        // If archived message, ignore.
        if ($(message).find('delay').length !== 0) {
            return true
        }
        //If message is from me, ignore.
        if (nickname === Cryptocat.me.nickname) {
            return true
        }
        // If message is from someone not on buddy list, ignore.
        if (!Cryptocat.buddies.hasOwnProperty(nickname)) {
            return true
        }
        // Check if message has a 'composing' notification.
        if ($(message).find('composing').length && !body.length) {
            this.options.buddieComposing(true, Cryptocat.buddies[nickname].id);
            return true
        }
        // Check if message has a 'paused' (stopped writing) notification.
        if ($(message).find('paused').length) {
            this.options.buddieComposing(false, Cryptocat.buddies[nickname].id);
        }
        // Check if message is a group chat message.
        else if (type === 'groupchat' && body.length) {

            this.options.buddieComposing(false, Cryptocat.buddies[nickname].id);
            body = Cryptocat.multiParty.receiveMessage(nickname, Cryptocat.me.nickname, body)
            if (typeof(body) === 'string') {
                this.options.messageReceivedCallback(body, nickname, type, 'message');
            }
        }
        // Check if this is a private OTR message.
        else if (type === 'chat') {

            this.options.buddieComposing(false, Cryptocat.buddies[nickname].id);
            var fn = function (msg) {
                console.log('uncrypted');
                console.log(msg);
                //thisObj.options.messageReceivedCallback(body, nickname, type, 'message');
            }
            //this.options.messageReceivedCallback(body, nickname, type, 'message');
            console.log(Cryptocat.buddies);
            Cryptocat.buddies[nickname].otr.receiveMsg(body)
        }
        return true
    },
    //TEMP
    onIncoming: function (nickname, msg, encrypted) {
        console.log('uncrypted: ' + encrypted);
        console.log(nickname + ': ' + msg);
    },
    sendGroupMessage: function (message) {
        var ciphertext = JSON.parse(Cryptocat.multiParty.sendMessage(message))
        /*var missingRecipients = []
         for (var i in Cryptocat.buddies) {
         if (typeof(ciphertext['text'][i]) !== 'object') {
         missingRecipients.push(i)
         }
         }
         if (missingRecipients.length) {
         Cryptocat.addToConversation(
         missingRecipients, Cryptocat.me.nickname,
         'groupChat', 'missingRecipients'
         )
         }*/
        console.log('send');
        var res = Cryptocat.xmpp.connection.muc.message(
                Cryptocat.me.conversation + '@' + Cryptocat.xmpp.conferenceServer,
            null, JSON.stringify(ciphertext), null, 'groupchat', 'active'
        )
        console.log('raw-message: ' + message);
        console.log('ciphertext: ' + JSON.stringify(ciphertext));
    }
}
/*GLOBAL FUNCTIONS*/
var cleanNickname = function (nickname) {
    var clean = nickname.match(/\/([\s\S]+)/)
    if (clean) {
        return clean[1]
    }
    return false
}
// Get a unique buddy identifier.
var getUniqueBuddyID = function () {
    var buddyID = Cryptocat.random.encodedBytes(16, CryptoJS.enc.Hex)
    for (var b in Cryptocat.buddies) {
        if (Cryptocat.buddies.hasOwnProperty(b)) {
            if (Cryptocat.buddies[b].id === buddyID) {
                return getUniqueBuddyID()
            }
        }
    }
    return buddyID
}


/* by Elijah Manor with collaboration from Doug Neiner
 * Filter results by html5 data attributes either at 
 * design or at runtime
 *
 * Usages:
 * $( "p" ).filterByData( "mytype" );
 * $( "p" ).filterByData( "mytype, "mydata" );
 */
$.fn.filterByData = function (type, value) {
    return this.filter(function () {
        var $this = $(this);

        return value != null ?
            $this.data(type) === value :
            $this.data(type) != null;
    });
};


/// client calls
ms.api = function () {
    var thisObj = this;

    /*window.setTimeout(function(){
     //hiloClient.register('sender', 'sender');
     }, 1000);*/
    /*window.setTimeout(function(){
     thisObj.login();
     }, 1000);*/
}
ms.api.prototype = {
    login: function () {
        hiloClient.login('sender', 'sender', null);
    },
    send: function () {
        var jetzt = new Date();
        hiloClient.send('Nachricht: ' + jetzt.toGMTString());
    },
    logout: function () {
        window.setTimeout(function () {
            hiloClient.logout();
        }, 3000);

    }
}
