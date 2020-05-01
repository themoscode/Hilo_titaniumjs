///////////////////win 2////////////////////////////////////

App.UI.AboutWindow = function() {
	
	var that = this;
	// load defaults
	this.defaults = App.Defaults.AboutWindow;
	this.windowProperties = this.defaults.Window;
	
	this.logoImageViewProperties = this.defaults.LogoImageView;
	this.titleControlViewProperties = this.defaults.TitleControlView;
	this.titleLabelProperties = this.defaults.TitleLabel;
	this.bubbleViewProperties = this.defaults.BubbleView;
	this.bubbleHiloImageViewProperties = this.defaults.BubbleHiloImageView;
	this.versionLabelProperties = this.defaults.VersionLabel;
	this.instagramButtonProperties = this.defaults.InstagramButton;
	this.facebookButtonProperties = this.defaults.FacebookButton;
	this.twitterButtonProperties = this.defaults.TwitterButton;
	this.hiloLabelProperties = this.defaults.HiloLabel;
	
	
	//create elements
	this.logoImageView = Ti.UI.createImageView(this.logoImageViewProperties);
	this.window = Titanium.UI.createWindow(this.windowProperties);
	this.titleControlView = Ti.UI.createView(this.titleControlViewProperties);
	this.titleLabel = Ti.UI.createLabel(this.titleLabelProperties);
	this.bubbleView = Ti.UI.createView(this.bubbleViewProperties);
	this.bubbleHiloImageView = Ti.UI.createImageView(this.bubbleHiloImageViewProperties);
	this.versionLabel = Ti.UI.createLabel(this.versionLabelProperties);
	this.instagramButton = Ti.UI.createButton(this.instagramButtonProperties);
	this.facebookButton = Ti.UI.createButton(this.facebookButtonProperties);
	this.twitterButton = Ti.UI.createButton(this.twitterButtonProperties);
	this.hiloLabel = Ti.UI.createLabel(this.hiloLabelProperties);

	//assemble elements
	this.bubbleView.add(this.bubbleHiloImageView);
	this.bubbleView.add(this.versionLabel);
	this.bubbleView.add(this.instagramButton);
	this.bubbleView.add(this.facebookButton);
	this.bubbleView.add(this.twitterButton);
	this.bubbleView.add(this.hiloLabel);
	this.titleControlView.add(this.titleLabel);
    this.window.setTitleControl(this.titleControlView);
    this.window.backButtonTitle = '';
	this.window.add(this.logoImageView);
	this.window.add(this.bubbleView);



    //events
    //this.logoImageView.addEventListener('click', _.bind(App.Controllers.StartWindowController.logoImageViewClick,that));
    

};

App.UI.AboutWindow.prototype = {};