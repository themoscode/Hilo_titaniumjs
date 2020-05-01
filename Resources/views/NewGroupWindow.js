App.UI.NewGroupWindow = function () {

    var that = this;

    this.defaults = App.Defaults.NewGroupWindow;

    // load defaults
    this.windowProperties = this.defaults.Window;
    this.headerViewProperties = this.defaults.HeaderView;
    this.buildButtonProperties = this.defaults.BuildButton;


    this.addPhotoButtonProperties = this.defaults.AddPhotoButton;
    this.addPhotoLabelProperties = this.defaults.AddPhotoLabel;
    this.addPhotoImageViewProperties = this.defaults.AddPhotoImageView;
    this.groupTextFieldProperties = this.defaults.GroupTextField;
    this.lineViewProperties = this.defaults.LineView;

    this.titleControlViewProperties = this.defaults.TitleControlView;
    this.titleLabelProperties = this.defaults.TitleLabel;
    this.tableViewProperties = this.defaults.TableView;

    // create elements
    this.window = Ti.UI.createWindow(this.windowProperties);
    this.tableView = Ti.UI.createTableView(this.tableViewProperties);
    this.headerView = Ti.UI.createView(this.headerViewProperties);
    this.buildButton = Ti.UI.createButton(this.buildButtonProperties);

    this.addPhotoButton = Ti.UI.createButton(this.addPhotoButtonProperties);
    this.addPhotoLabel = Ti.UI.createLabel(this.addPhotoLabelProperties);
    this.addPhotoImageView = Ti.UI.createImageView(this.addPhotoImageViewProperties);

    this.groupTextField  = Ti.UI.createTextField(this.groupTextFieldProperties);
    this.lineView = Ti.UI.createView(this.lineViewProperties);
    this.titleControlView = Ti.UI.createView(this.titleControlViewProperties);
    this.titleLabel = Ti.UI.createLabel(this.titleLabelProperties);

    // assemble elements
    this.addPhotoButton.add(this.addPhotoLabel);
    this.addPhotoButton.add(this.addPhotoImageView);
    this.headerView.add(this.addPhotoButton);
    this.headerView.add(this.groupTextField);
    this.headerView.add(this.lineView);

    this.tableView.setSearch(this.searchBar);
    this.titleControlView.add(this.titleLabel);
    this.window.setTitleControl(this.titleControlView);
    this.window.setRightNavButton(this.buildButton);
    this.window.add(this.headerView);
    this.window.add(this.tableView);

    //events
    this.buildButton.addEventListener('click',_.bind(App.Controllers.NewGroupWindowController.buildButtonClick, this));
    this.addPhotoButton.addEventListener('click',_.bind(App.Controllers.NewGroupWindowController.addPhotoButtonClick, this));
   
};

App.UI.NewGroupWindow.prototype = {


    setContacts: function (contactInstanceList) {

        function displayRow(contactInstance,properties){

            var contactsTableViewRow = new App.UI.ContactsTableViewRow(contactInstance,properties);
            // var firstLetter = contactInstance.lastName[0];
            // if (sectionLetter == null || sectionLetter != firstLetter) {
            //     sectionLetter = firstLetter;
            //     var section = new App.UI.ContactTableViewSection(sectionLetter);
            //     rows.push(section.tableViewSection);
            // }
            rows.push(contactsTableViewRow.tableViewRow);
        }

        var rows = [];
        var sectionLetter = null;

        contactInstanceList = _.sortBy(contactInstanceList, 'lastName');
        _.each(contactInstanceList, function (contactInstance) {

            if (contactInstance.hasHilo === true) {displayRow(contactInstance,{targetWindow:'NewGroupWindow'}); }
           
        });

        this.tableView.setData(rows);
    }

};