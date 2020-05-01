App.UI.IncomingCallWindow = function() {
	
	var that = this;
	// load defaults
	this.defaults = App.Defaults.IncomingCallWindow;
	this.windowProperties = this.defaults.Window;
	
	this.callBublleViewProperties = this.defaults.CallBublleView;
	this.profileImageViewProperties = this.defaults.ProfileImageView;
	this.profileNameLabelProperties = this.defaults.ProfileNameLabel;
	this.icomingCallLabelProperties = this.defaults.IcomingCallLabel;
	this.rejectButtonProperties = this.defaults.RejectButton;
	this.messageButtonProperties = this.defaults.MessageButton;
	this.answerButtonProperties = this.defaults.AnswerButton;

	//create elements
	this.profileNameLabel = Ti.UI.createLabel(this.profileNameLabelProperties);
	this.icomingCallLabel = Ti.UI.createLabel(this.icomingCallLabelProperties);
	this.profileImageView = Ti.UI.createImageView(this.profileImageViewProperties);
	this.callBublleView = Ti.UI.createView(this.callBublleViewProperties);
	this.rejectButton = Ti.UI.createButton(this.rejectButtonProperties);
	this.messageButton = Ti.UI.createButton(this.messageButtonProperties);
	this.answerButton = Ti.UI.createButton(this.answerButtonProperties);
	this.window = Titanium.UI.createWindow(this.windowProperties);
	
	//assemble elements
	
	this.window.add(this.profileImageView);
	this.window.add(this.callBublleView);
	this.window.add(this.profileNameLabel);
	this.window.add(this.icomingCallLabel);
	this.window.add(this.rejectButton);
	this.window.add(this.messageButton);
	this.window.add(this.answerButton);
    
    //events
    
    this.rejectButton.addEventListener('click', _.bind(App.Controllers.IncomingCallWindowController.rejectButtonClick,this));
    

};

App.UI.IncomingCallWindow.prototype = {};