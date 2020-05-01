App.Controllers.BroadcastServiceController = {

    registerCallback: function (e) {

        App.data.deviceToken = e.deviceToken;

        App.Log.debug(' # retrieved apns device token: ', App.data.deviceToken);

        // is the app is already authenticated the subscription is sent immediately
        if (App.state.authenticated) {
            App.Services.BroadcastService.subscribe(App.Enum.BROADCAST_PROVIDER.APPLE, App.data.deviceToken);
        }

    },
    receivedCallback: function (e) {

        var accessPointList = JSON.parse(e.data.apl);
        var nodeInstanceList = App.Domains.Node.parseApnsAccessPointList(accessPointList);

        App.Services.NodeService.updateNodePool(nodeInstanceList);

    },
    errorCallback: function (e) {

        App.Log.debug('# failed to register for push notifications!', e.error);

    },

    subscribeSuccessCallback: function (code, response) {

        App.Log.debug('# successfully subscribed for apns: ', App.data.deviceToken);

    },
    subscribeErrorCallback: function (code, response) {

        App.Log.debug('# error while subscribing for apns deviceToken: ', App.data.deviceToken);
        App.Log.debug('# error while subscribing for apns code: ', code);
        App.Log.debug('# error while subscribing for apns response: ', response);

    }

};