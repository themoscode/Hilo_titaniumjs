
App.UI.CountryTelWindow = function() {
	
	// load defaults
	var that = this;
	this.defaults = App.Defaults.CountryTelWindow;
	this.windowProperties = this.defaults.Window;
	
	
	this.wrapperViewProperties = this.defaults.WrapperView;
	this.titleLabelProperties = this.defaults.TitleLabel;
	this.descriptionLabelProperties = this.defaults.DescriptionLabel;
	this.countryLabelProperties = this.defaults.CountryLabel;
	this.countryTextFieldProperties = this.defaults.CountryTextField;
	this.rightArrowImageViewProperties = this.defaults.RightArrowImageView;
	this.lineImageViewProperties = this.defaults.LineImageView;
	this.phoneNumberTextFieldProperties = this.defaults.PhoneNumberTextField;
	
    this.lineImageView2Properties = this.defaults.LineImageView2;
	this.submitButtonProperties = this.defaults.SubmitButton;
	
	
	//create elements

	this.window = Ti.UI.createWindow(this.windowProperties);
    this.wrapperView = Ti.UI.createView(this.wrapperViewProperties);

	this.titleLabel = Ti.UI.createLabel(this.titleLabelProperties);
	this.descriptionLabel = Ti.UI.createLabel(this.descriptionLabelProperties);
	this.countryLabel = Ti.UI.createLabel(this.countryLabelProperties);
	this.countryTextField = Ti.UI.createTextField(this.countryTextFieldProperties);
	this.rightArrowImageView = Ti.UI.createImageView(this.rightArrowImageViewProperties);
	this.lineImageView = Ti.UI.createImageView(this.lineImageViewProperties);
	this.phoneNumberTextField = Ti.UI.createTextField(this.phoneNumberTextFieldProperties);
	this.lineImageView2 = Ti.UI.createImageView(this.lineImageView2Properties);
	this.submitButton = Ti.UI.createButton(this.submitButtonProperties);
	
	//assemble elements
	this.wrapperView.add(this.titleLabel);
	this.wrapperView.add(this.descriptionLabel);
	this.wrapperView.add(this.countryLabel);
	this.wrapperView.add(this.countryTextField);
	this.wrapperView.add(this.rightArrowImageView);
	this.wrapperView.add(this.lineImageView);
	
	this.wrapperView.add(this.phoneNumberTextField);
	this.wrapperView.add(this.lineImageView2);
	this.wrapperView.add(this.submitButton);

	this.window.add(this.wrapperView);

    //events
     
    this.submitButton.addEventListener('click', _.bind(App.Controllers.CountryTelWindowController.submitButtonClick,that));
	
   

};

App.UI.CountryTelWindow.prototype = {



	
};