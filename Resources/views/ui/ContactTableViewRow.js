App.UI.ContactsTableViewRow = function (contactInstance,properties) {

    this.targetWindow = properties ? properties.targetWindow : 'contactsWindow';
    this.contactInstance = contactInstance;

    // load defaults
     var defaults = App.Defaults.ContactTableViewRow;
    this.tableViewRowProperties = _.extend({}, defaults.TableViewRow,{filter:contactInstance.getFullName(),contactInstance:contactInstance});
    this.viewProperties = _.extend({}, defaults.View);
    this.avatarImageViewProperties = _.extend({}, defaults.AvatarImageView, {backgroundImage: contactInstance.image});
    this.avatarViewProperties = _.extend({}, defaults.AvatarView);
    this.labelProperties = _.extend({}, defaults.Label, {text: contactInstance.getFullName()});
    
    // create elements
    this.tableViewRow = Ti.UI.createTableViewRow(this.tableViewRowProperties);
    this.view = Ti.UI.createView(this.viewProperties);
    this.avatarImageView = Ti.UI.createView(this.avatarImageViewProperties);
    this.avatarView = Ti.UI.createView(this.avatarViewProperties);
    this.label = Ti.UI.createLabel(this.labelProperties);
   
   switch (this.targetWindow) {

        case 'contactsWindow':
            
            //load defaults
            this.optionViewProperties = _.extend({}, defaults.OptionView);
            this.logoViewProperties = _.extend({}, defaults.LogoView);
            this.hiloOutButtonProperties = _.extend({}, defaults.HiloOutButton);
            this.deleteButtonProperties = _.extend({}, defaults.DeleteButton);

            //create elements
            this.optionView = Ti.UI.createView(this.optionViewProperties);
            this.logoView = Ti.UI.createImageView(this.logoViewProperties);
            this.hiloOutButton = Ti.UI.createButton(this.hiloOutButtonProperties);
            this.deleteButton = Ti.UI.createButton(this.deleteButtonProperties);
            
            //assemble elements
            this.optionView.add(this.deleteButton);
            this.tableViewRow.add(this.optionView);
            if (contactInstance.hasHilo) {this.view.add(this.logoView);} else {this.view.add(this.hiloOutButton);}

            // attach event listeners
            this.view.addEventListener('swipe', _.bind(this.swipeCallback, this));
            this.view.addEventListener('click', _.bind(App.Controllers.ContactsTableViewRowController.tableViewRowClick, this));
            this.deleteButton.addEventListener('click', _.bind(App.Controllers.ContactsTableViewRowController.deleteButtonClick, this));
            break;
        
        case 'contactsSecretChatWindow':
             // attach event listeners
            this.view.addEventListener('click', _.bind(App.Controllers.ContactsTableViewRowController.tableViewRowClickSecretChat, this));
            break;

        case 'contactsGroupWindow':
            //load defaults
            this.switchProperties = _.extend({}, defaults.Switch);

            //create elements
            this.switch = Ti.UI.createSwitch(this.switchProperties);
           
            // assemble views in this case
            this.view.add(this.switch);

            //attach event listeners 
            this.switch.addEventListener('change',_.bind(App.Controllers.ContactsTableViewRowController.switchClick, this));

            break;

        case 'NewGroupWindow':
        
            break;
        }

    
    // assemble views generally
    this.avatarView.add(this.avatarImageView);
    this.view.add(this.avatarView);
    this.view.add(this.label);
    this.tableViewRow.add(this.view);

};

App.UI.ContactsTableViewRow.prototype = {

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
