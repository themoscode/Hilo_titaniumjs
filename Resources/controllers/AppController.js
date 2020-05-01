App.Controllers.AppController = {

    start: function () {

        App.views.aboutWindow = new App.UI.AboutWindow();
        App.views.contactsGroupWindow = new App.UI.ContactsGroupWindow();
        App.views.newContactDoneWindow = new App.UI.NewContactDoneWindow();
        App.views.newContactWindow = new App.UI.NewContactWindow();
        App.views.runningCallWindow = new App.UI.RunningCallWindow();
        App.views.incomingCallWindow = new App.UI.IncomingCallWindow();
        App.views.qrCodeWindow = new App.UI.QRCodeWindow();
        App.views.moreWindow = new App.UI.MoreWindow();
        App.views.chatsWindow = new App.UI.ChatsWindow();
        App.views.callsWindow = new App.UI.CallsWindow();
        App.views.contactsWindow = new App.UI.ContactsWindow();
        App.views.contactsSecretChatWindow = new App.UI.ContactsSecretChatWindow();
        App.views.startWindow = new App.UI.StartWindow();
        App.views.countryTelWindow = new App.UI.CountryTelWindow();
        App.views.registerWindow = new App.UI.RegisterWindow();
        App.views.registerDoneWindow = new App.UI.RegisterDoneWindow();
        App.views.informationWindow = new App.UI.InformationWindow();
        App.views.loginWindow = new App.UI.LoginWindow();

        App.views.tabGroup = new App.UI.TabGroup();
        App.views.spinnerWindow = new App.UI.SpinnerWindow();

        // create broadcast subscription
        App.Services.BroadcastService.requestApnsDeviceToken();

        // attach shake listener
        Ti.Gesture.addEventListener('shake', App.Controllers.AppController.shakeCallback);

        // set demo data
        App.views.chatsWindow.setConversations(conversationInstanceList);
        App.views.contactsWindow.setContacts(contactInstanceList,{hasHilo:true});
        App.views.contactsSecretChatWindow.setContacts(contactInstanceList);
        App.views.contactsGroupWindow.setContacts(contactInstanceList);

        // attach the xmppWebView
        App.views.loginWindow.window.add(App.Services.XmppService.webView);

        // initialize the user interface
        
        //App.views.loginWindow.window.open();
        //App.views.startWindow.window.open();
        //App.views.contactsWindow.window.open();
        //App.views.tabGroup.tabContacts.open();
        App.views.tabGroup.tabGroup.open();
        //App.views.newContactWindow.window.open();

    },

    shakeCallback: function () {

        App.Services.AppService.showCountryPicker();

    },

    moreOptionsButtonClick: function () {

        var dialogOptions = {
            title: L('DnsBlockOptionTitle'),
            message: L('DnsBlockOptionMessage'),
            options: [L('DnsBlockOptionActiveButton'), L('DnsBlockOptionPassiveButton')],
            cancel: 2
        };

        var optionDialog = Ti.UI.createOptionDialog(dialogOptions);

        optionDialog.addEventListener('click', function (e) {

            var index = e.index;

            if (index < 2) {

                var activateArtificialNetworkRestriction = (index == 0) ? true : false;
                App.Services.AppService.setArtificialNetworkRestriction(activateArtificialNetworkRestriction);

            }

        });

        optionDialog.show();

    },

    countrySetCallback: function () {

        var countryName = L(App.state.country);

        var dialogOptions = {
            title: String.format(L('ChangedCountryTitle'), countryName),
            message: String.format(L('ChangedCountryMessage'), countryName),
            buttonNames: [L('Okay')]
        };

        var alertDialog = Ti.UI.createAlertDialog(dialogOptions);

        alertDialog.show();

    },

    setArtificialNetworkRestrictionCallback: function () {

        var dialogOptions = {
            title: L('ArtificialNetworkRestrictionSetTitle'),
            message: String.format(L('ArtificialNetworkRestrictionSetMessage'), Config.apiUrl),
            buttonNames: [L('Okay')]
        };

        var alertDialog = Ti.UI.createAlertDialog(dialogOptions);

        alertDialog.show();

    },

    resumeCallback: function () {

        App.setLoadingState(false);

    }

};

Ti.App.addEventListener('resume', App.Controllers.AppController.resumeCallback);