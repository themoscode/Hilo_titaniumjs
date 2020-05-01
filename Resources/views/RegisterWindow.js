App.UI.RegisterWindow = function() {
	
	// load defaults
	var that = this;

	this.defaults = App.Defaults.RegisterWindow;
	this.windowProperties = this.defaults.Window;
	this.wrapperViewProperties = this.defaults.WrapperView;
	this.registerLabelProperties = this.defaults.RegisterLabel;
	this.confirmCodeLabelProperties = this.defaults.ConfirmCodeLabel;
	this.confirmCodeTextFieldProperties = this.defaults.ConfirmCodeTextField;
    this.furtherButtonProperties = this.defaults.FurtherButton;
    this.smsQuestionLabelProperties = this.defaults.SmsQuestionLabel;
    this.neuConfirmationCodeSendButtonProperties = this.defaults.NeuConfirmationCodeSendButton;

	//create elements
	this.window = Ti.UI.createWindow(this.windowProperties);
	this.wrapperView = Ti.UI.createView(this.wrapperViewProperties);
    this.registerLabel = Ti.UI.createLabel(this.registerLabelProperties);
    this.confirmCodeLabel = Ti.UI.createLabel(this.confirmCodeLabelProperties);
    this.confirmCodeTextField = Ti.UI.createTextField(this.confirmCodeTextFieldProperties);
	this.furtherButton = Ti.UI.createButton(this.furtherButtonProperties);
	this.smsQuestionLabel = Ti.UI.createLabel(this.smsQuestionLabelProperties);
	this.neuConfirmationCodeSendButton = Ti.UI.createButton(this.neuConfirmationCodeSendButtonProperties);

	//assemble elements
	this.wrapperView.add(this.registerLabel);
    this.wrapperView.add(this.confirmCodeLabel);
    this.wrapperView.add(this.confirmCodeTextField);
    this.wrapperView.add(this.furtherButton);
    this.wrapperView.add(this.smsQuestionLabel);
    this.wrapperView.add(this.neuConfirmationCodeSendButton);
    this.window.add(this.wrapperView);
    
    //events
    this.furtherButton.addEventListener('click', _.bind(App.Controllers.RegisterWindowController.furtherButtonClick, that));
    

};

App.UI.RegisterWindow.prototype = {};