App.UI.ButtonTableViewRow = function (icon, text,properties,callback) {

    var extraSeperator = properties ? properties.extraSeperator : true;
    var width = properties ? properties.width : null;
    var height = properties ? properties.height : null;
    var leftIcon = properties ? properties.leftIcon : null;
    var leftLabel = properties ? properties.leftLabel : null;
   
    // load defaults
    var defaults = App.Defaults.ButtonTableViewRow;
    this.tableViewRowProperties = _.extend({}, defaults.TableViewRow);
    this.viewProperties = _.extend({}, defaults.View);
    this.seperatorViewProperties = _.extend({}, defaults.SeparatorView);
    this.iconViewProperties = _.extend({}, defaults.IconView, {backgroundImage: icon});
    this.labelProperties = _.extend({}, defaults.Label, {text: text});

    // create views
    this.tableViewRow = Ti.UI.createTableViewRow(this.tableViewRowProperties);
    this.view = Ti.UI.createView(this.viewProperties);
    this.iconView = Ti.UI.createImageView(this.iconViewProperties);
    this.label = Ti.UI.createLabel(this.labelProperties);
    this.seperatorView = Ti.UI.createImageView(this.seperatorViewProperties);

    // assemble views
    this.view.add(this.iconView);
    this.view.add(this.label);
    
    if (extraSeperator) {this.view.add(this.seperatorView);} 
    if (width) {this.iconView.width = width;}
    if (height) {this.iconView.height = height;}
    if (leftIcon) {this.iconView.left = leftIcon;}
    if (leftLabel) {this.label.left = leftLabel;}

    this.tableViewRow.add(this.view);

    if (callback) {
         this.tableViewRow.addEventListener('click',callback);
    }
   

};

App.UI.ButtonTableViewRow.prototype = {};