App.UI.NewContactWindow = function () {

	var that = this;

	//load defaults
	this.defaults = App.Defaults.NewContactWindow;
	this.windowProperties = this.defaults.Window;
	this.titleControlViewProperties = this.defaults.TitleControlView;
	this.newContactLabelProperties = this.defaults.NewContactLabel;

	this.phoneViewProperties = this.defaults.PhoneView;
	this.phoneLabelProperties = this.defaults.PhoneLabel;

	this.contactNumberViewProperties = this.defaults.ContactNumberView;
	this.contactNumberTextFieldProperties = this.defaults.ContactNumberTextField;
	this.contactNumberButtonProperties = this.defaults.ContactNumberButton;

	this.scanViewProperties = this.defaults.ScanView;
	this.scanLabelProperties = this.defaults.ScanLabel;

	this.qrScanViewProperties = this.defaults.QrScanView;
	this.qrScanImageViewProperties = this.defaults.QrScanImageView;
	this.qrScanLabelProperties = this.defaults.QrScanLabel;
	this.arrowButtonProperties = this.defaults.ArrowButton;
	this.lineViewProperties = this.defaults.LineView;
	this.lineSmallViewProperties = _.extend({},this.defaults.LineView,{width:'90%'});
	
	
	this.pleaseViewProperties = this.defaults.PleaseView;
	this.pleaseLabelProperties = this.defaults.PleaseLabel;

	this.securityViewProperties = this.defaults.SecurityView;
	this.securityLabelProperties = this.defaults.SecurityLabel;

	this.passwordViewProperties = this.defaults.PasswordView;
	this.lockImageViewProperties = this.defaults.LockImageView;
	this.password1TextFieldProperties = _.extend({},this.defaults.PasswordTextField,{hintText:L('newContactWindowPassword1HintText')});
	this.password2TextFieldProperties = _.extend({},this.defaults.PasswordTextField,{hintText:L('newContactWindowPassword2HintText')});

	//create elements
	this.window = Titanium.UI.createWindow(this.windowProperties);
	this.titleControlView = Ti.UI.createView(this.titleControlViewProperties);
	this.newContactLabel = Ti.UI.createLabel(this.newContactLabelProperties);

	this.phoneView = Ti.UI.createView(this.phoneViewProperties);
	this.phoneLabel = Ti.UI.createLabel(this.phoneLabelProperties);

	this.contactNumberView = Ti.UI.createView(this.contactNumberViewProperties);
	this.contactNumberTextField = Ti.UI.createTextField(this.contactNumberTextFieldProperties);
	this.contactNumberButton = Ti.UI.createButton(this.contactNumberButtonProperties);

	this.scanView = Ti.UI.createView(this.scanViewProperties);
	this.scanLabel = Ti.UI.createLabel(this.scanLabelProperties);

	this.qrScanView = Ti.UI.createView(this.qrScanViewProperties);

	this.qrScanImageView = Ti.UI.createImageView(this.qrScanImageViewProperties);
	this.qrScanLabel =  Ti.UI.createLabel(this.qrScanLabelProperties);
	this.arrowButton = Ti.UI.createButton(this.arrowButtonProperties);
	this.lineView = Ti.UI.createView(this.lineViewProperties);

	this.pleaseView = Ti.UI.createView(this.pleaseViewProperties);
	this.pleaseLabel =  Ti.UI.createLabel(this.pleaseLabelProperties);

	this.securityView = Ti.UI.createView(this.securityViewProperties);
	this.securityLabel =  Ti.UI.createLabel(this.securityLabelProperties);

	this.password1View = Ti.UI.createView(this.passwordViewProperties);
	this.lock1ImageView = Ti.UI.createImageView(this.lockImageViewProperties);
	this.password1TextField = Ti.UI.createTextField(this.password1TextFieldProperties);
	this.line1View = Ti.UI.createView(this.lineSmallViewProperties);

	this.password2View = Ti.UI.createView(this.passwordViewProperties);
	this.lock2ImageView = Ti.UI.createImageView(this.lockImageViewProperties);
	this.password2TextField = Ti.UI.createTextField(this.password2TextFieldProperties);
	this.line2View = Ti.UI.createView(this.lineSmallViewProperties);

	//assemble elements
	this.titleControlView.add(this.newContactLabel);
	this.phoneView.add(this.phoneLabel);
	this.contactNumberView.add(this.contactNumberTextField);
	this.contactNumberView.add(this.contactNumberButton);
	this.scanView.add(this.scanLabel);
	this.qrScanView.add(this.qrScanImageView);
	this.qrScanView.add(this.qrScanLabel);
	this.qrScanView.add(this.arrowButton);
    this.pleaseView.add(this.pleaseLabel);
	this.securityView.add(this.securityLabel);
	this.password1View.add(this.lock1ImageView);
	this.password1View.add(this.password1TextField);
	this.password2View.add(this.lock2ImageView);
	this.password2View.add(this.password2TextField);

	this.window.add(this.phoneView);
	this.window.add(this.contactNumberView);
	this.window.add(this.scanView);
	this.window.add(this.qrScanView);
	this.window.add(this.lineView);
	this.window.add(this.pleaseView);
	this.window.add(this.securityView);
	this.window.add(this.password1View);
	this.window.add(this.line1View);
	this.window.add(this.password2View);
	this.window.add(this.line2View);

	this.window.setTitleControl(this.titleControlView);
	this.window.backButtonTitle = L('Cancel');

	//events
	 this.arrowButton.addEventListener('click', _.bind(App.Controllers.NewContactWindowController.arrowButtonClick, this));
	 this.contactNumberButton.addEventListener('click', _.bind(App.Controllers.NewContactWindowController.contactNumberButtonClick, this));

}


App.UI.NewContactWindow.prototype = {}