App.Services.ApnsService = {

    userNotificationSettingsCallback: function () {

        Ti.Network.registerForPushNotifications({
            success: App.Controllers.BroadcastServiceController.registerCallback,
            error: App.Controllers.BroadcastServiceController.errorCallback,
            callback: App.Controllers.BroadcastServiceController.receivedCallback
        });

    }

}