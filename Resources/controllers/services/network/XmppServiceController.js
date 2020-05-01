App.Controllers.XmppServiceController = {

    connectionStates: [
        'ERROR',
        'CONNECTING',
        'CONNFAIL',
        'AUTHENTICATING',
        'AUTHFAIL',
        'CONNECTED',
        'DISCONNECTED',
        'DISCONNECTING',
        'ATTACHED'
    ],

    getConnectionState: function (index) {
        return App.Controllers.XmppServiceController.connectionStates[index];
    }

};

Ti.App.addEventListener('HILO_STATUS_CHANGED', function (data) {

    var connectionState = App.Controllers.XmppServiceController.getConnectionState(data.state);

    if (connectionState == App.Enum.XMPP_STATE.CONNECTED) {
        // display connection success
    }

    App.Log.debug('# HILO_STATUS_CHANGED: ', connectionState);

});

Ti.App.addEventListener('HILO_MESSAGE_RECEIVED', function (data) {

    App.Log.debug('# HILO_MESSAGE_RECEIVED: ', data);

    var message = data.message;

    if (App.views.conversationsWindow) {
        App.views.conversationsWindow.textMessage('left', message);
    }

});

Ti.App.addEventListener('HILO_COMPUTED_KEYS', function (data) {

    alert('Der Schlüsselgenerierung wurde abgeschlossen...');

});