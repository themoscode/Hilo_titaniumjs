App.Services.AppService = {

    showCountryPicker: function () {

        if (!App.state.countryPickerVisible) {

            App.state.countryPickerVisible = true;

            var countryCodeArray = [];
            var countryNameArray = [];


            _.each(App.Enum.COUNTRY, function (countryCode) {

                countryCodeArray.push(countryCode);
                countryNameArray.push(L(countryCode));

            });

            countryNameArray.push(L('MoreOptions'));
            countryNameArray.push(L('Cancel'));

            var options = {
                title: L('SelectCountryTitle'),
                options: countryNameArray,
                cancel: countryCodeArray.length + 1
            };

            var dialog = Ti.UI.createOptionDialog(options);

            dialog.addEventListener('click', function (e) {

                if (e.index < countryCodeArray.length) {

                    App.state.country = countryCodeArray[e.index];
                    App.Controllers.AppController.countrySetCallback();

                }
                else if (e.index == countryCodeArray.length) {

                    dialog.hide();
                    App.Controllers.AppController.moreOptionsButtonClick();

                }

                App.state.countryPickerVisible = false;

            });

            dialog.show();

        }

    },

    setArtificialNetworkRestriction: function (value) {

        Config.apiUrl = value ? App.Enum.API_URI.FAKE : App.Enum.API_URI.OFFICIAL;

        App.Controllers.AppController.setArtificialNetworkRestrictionCallback();

    },

    showAlert: function (title, message) {

        var dialogOptions = {
            title: title || '',
            message: message,
            options: [L('Okay')]
        };

        var alertDialog = Ti.UI.createAlertDialog(dialogOptions);

        alertDialog.show();

    }


};