App.UI.ContactTableViewSection = function (text) {

    var defaults = App.Defaults.ContactTableViewSection;

    // load defaults
    this.viewProperties = _.extend({}, defaults.View);
    this.labelProperties = _.extend({}, defaults.Label, {text: text});

    // create views
    this.tableViewSection = Ti.UI.createTableViewSection();
    this.view = Ti.UI.createView(this.viewProperties);
    this.label = Ti.UI.createLabel(this.labelProperties);

    // assemble views
    this.view.add(this.label);
    this.tableViewSection.setHeaderView(this.view);

};

App.UI.ContactTableViewSection.prototype = {};