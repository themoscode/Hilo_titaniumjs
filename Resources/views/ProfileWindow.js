App.UI.ProfileWindow = function() {
	
	
	//load defaults
	 this.defaults = App.Defaults.ProfileWindow;
	 this.windowProperties = this.defaults.Window;
	 this.titleControlViewProperties = this.defaults.TitleControlView;
	 this.lockButtonProperties = this.defaults.LockButton;
	 this.editButtonProperties = this.defaults.EditButton;
	 this.profileImageViewProperties = this.defaults.ProfileImageView;
	 this.freeSmsButtonProperties = this.defaults.FreeSmsButton;
	 this.freeCallButtonProperties = this.defaults.FreeCallButton;
	 this.hiloOutButtonProperties = this.defaults.HiloOutButton;
	 this.hiloOutLabelProperties = this.defaults.HiloOutLabel;
	 this.hiloOutDescriptionLabelProperties = this.defaults.HiloOutDescriptionLabel;
	 this.hiloOutViewProperties = this.defaults.HiloOutView;
	 this.mobileNumberLabelProperties = this.defaults.MobileNumberLabel;
	 this.mobileLabelProperties = this.defaults.MobileLabel;
     this.lineViewProperties = this.defaults.LineView;
	 this.statusLabelProperties = this.defaults.StatusLabel;
	 
	 //create elements
	  this.window = Titanium.UI.createWindow(this.windowProperties);
	  this.lockButton = Titanium.UI.createButton(this.lockButtonProperties);
	  this.editButton = Ti.UI.createButton(this.editButtonProperties);
	  this.profileImageView = Ti.UI.createImageView(this.profileImageViewProperties);
	  this.freeSmsButton = Ti.UI.createButton(this.freeSmsButtonProperties);
	  this.freeCallButton = Ti.UI.createButton(this.freeCallButtonProperties);
	  this.hiloOutButton = Ti.UI.createButton(this.hiloOutButtonProperties);
	  this.hiloOutLabel = Ti.UI.createLabel(this.hiloOutLabelProperties);
	  this.hiloOutDescriptionLabel = Ti.UI.createLabel(this.hiloOutDescriptionLabelProperties);
	  this.hiloOutView = Ti.UI.createView(this.hiloOutViewProperties);
	  this.mobileNumberLabel = Ti.UI.createLabel(this.mobileNumberLabelProperties);
	  this.mobileLabel = Ti.UI.createLabel(this.mobileLabelProperties);
	  this.lineView = Ti.UI.createView(this.lineViewProperties);
	  this.statusLabel = Ti.UI.createLabel(this.statusLabelProperties);
	  this.titleControlView = Ti.UI.createView(this.titleControlViewProperties);
	 
	 //assemble elements
	 this.titleControlView.add(this.lockButton);
	 this.titleControlView.add(this.editButton);
	 this.titleControlView.add(this.statusLabel);
	 this.hiloOutView.add(this.hiloOutLabel);
	 this.hiloOutView.add(this.hiloOutDescriptionLabel);
	 this.window.setTitleControl(this.titleControlView);
	 this.window.add(this.profileImageView);
	 this.window.add(this.freeSmsButton);
	 this.window.add(this.freeCallButton);
	 this.window.add(this.hiloOutView);
	 this.window.add(this.lineView);
	 this.window.add(this.hiloOutButton);
	 this.window.add(this.mobileNumberLabel);
	 this.window.add(this.mobileLabel);
};

App.UI.ProfileWindow.prototype = {
	
	setData : function(data) {
		
		this.window.backButtonTitle = data.name;
		this.profileImageView.backgroundImage = data.profileImage;
		this.statusLabel.text = data.status; 
		this.mobileNumberLabel.text = data.mobileNumber;
	}
	
};