App.Domains.NodeStatus = function (properties) {

    /**
     * ip address of the node server
     * @type {String}
     */
    this.ip = properties.ip;

    /**
     * port number of the node server
     * @type {Number}
     */
    this.port = properties.port

    /**
     * temporary status of the node during the moment of the ping process
     * @type {Boolean}
     */
    this.available = properties.available;

    /**
     * date of the detected status
     * @type {Date}
     */
    this.date = properties.date;

};