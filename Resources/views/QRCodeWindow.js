
App.UI.QRCodeWindow = function() {
	
	// load defaults
	var that = this;
	this.defaults = App.Defaults.QRCodeWindow;
	
	this.windowProperties = this.defaults.Window;
	this.qrCodedescriptionLabelProperties = this.defaults.QrCodeDescriptionLabel;
	this.qrCodeScanImageViewProperties = this.defaults.QrCodeScanImageView;
	this.lineImageViewProperties = this.defaults.LineImageView;
	this.qrCodeScanButtonProperties = this.defaults.QrCodeScanButton;
	
	this.titleControlViewProperties = this.defaults.TitleControlView;
	this.qrTitleLabelProperties = this.defaults.QrTitleLabel;
	
	//create elements

	this.window = Ti.UI.createWindow(this.windowProperties);
    
	this.qrCodedescriptionLabel = Ti.UI.createLabel(this.qrCodedescriptionLabelProperties);
	this.qrCodeScanImageView = Ti.UI.createImageView(this.qrCodeScanImageViewProperties);
	this.lineImageView = Ti.UI.createImageView(this.lineImageViewProperties);
	this.qrCodeScanButton = Ti.UI.createButton(this.qrCodeScanButtonProperties);
	
	this.titleControlView = Ti.UI.createView(this.titleControlViewProperties);
	this.qrTitleLabel = Ti.UI.createLabel(this.qrTitleLabelProperties);

	//assemble elements

	this.titleControlView.add(this.qrTitleLabel);
    this.window.setTitleControl(this.titleControlView);
	this.window.backButtonTitle = L('abort');
	this.window.add(this.qrCodedescriptionLabel);
	this.window.add(this.qrCodeScanImageView);
	this.window.add(this.lineImageView);
	this.window.add(this.qrCodeScanButton);
	

    //events
     
    this.qrCodeScanButton.addEventListener('click', _.bind(App.Controllers.QRCodeWindowController.qrCodeScanButtonClick,that));
	
   

};

App.UI.QRCodeWindow.prototype = {};

