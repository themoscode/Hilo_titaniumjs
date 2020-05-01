App.Controllers.LoginWindowController = {

    submitButtonClick: function (e) {

        App.setLoadingState(true);

        var values = App.views.loginWindow.getFormValues();

        App.state.userPassword = values.password;

        App.Services.AuthenticationService.login(values.email, values.password);

    }
};