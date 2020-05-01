///////////////////win 3////////////////////////////////////

App.UI.CallsWindow = function() {
	
	var that = this;
	
	this.defaults = App.Defaults.CallsWindow;
	
	// load defaults
	this.windowProperties = this.defaults.Window;
	this.searchBarProperties = this.defaults.SearchBar;
	this.titleControlViewProperties = this.defaults.TitleControlView;
	this.allLostTabbedBarProperties = this.defaults.AllLostTabbedBar;
	this.tableViewProperties = this.defaults.TableView;
	
	// create elements
	this.window = Ti.UI.createWindow(this.windowProperties);
	this.tableView = Ti.UI.createTableView(this.tableViewProperties);
	this.searchBar = Titanium.UI.createSearchBar(this.searchBarProperties);
	this.titleControlView = Ti.UI.createView(this.titleControlViewProperties);
	this.allLostTabbedBar = Titanium.UI.createTabbedBar(this.allLostTabbedBarProperties);
	
	
	// assemle elements
	 this.tableView.setSearch(this.searchBar);
	 this.window.add(this.tableView);
	 this.titleControlView.add(this.allLostTabbedBar);
	
     
	 this.window.setTitleControl(this.titleControlView);
	 this.setContacts(contactInstanceList);
	 
	 //events
	 
	// this.tabbedBarHiloAllOut.addEventListener('click', _.bind(App.Controllers.CallsWindowController.tabbedBarHiloAllOutClick, that));
	
};
////
App.UI.CallsWindow.prototype = {
	
	setContacts: function (contactInstanceList) {

        var rows = [];

        _.each(contactInstanceList, function (contactInstance) {

            var callsTableViewRow = new App.UI.CallsTableViewRow(contactInstance);

            rows.push(callsTableViewRow.tableViewRow);

        });

        this.tableView.setData(rows);

    }
	
	
};