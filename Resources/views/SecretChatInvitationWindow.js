App.UI.SecretChatInvitationWindow = function (contactInstance) {

    var that = this;
    
    this.titleLabelText = String.format(L('SecretChatInvitationTitle1'), contactInstance.firstName);
    this.waitLabelText = String.format(L('SecretChatInvitationWait'), contactInstance.firstName);

    // load defaults
    this.defaults = App.Defaults.SecretChatInvitationWindow;
    this.windowProperties = this.defaults.Window;
    this.titleControlViewProperties = this.defaults.TitleControlView;
    this.nameLabelProperties = _.extend({}, this.defaults.NameLabel,{text:contactInstance.firstName}); 
    this.onlineLabelProperties = this.defaults.OnlineLabel;
    this.lockImageViewProperties = this.defaults.LockImageView;
    this.avatarViewProperties = this.defaults.AvatarView;
    this.avatarImageViewProperties = _.extend({}, this.defaults.AvatarImageView,{backgroundImage:contactInstance.image}); 

    this.bodyViewProperties = this.defaults.BodyView;
    this.lock2ImageViewProperties = this.defaults.Lock2ImageView;

    this.titleLabelProperties = _.extend({}, this.defaults.TitleLabel,{text:this.titleLabelText}); 
    this.title2LabelProperties = this.defaults.Title2Label;
    this.waitLabelProperties = _.extend({}, this.defaults.WaitLabel,{text:this.waitLabelText}); 

    // create elements
    this.window = Ti.UI.createWindow(this.windowProperties);
    this.titleControlView = Ti.UI.createView(this.titleControlViewProperties);
    this.nameLabel = Ti.UI.createLabel(this.nameLabelProperties);
    this.onlineLabel = Ti.UI.createLabel(this.onlineLabelProperties);
    this.lockImageView = Ti.UI.createImageView(this.lockImageViewProperties);
    this.avatarView = Ti.UI.createView(this.avatarViewProperties);
    this.avatarImageView = Ti.UI.createImageView(this.avatarImageViewProperties);
    this.bodyView = Ti.UI.createView(this.bodyViewProperties);
    this.lock2ImageView = Ti.UI.createImageView(this.lock2ImageViewProperties);

    this.titleLabel = Ti.UI.createLabel(this.titleLabelProperties);
    this.title2Label = Ti.UI.createLabel(this.title2LabelProperties);
    this.waitLabel = Ti.UI.createLabel(this.waitLabelProperties);
    
    // assemble elements
    this.avatarView.add(this.avatarImageView)
    this.titleControlView.add(this.nameLabel);
    this.titleControlView.add(this.onlineLabel);
    this.titleControlView.add(this.lockImageView);
    this.titleControlView.add(this.avatarView);
    this.bodyView.add(this.titleLabel);
    this.bodyView.add(this.title2Label);

    this.guideLine1 = new App.UI.SecretChatGuideLine({top:130,text:L('SecretChatInvitationGuideLine1')});
    this.guideLine2 = new App.UI.SecretChatGuideLine({top:170,text:L('SecretChatInvitationGuideLine2')});
    this.guideLine3 = new App.UI.SecretChatGuideLine({top:210,text:L('SecretChatInvitationGuideLine3')});
    this.guideLine4 = new App.UI.SecretChatGuideLine({top:250,text:L('SecretChatInvitationGuideLine4')});

    this.bodyView.add(this.guideLine1.view);
    this.bodyView.add(this.guideLine2.view);
    this.bodyView.add(this.guideLine3.view);
    this.bodyView.add(this.guideLine4.view);

    this.window.setTitleControl(this.titleControlView);
    this.window.add(this.bodyView);
    this.window.add(this.lock2ImageView);
    this.window.add(this.waitLabel);
       
};

App.UI.SecretChatInvitationWindow.prototype = {};