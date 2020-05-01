App.Services.NetworkService = {

    /**
     * in some cases we can preclude the blocking of a certain host:
     * e.g. if the device has no network connection it is obvious that
     * the target host can't be addressed due to this lack of connectivity
     * @returns {boolean}
     */
    isBlocked: function (onerrorEvent, response) {

        // we assume that a host is actively blocked and try to find reasons against this assumption afterwards
        var isBlocked = true;

        // if the client is not connected to the internet the caught network
        // error has not been produced by a censor's network restriction
        if (!Ti.Network.online) {
            isBlocked = false;
        }

        // if the error objects contains a http status we know that the apache responded and tht the traffic was probably not blocked
        if (onerrorEvent.code > 0) {
            isBlocked = false;
        }

        // other measures of finding reasons against the upper assumption could be implemented here

        return isBlocked;

    }

};