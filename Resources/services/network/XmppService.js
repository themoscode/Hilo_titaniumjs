App.Services.XmppService = {

    webView: Ti.UI.createWebView(App.Defaults.WebView),

    connect: function (user, password) {

        App.Log.debug('# connect to xmpp: ', user, password);

        Ti.App.fireEvent('HILO_CONNECT', {
            user: user,
            password: password
        });

    },
    openPrivateConversation: function (user) {

        App.Log.debug('# open private conversation with: ', user);

        Ti.App.fireEvent('HILO_OPEN_PRIVATE_CONVERSATION', {
            user: user
        });

    },
    sendMessage: function (message) {

        Ti.App.fireEvent('HILO_SEND', {
            message: message
        });

    }

};