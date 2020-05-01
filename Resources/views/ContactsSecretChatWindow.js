App.UI.ContactsSecretChatWindow = function () {

    var that = this;

    this.defaults = App.Defaults.ContactsSecretChatWindow;

    // load defaults
    this.windowProperties = this.defaults.Window;
    this.searchBarProperties = this.defaults.SearchBar;
    this.titleControlViewProperties = this.defaults.TitleControlView;
    this.titleLabelProperties = this.defaults.TitleLabel;
    this.tableViewProperties = this.defaults.TableView;

    // create elements
    this.window = Ti.UI.createWindow(this.windowProperties);
    this.tableView = Ti.UI.createTableView(this.tableViewProperties);
    this.searchBar = Titanium.UI.createSearchBar(this.searchBarProperties);
    this.titleControlView = Ti.UI.createView(this.titleControlViewProperties);
    this.titleLabel = Ti.UI.createLabel(this.titleLabelProperties);

    // assemble elements
    this.tableView.setSearch(this.searchBar);
    this.titleControlView.add(this.titleLabel);
    this.window.setTitleControl(this.titleControlView);
    this.window.add(this.tableView);

};

App.UI.ContactsSecretChatWindow.prototype = {


    setContacts: function (contactInstanceList) {

        function displayRow(contactInstance,properties){

            var contactsTableViewRow = new App.UI.ContactsTableViewRow(contactInstance,properties);
            var firstLetter = contactInstance.lastName[0];
            if (sectionLetter == null || sectionLetter != firstLetter) {
                sectionLetter = firstLetter;
                var section = new App.UI.ContactTableViewSection(sectionLetter);
                rows.push(section.tableViewSection);
            }
            rows.push(contactsTableViewRow.tableViewRow);
        }

        var rows = [];
        var sectionLetter = null;

        contactInstanceList = _.sortBy(contactInstanceList, 'lastName');
        _.each(contactInstanceList, function (contactInstance) {

            if (contactInstance.hasHilo === true) {displayRow(contactInstance,{targetWindow:'contactsSecretChatWindow'}); }
           
        });

        this.tableView.setData(rows);
    }

};