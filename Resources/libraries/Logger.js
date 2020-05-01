/**
 * enabled conditional logging support
 * @type {{debug: debug, error: error}}
 */
App.Log = {

    debug: function () {
        (Config.showLogs) ? Function.prototype.apply.call(Ti.API.debug, Ti.API, arguments) : null;
    },
    error: function () {
        (Config.showLogs) ? Function.prototype.apply.call(Ti.API.error, Ti.API, arguments) : null;
    },
    info: function () {
        (Config.showLogs) ? Function.prototype.apply.call(Ti.API.info, Ti.API, arguments) : null;
    }

};