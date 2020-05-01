App.UI.CallsTableViewRow = function (contactInstance) {

    this.contactInstance = contactInstance;

    var defaults = App.Defaults.CallsTableViewRow;

    // load defaults
    this.tableViewRowProperties = _.extend({}, defaults.TableViewRow,{filter:contactInstance.getFullName()});
    this.optionViewProperties = _.extend({}, defaults.OptionView);
    this.viewProperties = _.extend({}, defaults.View);
    
    this.avatarImageViewProperties = _.extend({}, defaults.AvatarImageView, {backgroundImage: contactInstance.image});
    this.avatarViewProperties = _.extend({}, defaults.AvatarView);

    this.contactNameLabelProperties =  _.extend({}, defaults.ContactNameLabel,{text: contactInstance.getFullName()});
    this.absenceSymbolImageViewProperties = _.extend({}, defaults.AbsenceSymbolImageView);
    this.absenceTextLabelProperties =  _.extend({}, defaults.AbsenceTextLabel);

    this.callButtonProperties = _.extend({}, defaults.CallButton);
    this.deleteButtonProperties = _.extend({}, defaults.DeleteButton);

    // create views
    this.tableViewRow = Ti.UI.createTableViewRow(this.tableViewRowProperties);
    this.optionView = Ti.UI.createView(this.optionViewProperties);
    this.view = Ti.UI.createView(this.viewProperties);

    this.avatarImageView = Ti.UI.createView(this.avatarImageViewProperties);
    this.avatarView = Ti.UI.createView(this.avatarViewProperties);
    
    this.contactNameLabel = Ti.UI.createLabel(this.contactNameLabelProperties);
    this.absenceSymbolImageView = Ti.UI.createImageView(this.absenceSymbolImageViewProperties);
    this.absenceTextLabel = Ti.UI.createLabel(this.absenceTextLabelProperties);

    this.callButton = Ti.UI.createButton(this.callButtonProperties);
    this.deleteButton = Ti.UI.createButton(this.deleteButtonProperties);
    
     // attach event listeners
    this.view.addEventListener('swipe', _.bind(this.swipeCallback, this));
    this.view.addEventListener('click', _.bind(App.Controllers.CallsTableViewRowController.viewClick, this));
    this.callButton.addEventListener('click', _.bind(App.Controllers.CallsTableViewRowController.callButtonClick, this));
    this.deleteButton.addEventListener('click', _.bind(App.Controllers.CallsTableViewRowController.deleteButtonClick, this));

    // assemble views
    this.optionView.add(this.deleteButton);
    this.avatarView.add(this.avatarImageView);

    this.view.add(this.avatarView);
    this.view.add(this.contactNameLabel);
    this.view.add(this.absenceSymbolImageView);
    this.view.add(this.absenceTextLabel);
    this.view.add(this.callButton);

    this.tableViewRow.add(this.optionView);
    this.tableViewRow.add(this.view);


};

App.UI.CallsTableViewRow.prototype = {

    swipeCallback: function (e) {

        if (e.direction == 'left') {
            this.view.animate({left: -69});
            this.optionView.animate({opacity: 1, duration: 250});
        } else if (e.direction == 'right') {
            this.view.animate({left: 5, duration: 250});
            this.optionView.animate({opacity: 0, duration: 250});
        }

    }

};
