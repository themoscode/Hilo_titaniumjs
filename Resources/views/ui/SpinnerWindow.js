App.UI.SpinnerWindow = function () {

    var that = this;

    var defaults = App.Defaults.SpinnerWindow;
    var windowProperties = _.extend({}, defaults.Window);
    var activityIndicatorProperties = _.extend({}, defaults.ActivityIndicator);
    var labelProperties = _.extend({}, defaults.Label);
    var buttonProperties = _.extend({}, defaults.Button);

    // create basic view
    this.window = Ti.UI.createWindow(windowProperties);
    this.activityIndicator = Ti.UI.createActivityIndicator(activityIndicatorProperties);
    this.label = Ti.UI.createLabel(labelProperties);
    this.button = Ti.UI.createButton(buttonProperties);

    this.button.hide();
    this.button.addEventListener('click', function (e) {
        that.hide();
    });

    this.timeout = null;

    // add elements
    this.window.add(this.activityIndicator);
    this.window.add(this.label);

};

App.UI.SpinnerWindow.prototype = {

    show: function (text, callback) {

        var that = this;

        App.state.loading = true;

        clearTimeout(this.timeout);

        this.label.setText(text || '');
        this.activityIndicator.show();

        this.button.hide();
        this.window.setLeft(0);
        this.window.open();

        this.timeout = setTimeout(function () {
            that.button.show();
        }, 1000 * 20);

        if (callback) {
            callback();
        }

    },

    hide: function (callback) {

        App.state.loading = false;

        clearTimeout(this.timeout);
        this.activityIndicator.hide();
        this.window.setLeft(App.Styles.Display.width);
        this.button.hide();

        if (callback) {
            callback();
        }
    }

};