App.Services.BroadcastService = {

    requestApnsDeviceToken: function () {

        // register notification types to use
        Ti.App.iOS.registerUserNotificationSettings({
            types: [
                Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT,
                Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND,
                Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE
            ]
        });

    },
    subscribe: function (platform, deviceToken) {

        var loadCallback = App.Controllers.BroadcastServiceController.subscribeSuccessCallback;
        var errorCallback = App.Controllers.BroadcastServiceController.subscribeErrorCallback;

        var params = {
            p: platform,
            t: deviceToken
        };

        App.Services.Api.load('broadcast/subscribe', App.Enum.METHOD.POST, params, loadCallback, errorCallback);

    }

};

if (App.os == App.Enum.OS.IOS) {
    Ti.App.iOS.addEventListener('usernotificationsettings', App.Services.ApnsService.userNotificationSettingsCallback);
}
