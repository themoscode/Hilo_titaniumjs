App.Services.NodeService = {

    // tcp connection handles are used during the ping process and have
    // to be destroyed within the success or error callback
    tcpConnections: {},
    // stores a temporary array of node instances that are tried during the node connection process
    nodeQueue: [],
    // keeps track of asynchronous background ping requests
    nodeQueueCount: 0,
    // count the accessible reference hosts of the current test queue
    positiveNodeQueueCount: 0,
    // count the not accessible reference hosts of the current test queue
    negativeNodeQueueCount: 0,
    // pinged or used node instance
    nodeInstance: null,

    getAvailableNodes: function (country) {

        var nodeList = App.Services.Database.execute('SELECT * FROM nodes WHERE country=? and available = 1', country);
        var nodeInstanceList = [];

        while (nodeList.isValidRow()) {

            var nodeInstance = new App.Domains.Node({
                id: nodeList.fieldByName('id'),
                ip: nodeList.fieldByName('ip'),
                port: nodeList.fieldByName('port'),
                country: nodeList.fieldByName('country'),
                available: nodeList.fieldByName('available')
            });

            // collect the generated domain instance an move to the next list item
            nodeInstanceList.push(nodeInstance);
            nodeList.next();

        }

        // close the database connection
        nodeList.close();

        return nodeInstanceList;

    },

    findNodeByIp: function (ip) {

        var nodeInstance = null;
        var nodeList = App.Services.Database.execute('SELECT * FROM nodes WHERE ip=?', ip);

        if (nodeList.isValidRow()) {

            nodeInstance = new App.Domains.Node({
                id: nodeList.fieldByName('id'),
                ip: nodeList.fieldByName('ip'),
                maintenancePort: nodeList.fieldByName('maintenancePort'),
                dataPort: nodeList.fieldByName('dataPort'),
                port: nodeList.fieldByName('port'),
                country: nodeList.fieldByName('country'),
                available: nodeList.fieldByName('available')
            });

        }

        return nodeInstance;

    },

    /**
     * persists a node instance in the local database
     * @param {App.Domains.Node} nodeInstance
     * @returns {App.Domains.Node}
     */
    saveNode: function (nodeInstance) {

        App.Services.Database.execute(
            'INSERT INTO nodes (ip,maintenancePort,dataPort,port,country,available) VALUES (?,?,?,?,?,?)',
            nodeInstance.ip,
            nodeInstance.maintenancePort,
            nodeInstance.dataPort,
            nodeInstance.port,
            nodeInstance.country,
            nodeInstance.available
        );

        return nodeInstance;

    },

    startNodeConnectionProcess: function (country) {

        var countryName = L(App.state.country);
        var loadingHint = String.format(L('PingingNodeServers'), countryName)

        App.setLoadingState(true, loadingHint);

        var nodeInstanceList = App.Services.NodeService.nodeQueue = App.Services.NodeService.getAvailableNodes(country);

        if (nodeInstanceList.length) {

            // set the initial node queue length and nodeInstance
            App.Services.NodeService.nodeQueueCount = nodeInstanceList.length;
            App.Services.NodeService.nodeInstance = nodeInstanceList[0];

            App.Services.NodeService.pingNode();

        }

    },
    pingNode: function (nodeInstance) {

        nodeInstance = nodeInstance || App.Services.NodeService.nodeQueue.pop();

        if (!nodeInstance) {
            App.Log.debug('# no node instance available');
            return false;
        }

        App.Log.debug('# pinging node ID ' + nodeInstance.id + ' in target country ' + nodeInstance.country + ' : ', nodeInstance.ip, nodeInstance.port);

        var nodeHash = nodeInstance.getHash();
        var connection = App.Services.NodeService.tcpConnections[nodeHash] = Ti.Network.Socket.createTCP({
            host: nodeInstance.ip,
            port: nodeInstance.port,
            timeout: Config.pingTimeout,
            connected: App.Controllers.NodeServiceController.pingSuccessCallback,
            error: App.Controllers.NodeServiceController.pingErrorCallback
        });
        connection.connect();

    },

    evaluateNodeQueue: function () {

        App.Log.debug('# potencial nodes left in the queue: ', App.Services.NodeService.nodeQueueCount);

        if (App.Services.NodeService.positiveNodeQueueCount) {

            var nodeInstance = App.Services.NodeService.nodeInstance;

            App.Log.debug('# an active node has been found: ', nodeInstance.ip, nodeInstance.port);
            App.Log.debug('##############################################################################################################');

            App.Services.NodeService.connectNode(nodeInstance);

            App.Services.NodeService.resetNodeQueue();

        }

        else if (App.Services.NodeService.nodeQueueCount == 0) {

            App.Log.debug('# no available node has been found');

            App.Services.NodeService.resetNodeQueue();

            App.setLoadingState(false);

        }
        // an active node has not been found and there are still nodes in the queue, hence the next node needs to be pinged
        else {

            App.Services.NodeService.pingNode();

        }

    },

    resetNodeQueue: function () {

        App.Services.NodeService.nodeQueue = [];
        App.Services.NodeService.nodeQueueCount = 0;
        App.Services.NodeService.positiveNodeQueueCount = 0;
        App.Services.NodeService.negativeNodeQueueCount = 0;

        App.Log.debug('# node queue has been reset');
        App.Log.debug('##############################################################################################################');

    },
    closeTcpConnection: function (ip, port) {

        var tcpConnectionHash = App.Domains.Node.getHash(ip, port);
        var tcpConnection = App.Services.NodeService.tcpConnections[tcpConnectionHash];

        try {

            if (tcpConnection.status == Ti.Network.Socket.CONNECTED) {
                tcpConnection.close();
            }

            // remove the connection handle from the tcpConnections object
            delete App.Services.NodeService.tcpConnections[tcpConnectionHash];

            App.Log.debug('# closed tcp connection: ', tcpConnectionHash);
        }
        catch (exception) {
            App.Log.debug('# error while closing the tcp connection: ', tcpConnectionHash);
            App.Log.debug('# error object: ', exception);
        }

        App.Log.debug('##############################################################################################################');

    },

    connectNode: function (nodeInstance) {

        App.Log.debug('# connecting to node ', nodeInstance.ip, nodeInstance.port, '...');

        App.setLoadingState(false);

        App.Controllers.NodeServiceController.foundAvailableNodeCallback();

    },

    updateNodePool: function (nodeInstanceList) {

        _.each(nodeInstanceList, function (nodeInstance) {

            App.Log.debug('# received new node: ', nodeInstance.ip, nodeInstance.port, nodeInstance.maintenancePort, nodeInstance.dataPort, nodeInstance.country);

            var knownNodeInstance = App.Services.NodeService.findNodeByIp(nodeInstance.ip);

            if (knownNodeInstance) {

                App.Log.debug('# found a known node instance in the local database: ', nodeInstance.ip);
                App.Log.debug('# updating known host instance ... ');

            }
            else {

                App.Log.debug('# received an unknown node, starting persistence process for node: ', nodeInstance.ip);
                App.Services.NodeService.saveNode(nodeInstance);

            }

        });

    }

};