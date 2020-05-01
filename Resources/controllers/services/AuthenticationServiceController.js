App.Controllers.AuthenticationServiceController = {

    loginSuccessCallback: function (code, response) {

        Ti.API.debug('# App.Controllers.AuthenticationServiceController.loginSuccessCallback');

        App.state.authenticated = true;
        App.state.userId = response.id;

        // create apns subscriptions if the token is available
        if (App.data.deviceToken) {
            App.Services.BroadcastService.subscribe(App.Enum.BROADCAST_PROVIDER.APPLE, App.data.deviceToken);
        }

        // create xmpp connection
       // App.Services.XmppService.connect(App.state.userId, App.state.userPassword);   ///////XmppService

        // clear entered credentials after a successful login
        App.views.loginWindow.clear();

        App.setLoadingState(false);

        // open the main window
        App.views.tabGroup.tabGroup.open();

    },
    loginErrorCallback: function () {

        Ti.API.debug('App.Controllers.AuthenticationServiceController.loginErrorCallback');

        App.Services.AppService.showAlert(L('WrongCredentialsTitle'), L('WrongCredentialsMessage'));

        App.setLoadingState(false);

    }

};