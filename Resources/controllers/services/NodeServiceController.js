App.Controllers.NodeServiceController = {

    pingSuccessCallback: function (e) {

        var ip = e.source.host;
        var port = e.source.port;

        App.Log.debug('# node ping success for host: ', ip, port);

        App.Services.NodeService.closeTcpConnection(ip, port);

        // decrement the ping job queue
        App.Services.NodeService.nodeQueueCount -= 1;

        // increment the positive ping result counter
        App.Services.NodeService.positiveNodeQueueCount += 1;

        App.Services.NodeService.evaluateNodeQueue();

    },

    pingErrorCallback: function (e) {

        var ip = e.source.host;
        var port = e.source.port;

        App.Log.debug('# node ping error for host: ', ip, port);

        App.Services.NodeService.closeTcpConnection(ip, port);

        // decrement the ping job queue
        App.Services.NodeService.nodeQueueCount -= 1;

        // increment the negative ping result counter
        App.Services.NodeService.negativeNodeQueueCount += 1;

        App.Services.NodeService.evaluateNodeQueue();

    },

    foundAvailableNodeCallback: function () {

        var dialogOptions = {
            title: L('FoundNodeDialogTitle'),
            message: L('FoundNodeDialogMessage'),
            buttonNames: [L('Cancel'), L('Connect')],
            cancel: 0
        };

        var alertDialog = Ti.UI.createAlertDialog(dialogOptions);

        alertDialog.addEventListener('click', function (e) {

            if (e.index == 1) {
                App.Controllers.NodeServiceController.connectButtonClicked();
            }

        });

        alertDialog.show();

    },

    connectButtonClicked: function () {

        var nodeInstance = App.Services.NodeService.nodeInstance;

        var message = String.format(L('ConnectionInstructionsMessage'), nodeInstance.ip + ' : ' + nodeInstance.port);

        var dialogOptions = {
            title: L('ConnectionInstructionsTitle'),
            message: message,
            buttonNames: [L('Okay')]
        };

        var alertDialog = Ti.UI.createAlertDialog(dialogOptions);

        alertDialog.show();

    }

};