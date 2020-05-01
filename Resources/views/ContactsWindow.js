App.UI.ContactsWindow = function () {

    var that = this;

    this.defaults = App.Defaults.ContactsWindow;

    // load defaults
    this.windowProperties = this.defaults.Window;
    this.searchBarProperties = this.defaults.SearchBar;
    this.titleControlViewProperties = this.defaults.TitleControlView;
    this.tabbedBarHiloAllOutProperties = this.defaults.TabbedBar;
    this.plusButtonProperties = this.defaults.PlusButton;
    this.tableViewProperties = this.defaults.TableView;

    // create elements
    this.window = Ti.UI.createWindow(this.windowProperties);
    this.tableView = Ti.UI.createTableView(this.tableViewProperties);
    this.searchBar = Titanium.UI.createSearchBar(this.searchBarProperties);
    this.titleControlView = Ti.UI.createView(this.titleControlViewProperties);
    this.tabbedBar = Ti.UI.iOS.createTabbedBar(this.tabbedBarHiloAllOutProperties);
    this.plusButton = Ti.UI.createButton(this.plusButtonProperties);

    // assemble elements
    this.tableView.setSearch(this.searchBar);
    this.titleControlView.add(this.tabbedBar);
    this.titleControlView.add(this.plusButton);
    this.window.setTitleControl(this.titleControlView);
    this.window.add(this.tableView);

    // attach events
    this.tabbedBar.addEventListener('click', _.bind(App.Controllers.ContactsWindowController.tabbedBarClick, this));
    this.plusButton.addEventListener('click', _.bind(App.Controllers.ContactsWindowController.plusButtonClick, this));

    this.callbackNewGroup = _.bind(App.Controllers.ContactsWindowController.buttonNewGroupClick, this);
    this.callbackNewSecretChat = _.bind(App.Controllers.ContactsWindowController.buttonNewSecretChatClick, this);

};

App.UI.ContactsWindow.prototype = {


    setContacts: function (contactInstanceList,properties) {

        function displayRow(contactInstance){

            var contactsTableViewRow = new App.UI.ContactsTableViewRow(contactInstance);
            var firstLetter = contactInstance.lastName[0];
            if (sectionLetter == null || sectionLetter != firstLetter) {
                sectionLetter = firstLetter;
                var section = new App.UI.ContactTableViewSection(sectionLetter);
                rows.push(section.tableViewSection);
            }
            rows.push(contactsTableViewRow.tableViewRow);
        }

        var hasHilo = properties ? properties.hasHilo : null;
        var rows = [];
        var sectionLetter = null;

        if (hasHilo === true) {
            this.buttonNewGroup = new App.UI.ButtonTableViewRow('images/icons/group.png', L('ContactsWindowLabelNewGroup'),{extraSeperator:true}, this.callbackNewGroup);
            this.buttonNewSecretChat = new App.UI.ButtonTableViewRow('images/icons/secretChat.png', L('ContactsWindowLabelNewSecretChat'),{extraSeperator:true}, this.callbackNewSecretChat);
            rows.push(this.buttonNewGroup.tableViewRow);
            rows.push(this.buttonNewSecretChat.tableViewRow);
        }
        
        contactInstanceList = _.sortBy(contactInstanceList, 'lastName');
        _.each(contactInstanceList, function (contactInstance) {

            if (hasHilo!=null) { if (hasHilo === contactInstance.hasHilo) {displayRow(contactInstance); }}
            else {displayRow(contactInstance);}
             
        });

        this.tableView.setData(rows);
    }

};