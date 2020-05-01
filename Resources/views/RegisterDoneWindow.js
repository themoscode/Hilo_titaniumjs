App.UI.RegisterDoneWindow = function() {
	
	// load defaults
	var that = this;
	this.defaults = App.Defaults.RegisterDoneWindow;
	this.windowProperties = this.defaults.Window;
	this.imageViewProperties = this.defaults.ImageView;
	
	//create elements
	this.window = Ti.UI.createWindow(this.windowProperties);
	this.imageView = Ti.UI.createImageView(this.imageViewProperties);

	//assemble elements
	this.window.add(this.imageView);

    //events
    this.imageView.addEventListener('click',_.bind(App.Controllers.RegisterDoneWindowController.imageClick,that));
    
};

App.UI.RegisterDoneWindow.prototype = {};