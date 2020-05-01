App.Controllers.ContactServiceController = {

    listSuccessCallback: function (code, response) {

        //var contactInstanceList = App.Domains.Contact.parseApiResponse(response);

        //App.views.contactsWindow.setContacts(contactInstanceList);

    },

    listErrorCallback: function (code, response) {

        App.Log.debug('error while loading contacts: ', code, response);

    }

};