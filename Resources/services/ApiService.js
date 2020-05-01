App.Services.Api = {

    /**
     * @param actionUrl the path of the controller action to trigger e.g. /authentication/signup
     * @param method 'POST' | 'GET'
     * @param params an object that is passed as payload together with the request
     * @param loadCallback a function reference that is called after a successful request
     * @param errorCallback a function reference that is called after an unsuccessful request
     */
    load: function (actionUrl, method, params, loadCallback, errorCallback) {

        method = method || App.Enum.METHOD.GET;
        params = params || {};

        if (!Ti.Network.online) {
            alert('offline');
            return false;
        }

        var xhr = Ti.Network.createHTTPClient({
            validatesSecureCertificate: true,
            onload: function (onloadEvent) {

                var response = {};
                var code = onloadEvent.code;

                try {

                    response = JSON.parse(this.responseText);

                    if (loadCallback) {
                        loadCallback(code, response);
                    }

                }
                catch (catchEvent) {

                    App.Controllers.ApiServiceController.errorCallback(onloadEvent, catchEvent);

                }

            },
            onerror: function (onerrorEvent) {

                var code = onerrorEvent.code;
                var response = JSON.parseSave(this.responseText);
                var isBlocked = App.Services.NetworkService.isBlocked(onerrorEvent, response);

                if (isBlocked) {
                    App.Controllers.NetworkServiceController.networkBlockedCallback(onerrorEvent, response);
                }
                else if (errorCallback) {
                    errorCallback(code, response);
                }

            },
            timeout: 1000 * 5
        });

        // add a time token in order to avoid cached responses
        var token = ((actionUrl.indexOf('?') > -1) ? '&' : '?') + 't=' + new Date().getTime() + '&lang=' + Ti.Platform.locale;

        // log the target url
        Ti.API.debug('# api is calling ' + Config.apiUrl + '/' + actionUrl + token + ' as ' + Config.userAgent + ', params: ' + JSON.stringify(params));

        // open the request
        xhr.open(method, Config.apiUrl + '/' + actionUrl + token);

        // add basic authentication credentials (needed during development mode only) after calling the open mthod!
        xhr.setRequestHeader('Authorization', Config.basicAuthCredentials);
        xhr.setRequestHeader('client', Config.userAgent);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.send(params);

    }
};
