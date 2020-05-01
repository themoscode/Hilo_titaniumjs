App.Services.ContactService = {

    list: function () {

        var loadCallback = App.Controllers.ContactServiceController.listSuccessCallback;
        var errorCallback = App.Controllers.ContactServiceController.listErrorCallback;

        App.Services.Api.load('client/contacts', App.Enum.METHOD.GET, null, loadCallback, errorCallback);

    }

};