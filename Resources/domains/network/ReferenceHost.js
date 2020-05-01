App.Domains.ReferenceHost = function (properties) {

    this.id = properties.id;
    this.host = properties.host;
    this.port = 80;
    this.country = properties.country;

};

App.Domains.ReferenceHost.prototype = {

    /**
     * returns a simple hash of the ReferenceHost instance that can be used as a property that helps identifying tcp connections (ping connections)
     * @returns {string}
     */
    getHash: function () {

        return App.Domains.ReferenceHost.getHash(this.host, this.port);

    }

};

/**
 * returns a simple hash of the ReferenceHost instance that can be used as a property that helps identifying tcp connections (ping connections)
 * @returns {string}
 */
App.Domains.ReferenceHost.getHash = function (host, port) {

    return host.replace(/\W/g, '') + '-' + port

};