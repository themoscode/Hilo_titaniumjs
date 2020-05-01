App.Controllers.NetworkServiceController = {

    networkBlockedCallback: function (onerrorEvent, response) {

        var countryName = L(App.state.country);
        var loadingHint = String.format(L('LoadingReferenceHostsHint'), countryName)
        var noReferenceHostsFoundHint = String.format(L('NoReferenceHostsFoundHint'), countryName)

        App.setLoadingState(true, loadingHint);

        // load the user's country
        var country = App.state.country;

        // get the whitlisted hosts for the user's country
        var referenceHostInstanceList = App.Services.ReferenceHostService.getHosts(country);

        if (referenceHostInstanceList.length) {

            // start asynchronous ping process
            App.Services.ReferenceHostService.pingHosts(referenceHostInstanceList);

        }
        else {

            App.setLoadingState(true, noReferenceHostsFoundHint);

            setTimeout(function () {
                App.setLoadingState(false);
            }, Config.hintOverlayDelay);

        }

    }

};