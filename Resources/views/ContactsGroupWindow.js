App.UI.ContactsGroupWindow = function () {

    var that = this;

    this.defaults = App.Defaults.ContactsGroupWindow;
   
    this.groupContacts = []; //contacts to store in the group

    // load defaults
    this.windowProperties = this.defaults.Window;
   
    this.titleControlViewProperties = this.defaults.TitleControlView;
    this.titleLabelProperties = this.defaults.TitleLabel;
    this.tableViewProperties = this.defaults.TableView;
    this.namesViewProperties = this.defaults.NamesView;
    this.namesLabelProperties = this.defaults.NamesLabel;
    this.nextButtonProperties = this.defaults.NextButton;

    // create elements
    this.window = Ti.UI.createWindow(this.windowProperties);
    this.tableView = Ti.UI.createTableView(this.tableViewProperties);
   
    this.titleControlView = Ti.UI.createView(this.titleControlViewProperties);
    this.titleLabel = Ti.UI.createLabel(this.titleLabelProperties);
    this.namesView = Ti.UI.createView(this.namesViewProperties);
    this.namesLabel = Ti.UI.createLabel(this.namesLabelProperties);
    this.nextButton = Ti.UI.createButton(this.nextButtonProperties);
    
    // assemble elements
    this.namesView.add(this.namesLabel);
    this.titleControlView.add(this.titleLabel);
    this.window.setTitleControl(this.titleControlView);
    this.window.setRightNavButton(this.nextButton);
    this.window.add(this.namesView);
    this.window.add(this.tableView);

    //events
    this.nextButton.addEventListener('click',_.bind(App.Controllers.ContactsGroupWindowController.nextButtonClick, this));

};

App.UI.ContactsGroupWindow.prototype = {


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

            if (contactInstance.hasHilo === true) {displayRow(contactInstance,{targetWindow:'contactsGroupWindow'}); }
           
        });

        this.tableView.setData(rows);
    }

};