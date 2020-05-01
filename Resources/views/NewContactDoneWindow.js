App.UI.NewContactDoneWindow = function () {

    var that = this;

    this.contactNumber = '0176 569 56 69 65';
    this.contactName = 'Mary';
    this.contactSurname = 'Hill';
    // load defaults
    this.defaults = App.Defaults.NewContactDoneWindow;
    
    this.windowProperties = this.defaults.Window;
    this.titleControlViewProperties = this.defaults.TitleControlView;
    this.saveButtonProperties = this.defaults.SaveButton;
    this.profileImageViewProperties = this.defaults.ProfileImageView;
    this.editViewProperties = this.defaults.EditView;
    this.profileNameLabelProperties = _.extend({},this.defaults.ProfileNameLabel,{text:this.contactName});
    this.profileSurnameLabelProperties = _.extend({},this.defaults.ProfileSurnameLabel,{text:this.contactSurname});
    this.editButtonProperties = this.defaults.EditButton;
    this.line1ViewProperties = _.extend({},this.defaults.LineView,{top:210});
    this.line2ViewProperties = _.extend({},this.defaults.LineView,{top:250});
    this.mobileLabelProperties = this.defaults.MobileLabel;
    this.mobileNumberLabelProperties = _.extend({},this.defaults.MobileNumberLabel,{text:this.contactNumber});

    // create elements
    this.window = Titanium.UI.createWindow(this.windowProperties);
    this.titleControlView = Ti.UI.createView(this.titleControlViewProperties);
    this.saveButton = Ti.UI.createButton(this.saveButtonProperties);
    this.profileImageView = Ti.UI.createImageView(this.profileImageViewProperties);
    this.editView = Ti.UI.createView(this.editViewProperties);
    this.profileNameLabel = Ti.UI.createLabel(this.profileNameLabelProperties);
    this.line1View = Ti.UI.createView(this.line1ViewProperties);
    this.profileSurnameLabel = Ti.UI.createLabel(this.profileSurnameLabelProperties);
    this.line2View = Ti.UI.createView(this.line2ViewProperties);
    this.editButton = Ti.UI.createButton(this.editButtonProperties);
    this.mobileLabel = Ti.UI.createLabel(this.mobileLabelProperties);
    this.mobileNumberLabel = Ti.UI.createLabel(this.mobileNumberLabelProperties);
    

    //assemble elements
    this.window.setRightNavButton(this.saveButton);
    this.window.add(this.profileImageView);
    this.window.add(this.editView);
    this.window.add(this.profileNameLabel);
    this.window.add(this.line1View);
    this.window.add(this.profileSurnameLabel);
    this.window.add(this.line2View);
    this.window.add(this.editButton);
    this.window.add(this.mobileLabel);
    this.window.add(this.mobileNumberLabel);

    //events
    
    // this.editButton.addEventListener('click', _.bind(App.Controllers.MoreWindowController.editButtonClick, that));
    // this.scanSymbolButton.addEventListener('click', _.bind(App.Controllers.MoreWindowController.scanSymbolButtonClick, that));

};


App.UI.NewContactDoneWindow.prototype = {};