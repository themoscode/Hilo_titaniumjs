///////////////////win 2////////////////////////////////////

App.UI.StartWindow = function() {
	
	var that = this;
	// load defaults
	this.defaults = App.Defaults.StartWindow;
	this.windowProperties = this.defaults.Window;
	
	this.logoImageViewProperties = this.defaults.LogoImageView;
	
	//create elements
	this.logoImageView = Ti.UI.createImageView(this.logoImageViewProperties);
	this.window = Titanium.UI.createWindow(this.windowProperties);
	
	//assemble elements
	this.window.add(this.logoImageView);

    //events
    this.logoImageView.addEventListener('click', _.bind(App.Controllers.StartWindowController.logoImageViewClick,that));
    

};

App.UI.StartWindow.prototype = {};