App.Domains.Node = function (properties) {

    this.id = properties.id;
    this.ip = properties.ip;

    // used for VPN connections
    this.maintenancePort = properties.maintenancePort;
    this.dataPort = properties.dataPort;

    // used for TLS tunneling
    this.port = 80;

    this.country = properties.country;
    this.available = properties.available;
};

App.Domains.Node.prototype = {

    /**
     * returns a simple hash of the Node instance
     * @returns {string}
     */
    getHash: function () {

        return App.Domains.Node.getHash(this.ip, this.port);

    }

};

/**
 * returns a simple hash of the Node instance that
 * @returns {string}
 */
App.Domains.Node.getHash = function (ip, port) {

    return ip.replace(/\W/g, '') + '-' + port

};

/**
 * converts a simple apns data object to a full blown node instance
 */
App.Domains.Node.parseApnsAccessPointList = function (apnsObjectList) {

    var nodeInstanceList = [];

    _.each(apnsObjectList, function (apnsObject) {

        var nodeInstance = new App.Domains.Node({
            ip: apnsObject.ip,
            maintenancePort: apnsObject.maintenancePort,
            dataPort: apnsObject.dataPort,
            country: apnsObject.country,
            available: true
        });

        nodeInstanceList.push(nodeInstance);

    });

    return nodeInstanceList;

};