App.Services.ReferenceHostService = {

    // tcp connection handles are used during the ping process and have
    // to be destroyed within the success or error callback
    tcpConnections: {},
    // keeps track of asynchronous background ping requests
    referenceHostQueueCount: 0,
    // count the accessible reference hosts of the current test queue
    positiveReferenceHostQueueCount: 0,
    // count the not accessible reference hosts of the current test queue
    negativeReferenceHostQueueCount: 0,

    getHosts: function (country) {

        var referenceHostList = App.Services.Database.execute('SELECT * FROM reference_hosts WHERE country=?', country);
        var referenceHostInstanceList = [];

        while (referenceHostList.isValidRow()) {

            var referenceHostInstance = new App.Domains.ReferenceHost({
                id: referenceHostList.fieldByName('id'),
                host: referenceHostList.fieldByName('host'),
                country: referenceHostList.fieldByName('country')
            });

            // collect the generated domain instance an move to the next list item
            referenceHostInstanceList.push(referenceHostInstance);
            referenceHostList.next();

        }

        // close the database connection
        referenceHostList.close();

        return referenceHostInstanceList;

    },

    pingHosts: function (referenceHostInstanceList) {

        // prevent overlapping ping queues
        if (App.Services.ReferenceHostService.referenceHostQueueCount) {
            App.Log.debug('ignored pingHost command since an active ping queue is currently running: ', App.Services.ReferenceHostService.referenceHostQueueCount, ' hosts to ping');
            return false;
        }

        // set the initial ping queue length
        App.Services.ReferenceHostService.referenceHostQueueCount = referenceHostInstanceList.length;

        App.Log.debug('##############################################################################################################');
        App.Log.debug('# start ping sequence');

        _.each(referenceHostInstanceList, function (referenceHostInstance) {

            App.Services.ReferenceHostService.pingHost(referenceHostInstance);

        });

        App.Log.debug('# end ping sequence');
        App.Log.debug('##############################################################################################################');

    },

    pingHost: function (referenceHostInstance) {

        App.Log.debug('# pinging host ID ' + referenceHostInstance.id + ' in target country ' + referenceHostInstance.country + ' : ', referenceHostInstance.host, referenceHostInstance.port);

        var referenceHostHash = referenceHostInstance.getHash();
        var connection = App.Services.ReferenceHostService.tcpConnections[referenceHostHash] = Ti.Network.Socket.createTCP({
            host: referenceHostInstance.host,
            port: referenceHostInstance.port,
            timeout: Config.pingTimeout,
            connected: App.Controllers.ReferenceHostServiceController.pingSuccessCallback,
            error: App.Controllers.ReferenceHostServiceController.pingErrorCallback
        });
        connection.connect();

    },

    evaluateCurrentPingQueue: function () {

        if (App.Services.ReferenceHostService.referenceHostQueueCount == 0) {

            var positiveCount = App.Services.ReferenceHostService.positiveReferenceHostQueueCount;
            var negativeCount = App.Services.ReferenceHostService.negativeReferenceHostQueueCount;
            var totalCount = positiveCount + negativeCount;

            App.Log.debug('##############################################################################################################');
            App.Log.debug('# the ping queue has been finished:');
            App.Log.debug('# positiveCount: ', positiveCount);
            App.Log.debug('# negativeCount: ', negativeCount);
            App.Log.debug('# totalCount: ', totalCount);
            App.Log.debug('##############################################################################################################');

            // if any reference host was pingable it means that the hilo server is not accessible though the client has a connection to the internet
            if (positiveCount > 0) {

                App.Log.debug('##############################################################################################################');
                App.Log.debug('# the hilo server is probably blocked by a censor from ', App.state.country);
                App.Log.debug('# switching to a VPN node now...');
                App.Log.debug('##############################################################################################################');

                App.Controllers.ReferenceHostServiceController.networkRestrictionDetectedCallback();

            }

            App.Services.ReferenceHostService.resetReferenceHostQueue();

        }

    },

    resetReferenceHostQueue: function () {

        App.Services.ReferenceHostService.referenceHostQueueCount = 0;
        App.Services.ReferenceHostService.positiveReferenceHostQueueCount = 0;
        App.Services.ReferenceHostService.negativeReferenceHostQueueCount = 0;

    },

    closeTcpConnection: function (host, port) {

        var tcpConnectionHash = App.Domains.ReferenceHost.getHash(host, port);
        var tcpConnection = App.Services.ReferenceHostService.tcpConnections[tcpConnectionHash];

        try {

            if (tcpConnection.status == Ti.Network.Socket.CONNECTED) {
                tcpConnection.close();
            }

            // remove the connection handle from the tcpConnections object
            delete App.Services.ReferenceHostService.tcpConnections[tcpConnectionHash];

            App.Log.debug('# closed tcp connection: ', tcpConnectionHash);
        }
        catch (exception) {
            App.Log.debug('# error while closing the tcp connection: ', tcpConnectionHash);
            App.Log.debug('# error object: ', exception);
        }

    }

};