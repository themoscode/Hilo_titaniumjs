App.UI.InformationWindow = function(){

    
	var that = this;

//load defaults
    this.defaults = App.Defaults.InformationWindow;
    this.windowProperties = this.defaults.Window;
    this.wrapperViewProperties = this.defaults.WrapperView;
    this.informationWindowLabelProperties = this.defaults.InformationWindowLabel;
    this.addPhotoButtonProperties = this.defaults.AddPhotoButton;
    this.addPhotoLabelProperties = this.defaults.AddPhotoLabel;
    this.addPhotoImageViewProperties = this.defaults.AddPhotoImageView;
    this.information1TextfieldProperties = this.defaults.Information1Textfield;
    this.information1LineImageViewProperties = this.defaults.Information1LineImageView;
    this.information2TextfieldProperties = this.defaults.Information2Textfield;
    this.information2LineImageViewProperties = this.defaults.Information2LineImageView;
    this.saveButtonProperties = this.defaults.SaveButton; 

 //create elements
     this.window = Ti.UI.createWindow(this.windowProperties);
     this.wrapperView = Ti.UI.createView(this.wrapperViewProperties);
     this.informationWindowLabel = Ti.UI.createLabel(this.informationWindowLabelProperties);
     this.addPhotoButton = Ti.UI.createButton(this.addPhotoButtonProperties);
     this.addPhotoLabel = Ti.UI.createLabel(this.addPhotoLabelProperties);
     this.addPhotoImageView = Ti.UI.createImageView(this.addPhotoImageViewProperties);
     this.information1Textfield = Ti.UI.createTextField(this.information1TextfieldProperties);
     this.information1LineImageView = Ti.UI.createImageView(this.information1LineImageViewProperties);
     this.information2Textfield = Ti.UI.createTextField(this.information2TextfieldProperties);
     this.information2LineImageView = Ti.UI.createImageView(this.information2LineImageViewProperties);
     this.saveButton = Ti.UI.createButton(this.saveButtonProperties);

 //assemble elements  
    this.addPhotoButton.add(this.addPhotoLabel);
    this.addPhotoButton.add(this.addPhotoImageView);
    this.wrapperView.add(this.informationWindowLabel);
 	this.wrapperView.add(this.addPhotoButton);
 	this.wrapperView.add(this.information1Textfield);
 	this.wrapperView.add(this.information1LineImageView);
 	this.wrapperView.add(this.information2Textfield);
    this.wrapperView.add(this.information2LineImageView);
 	this.wrapperView.add(this.saveButton);
 	this.window.add(this.wrapperView);

//events
    this.saveButton.addEventListener('click', _.bind(App.Controllers.InformationWindowController.saveButtonClick, that));

}

App.UI.InformationWindow.prototype = {};


