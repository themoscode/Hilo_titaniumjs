App.UI.SecretChatGuideLine = function (properties) {

    var top = properties.top;
    var text = properties.text;
    
   
    // load defaults
    var defaults = App.Defaults.SecretChatGuideLine;
    this.viewProperties = _.extend({}, defaults.View,{top:top});
    this.imageViewProperties = _.extend({}, defaults.ImageView);
    this.labelProperties = _.extend({}, defaults.Label,{text:text});

    // create views
   
    this.imageView = Ti.UI.createImageView(this.imageViewProperties);
    this.label = Ti.UI.createLabel(this.labelProperties);
    this.view = Ti.UI.createView(this.viewProperties);

    // assemble views
    this.view.add(this.imageView);
    this.view.add(this.label);
    
};

App.UI.SecretChatGuideLine.prototype = {};