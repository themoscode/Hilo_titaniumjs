App.Controllers.ReferenceHostServiceController = {

    pingSuccessCallback: function (e) {

        var host = e.source.host;
        var port = e.source.port;

        App.Log.debug('# ping success for host: ', host, port);

        App.Services.ReferenceHostService.closeTcpConnection(host, port);

        // decrement the ping job queue
        App.Services.ReferenceHostService.referenceHostQueueCount -= 1;

        // increment the positive ping result counter
        App.Services.ReferenceHostService.positiveReferenceHostQueueCount += 1;

        App.Services.ReferenceHostService.evaluateCurrentPingQueue();

    },

    pingErrorCallback: function (e) {

        var host = e.source.host;
        var port = e.source.port;

        App.Log.debug('# ping error for host: ', host, port);

        App.Services.ReferenceHostService.closeTcpConnection(host, port);

        // decrement the ping job queue
        App.Services.ReferenceHostService.referenceHostQueueCount -= 1;

        // increment the negative ping result counter
        App.Services.ReferenceHostService.negativeReferenceHostQueueCount += 1;

        App.Services.ReferenceHostService.evaluateCurrentPingQueue();

    },

    networkRestrictionDetectedCallback: function () {

        var dialogOptions = {
            title: L('NetworkRestrictionDetectedTitle'),
            message: L('NetworkRestrictionDetectedMessage'),
            buttonNames: [L('Cancel'), L('NetworkRestrictionBypassButton')],
            cancel: 0
        };

        var alertDialog = Ti.UI.createAlertDialog(dialogOptions);

        alertDialog.addEventListener('click', function (e) {

            if (e.index == 1) {
                // start node connection process
                App.Services.NodeService.startNodeConnectionProcess(App.state.country);
            }
            else {
                App.setLoadingState(false);
            }

        });

        alertDialog.show();

    }

};