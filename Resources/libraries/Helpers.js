////////////////////////////////////////////////////////////////////////////////////////////////////
// global methods

App.setLoadingState = function (value, message, callback) {

    if (value) {
        App.views.spinnerWindow.show(message || '', callback);
    }
    else {
        App.views.spinnerWindow.hide(callback);
    }

};

JSON.parseSave = function (string) {

    var json = undefined;

    try {
        json = JSON.parse(string);
    }
    catch (exception) {
        json = {message: string};
    }

    return json;

};

// global methods
////////////////////////////////////////////////////////////////////////////////////////////////////