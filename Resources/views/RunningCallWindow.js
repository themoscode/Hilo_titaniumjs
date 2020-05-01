App.UI.RunningCallWindow = function() {
	
	var that = this;
	// load defaults
	this.defaults = App.Defaults.RunningCallWindow;
	this.windowProperties = this.defaults.Window;
	
	this.callBublleViewProperties = this.defaults.CallBublleView;
	this.profileImageViewProperties = this.defaults.ProfileImageView;
	this.profileNameLabelProperties = this.defaults.ProfileNameLabel;
	this.runningCallLabelProperties = this.defaults.RunningCallLabel;
	this.microphoneButtonProperties = this.defaults.MicrophoneButton;
	this.keyboardButtonProperties = this.defaults.KeyboardButton;
	this.cameraButtonProperties = this.defaults.CameraButton;
	this.speakerButtonProperties = this.defaults.SpeakerButton;
	this.callStopButtonProperties = this.defaults.CallStopButton;
	
	//create elements
	this.profileNameLabel = Ti.UI.createLabel(this.profileNameLabelProperties);
	this.runningCallLabel = Ti.UI.createLabel(this.runningCallLabelProperties);
	this.profileImageView = Ti.UI.createImageView(this.profileImageViewProperties);
	this.callBublleView = Ti.UI.createView(this.callBublleViewProperties);
	this.microphoneButton = Ti.UI.createButton(this.microphoneButtonProperties);
	this.keyboardButton = Ti.UI.createButton(this.keyboardButtonProperties);
	this.cameraButton = Ti.UI.createButton(this.cameraButtonProperties);
	this.speakerButton = Ti.UI.createButton(this.speakerButtonProperties);
	this.callStopButton = Ti.UI.createButton(this.callStopButtonProperties)
	

	this.window = Titanium.UI.createWindow(this.windowProperties);
	
	//assemble elements
	
	this.window.add(this.profileImageView);
	this.window.add(this.callBublleView);
	this.window.add(this.profileNameLabel);
	this.window.add(this.runningCallLabel);
	this.window.add(this.microphoneButton);

	this.window.add(this.keyboardButton);
	this.window.add(this.cameraButton);
	this.window.add(this.speakerButton);
	this.window.add(this.callStopButton);
	
    //events
    this.microphoneButton.addEventListener('click', _.bind(App.Controllers.RunningCallWindowController.microphoneButtonClick,that));
    this.keyboardButton.addEventListener('click', _.bind(App.Controllers.RunningCallWindowController.keyboardButtonClick,that));
    this.cameraButton.addEventListener('click', _.bind(App.Controllers.RunningCallWindowController.cameraButtonClick,that));
    this.speakerButton.addEventListener('click', _.bind(App.Controllers.RunningCallWindowController.speakerButtonClick,that));
    this.callStopButton.addEventListener('click', _.bind(App.Controllers.RunningCallWindowController.callStopButtonClick,that));

};

App.UI.RunningCallWindow.prototype = {};