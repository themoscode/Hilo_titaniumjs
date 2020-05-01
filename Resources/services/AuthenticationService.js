App.Services.AuthenticationService = {

    /**
     * login for registered users
     * @param email
     * @param password
     */
    login: function (email, password) {

        var loadCallback = App.Controllers.AuthenticationServiceController.loginSuccessCallback;
        var errorCallback = App.Controllers.AuthenticationServiceController.loginErrorCallback;

        var params = {
            e: email,
            p: password
        };

        App.Services.Api.load('authentication/login', App.Enum.METHOD.POST, params, loadCallback, errorCallback);

    }

};