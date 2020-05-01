var options = {

    url: 'http://hilo.im/',
    conversation: 'conversation',

    keysCreatedCallback: function () {
        Ti.App.fireEvent('HILO_COMPUTED_KEYS');
    },
    loginStatusChangeCallback: function (state) {
        Ti.App.fireEvent('HILO_STATUS_CHANGED', {state: state});
    },
    logoutSuccessCallback: function (event) {
    },
    registerCallback: function (state) {
        Ti.App.fireEvent('HILO_REGISTER_STATUS_CHANGED', {state: state});
    },
    messageReceivedCallback: function (body, nickname, id, type) {
        Ti.App.fireEvent('HILO_MESSAGE_RECEIVED', {'message': body, 'nickname': nickname, 'id': id, 'type': type});
    },
    messageSentCallback: function (event) {
    },
    buddieListReceived: function (event) {
    },
    buddieComposing: function (isComposing, buddyId) {
    },
    buddiePresence: function (presence) {
    }

};

var hiloClient = new ms.hilo.Client(options);

Ti.App.addEventListener('HILO_CONNECT', function (data) {

    var user = data.user;
    var password = data.password;

    hiloClient.login(user, password);

});

Ti.App.addEventListener('HILO_OPEN_PRIVATE_CONVERSATION', function (data) {

    var user = data.user;

    hiloClient.joinPrivateRoom(user);
    hiloClient.changeConversation(user);

});

Ti.App.addEventListener('HILO_SEND', function (data) {

    var message = data.message;

    hiloClient.send(message);

});