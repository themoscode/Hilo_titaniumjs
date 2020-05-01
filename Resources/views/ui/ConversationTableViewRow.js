App.UI.ConversationTableViewRow = function(conversationInstance) {

	this.conversationInstance = conversationInstance;

    var defaults = App.Defaults.ConversationTableViewRow;

    // load defaults
    this.tableViewRowProperties = _.extend({}, defaults.TableViewRow,{filter:conversationInstance.getConversationName()});
    this.optionViewProperties = _.extend({}, defaults.OptionView);
    this.viewProperties = _.extend({}, defaults.View);

    
    this.verticalLineImageViewProperties = _.extend({}, defaults.VerticalLineImageView);
    this.lockedImageViewProperties = _.extend({}, defaults.LockedImageView);
    
    this.messagesNumberViewProperties = _.extend({}, defaults.MessagesNumberView);
    this.messagesNumberLabelProperties = _.extend({}, defaults.MessagesNumberLabel,{text:conversationInstance.messagesNumber});
    this.messageLabelProperties = _.extend({}, defaults.MessageLabel,{text:conversationInstance.message});
    
    this.userNameLabelProperties = _.extend({}, defaults.UserNameLabel,{text:conversationInstance.getConversationName()});
    this.timeLabelProperties = _.extend({}, defaults.TimeLabel);
    this.callButtonProperties = _.extend({}, defaults.CallButton);
    this.lockButtonProperties = _.extend({}, defaults.LockButton);
    this.deleteButtonProperties = _.extend({}, defaults.DeleteButton);

    //create views
    this.tableViewRow = Ti.UI.createTableViewRow(this.tableViewRowProperties);
    this.optionView = Ti.UI.createView(this.optionViewProperties);
    this.view = Ti.UI.createView(this.viewProperties);
    this.verticalLineImageView = Ti.UI.createImageView(this.verticalLineImageViewProperties);
    this.lockedImageView = Ti.UI.createImageView(this.lockedImageViewProperties);
    this.messagesNumberView = Ti.UI.createView(this.messagesNumberViewProperties);
    this.messagesNumberLabel = Ti.UI.createLabel(this.messagesNumberLabelProperties);
    this.messageLabel =  Ti.UI.createLabel(this.messageLabelProperties);
    this.userNameLabel =  Ti.UI.createLabel(this.userNameLabelProperties);
    this.timeLabel =  Ti.UI.createLabel(this.timeLabelProperties);

    this.callButton =  Ti.UI.createButton(this.callButtonProperties);
    this.lockButton =  Ti.UI.createButton(this.lockButtonProperties);
    this.deleteButton =  Ti.UI.createButton(this.deleteButtonProperties);

    // attach event listeners
    this.view.addEventListener('swipe', _.bind(this.swipeCallback, this));
    this.view.addEventListener('click', _.bind(App.Controllers.ConversationTableViewRowController.tableViewRowClick, this));
    this.callButton.addEventListener('click', _.bind(App.Controllers.ConversationTableViewRowController.callButtonClick, this));
    this.lockButton.addEventListener('click', _.bind(App.Controllers.ConversationTableViewRowController.lockButtonClick, this));
    this.deleteButton.addEventListener('click', _.bind(App.Controllers.ConversationTableViewRowController.deleteButtonClick, this));
   
    // assemble views
    this.optionView.add(this.callButton);
    this.optionView.add(this.lockButton);
    this.optionView.add(this.deleteButton);

   
    this.messagesNumberView.add(this.messagesNumberLabel);

    this.view.add(this.verticalLineImageView);
    
    if (conversationInstance.type == 'single' || (conversationInstance.type == 'group' && conversationInstance.groupImage != null)) {
        
        var image = (conversationInstance.type == 'single') ? conversationInstance.singleImage : conversationInstance.groupImage;

        //load defaults
        this.avatarImageViewProperties = _.extend({}, defaults.AvatarImageView, {backgroundImage: image});
        this.avatarViewProperties = _.extend({}, defaults.AvatarView);

        //create elements
        this.avatarImageView = Ti.UI.createView(this.avatarImageViewProperties);
        this.avatarView = Ti.UI.createView(this.avatarViewProperties);
        
        //assemble elements
        this.avatarView.add(this.avatarImageView);
        this.view.add(this.avatarView);
    }
    else { //group without user defined image
       
       if (conversationInstance.people[1]) {
            //load defaults
            this.group2ViewProperties = _.extend({}, defaults.Group2View);
            this.group2Person1ImageViewProperties = _.extend({}, defaults.Group2Person1ImageView,{backgroundImage:conversationInstance.people[0].image});
            this.group2Person2ImageViewProperties = _.extend({}, defaults.Group2Person2ImageView,{backgroundImage:conversationInstance.people[1].image});
            //create elements
            this.group2Person1ImageView = Ti.UI.createImageView(this.group2Person1ImageViewProperties);
            this.group2Person2ImageView = Ti.UI.createImageView(this.group2Person2ImageViewProperties);
            this.group2View = Ti.UI.createView(this.group2ViewProperties);
       }
        if (conversationInstance.people[2]) {
            //load defaults
            this.group3ViewProperties = _.extend({}, defaults.Group3View);
            this.group3Person1ImageViewProperties = _.extend({}, defaults.Group3Person1ImageView,{backgroundImage:conversationInstance.people[0].image});
            this.group3Person2ImageViewProperties = _.extend({}, defaults.Group3Person2ImageView,{backgroundImage:conversationInstance.people[1].image});
            this.group3Person3ImageViewProperties = _.extend({}, defaults.Group3Person3ImageView,{backgroundImage:conversationInstance.people[2].image});
            //create elements
            this.group3Person1ImageView = Ti.UI.createImageView(this.group3Person1ImageViewProperties);
            this.group3Person2ImageView = Ti.UI.createImageView(this.group3Person2ImageViewProperties);
            this.group3Person3ImageView = Ti.UI.createImageView(this.group3Person3ImageViewProperties);
            this.group3View = Ti.UI.createView(this.group3ViewProperties);
       } 
        if (conversationInstance.people[3]) {  
            //load defaults
            this.group4ViewProperties = _.extend({}, defaults.Group4View);
            this.group4Person3ImageViewProperties = _.extend({}, defaults.Group4Person3ImageView,{backgroundImage:conversationInstance.people[2].image});
            this.group4Person4ImageViewProperties = _.extend({}, defaults.Group4Person4ImageView,{backgroundImage:conversationInstance.people[3].image});
            //create elements
            this.group4Person3ImageView = Ti.UI.createImageView(this.group4Person3ImageViewProperties);
            this.group4Person4ImageView = Ti.UI.createImageView(this.group4Person4ImageViewProperties);
            this.group4View = Ti.UI.createView(this.group4ViewProperties);
       }
        
        // assemble elements
      
        if (conversationInstance.recipients == 2) {
            this.view.add(this.group2Person1ImageView);
            this.view.add(this.group2Person2ImageView);
            this.view.add(this.group2View);
        }
        else if (conversationInstance.recipients == 3) {  
            this.view.add(this.group3Person1ImageView);
            this.view.add(this.group3Person2ImageView);
            this.view.add(this.group3Person3ImageView);
            this.view.add(this.group3View);
        }
        else if (conversationInstance.recipients >= 4) {
            this.view.add(this.group3Person1ImageView); //NOTE : group4Person1 = group3Person1
            this.view.add(this.group3Person2ImageView); //NOTE : group4Person2 = group3Person2
            this.view.add(this.group4Person3ImageView);
            this.view.add(this.group4Person4ImageView);
            this.view.add(this.group4View);
        }
    }

    
    this.view.add(this.messageLabel);
    this.view.add(this.userNameLabel);
    this.view.add(this.timeLabel);
    
    if (conversationInstance.locked == true) {this.view.add(this.lockedImageView);}
    if (conversationInstance.messagesNumber > 0) {this.view.add(this.messagesNumberView);}

    this.tableViewRow.add(this.optionView);
    this.tableViewRow.add(this.view);

};


App.UI.ConversationTableViewRow.prototype = {

    swipeCallback: function (e) {

        if (e.direction == 'left') {
            this.view.animate({left:-207, duration:250});
            this.optionView.animate({opacity: 1, duration: 250});
        } else if (e.direction == 'right') {
            this.view.animate({left: 5, duration: 250});
            this.optionView.animate({opacity: 0, duration: 250});
        }

    }

};

