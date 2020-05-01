App.UI.ChatsWindow = function() {
	
	this.defaults = App.Defaults.ChatsWindow;
	
	
	// load defaults
	this.windowProperties = this.defaults.Window;
	this.searchBarProperties = this.defaults.SearchBar;
	this.titleControlViewProperties = this.defaults.TitleControlView;
	this.peopleButtonProperties = this.defaults.PeopleButton;
	this.allGroupsTabbedBarProperties = this.defaults.AllGroupsTabbedBar;
	this.newsButtonProperties = this.defaults.NewsButton; 
    this.tableViewProperties = this.defaults.TableView;
	
	// create elements
	this.window = Ti.UI.createWindow(this.windowProperties);
	this.searchBar = Titanium.UI.createSearchBar(this.searchBarProperties);
	this.titleControlView = Ti.UI.createView(this.titleControlViewProperties);
	this.tableView = Ti.UI.createTableView(this.tableViewProperties);
	this.peopleButton = Titanium.UI.createButton(this.peopleButtonProperties);
    this.allGroupsTabbedBar = Ti.UI.iOS.createTabbedBar(this.allGroupsTabbedBarProperties);
    this.newsButton = Titanium.UI.createButton(this.newsButtonProperties);
    
    // assemle elements
    this.tableView.setSearch(this.searchBar);
    this.titleControlView.add(this.peopleButton);
    this.titleControlView.add(this.allGroupsTabbedBar);
	this.titleControlView.add(this.newsButton);
	this.window.add(this.tableView);
	this.window.setTitleControl(this.titleControlView);

	//events
	this.allGroupsTabbedBar.addEventListener('click',_.bind(App.Controllers.ChatsWindowController.allGroupsTabbedBarClick,this));
	this.peopleButton.addEventListener('click',_.bind(App.Controllers.ChatsWindowController.peopleButtonClick,this));

};

App.UI.ChatsWindow.prototype = {

	setConversations: function(conversationInstanceList,properties) {

		function displayRow(conversationInstance) {

			var conversationTableViewRow = new App.UI.ConversationTableViewRow(conversationInstance);
			rows.push(conversationTableViewRow.tableViewRow);
		}

		var type = properties ? properties.type : null;
		var rows = [];

        _.each(conversationInstanceList,function(conversationInstance) {

            if (type != null) {if (type == conversationInstance.type ) {displayRow(conversationInstance);} }
            else {displayRow(conversationInstance)}

        });

        this.tableView.setData(rows);
    }    
};














