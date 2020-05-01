App.UI.MoreWindow = function () {

    var that = this;

    // load defaults
    this.defaults = App.Defaults.MoreWindow;
    
    this.windowProperties = this.defaults.Window;
    this.titleControlViewProperties = this.defaults.TitleControlView;
    this.scanSymbolButtonProperties = this.defaults.ScanSymbolButton;
    this.moreLabelProperties = this.defaults.MoreLabel;
    this.profileImageViewProperties = this.defaults.ProfileImageView;
    this.editViewProperties = this.defaults.EditView;
    this.profileNameLabelProperties = this.defaults.ProfileNameLabel;
    this.editButtonProperties = this.defaults.EditButton;
    this.controlsTableProperties = this.defaults.ControlsTable;
    

    // create elements
    this.window = Titanium.UI.createWindow(this.windowProperties);
    this.titleControlView = Ti.UI.createView(this.titleControlViewProperties);
    this.scanSymbolButton = Ti.UI.createButton(this.scanSymbolButtonProperties);
    this.moreLabel = Ti.UI.createLabel(this.moreLabelProperties);
    this.profileImageView = Ti.UI.createImageView(this.profileImageViewProperties);
    this.editView = Ti.UI.createView(this.editViewProperties);
    this.profileNameLabel = Ti.UI.createLabel(this.profileNameLabelProperties);
    this.editButton = Ti.UI.createButton(this.editButtonProperties);
    this.controlsTable = Ti.UI.createTableView(this.controlsTableProperties);
    

    //assemble elements
    this.window.setRightNavButton(this.scanSymbolButton);
    this.window.add(this.profileImageView);
    this.window.add(this.editView);
    this.window.add(this.profileNameLabel);
    this.window.add(this.editButton);
    this.window.add(this.controlsTable);
    this.setControlsTable();

    //events
    
    this.editButton.addEventListener('click', _.bind(App.Controllers.MoreWindowController.editButtonClick, this));
    this.scanSymbolButton.addEventListener('click', _.bind(App.Controllers.MoreWindowController.scanSymbolButtonClick, this));
    this.controlsTable.addEventListener('click',_.bind(App.Controllers.MoreWindowController.controlsTableClick, this));
};


App.UI.MoreWindow.prototype = {

    
    setControlsTable: function () {

        var rows = [];

        var buttonTableViewRow1 = new App.UI.ButtonTableViewRow(
            'images/icons/buttonHiloOut2.png', 'Hilo Out',
                {
                    extraSeperator:false,
                    width:23,
                    height:23,
                    leftIcon:15,
                    leftLabel:56
                }
            );

        var buttonTableViewRow2 = new App.UI.ButtonTableViewRow(
            'images/icons/buttonNewContact.png', L('MoreWindowNewContactButtonTitle'),
                {
                    extraSeperator:false,
                    width:35,
                    height:26,
                    leftIcon:8,
                    leftLabel:56
                }
            );

        var buttonTableViewRow3 = new App.UI.ButtonTableViewRow(
            'images/icons/buttonSettings.png', L('MoreWindowSettingsButtonTitle'),
                {
                    extraSeperator:false,
                    width:23,
                    height:23,
                    leftIcon:15,
                    leftLabel:56
                }
            );
       
       var buttonTableViewRow4 = new App.UI.ButtonTableViewRow(
            'images/icons/buttonAbout.png', L('MoreWindowAboutButtonTitle'),
                {
                    extraSeperator:false,
                    width:29,
                    height:27,
                    leftIcon:15,
                    leftLabel:56
                }
            );
       
        rows.push(buttonTableViewRow1.tableViewRow);
        rows.push(buttonTableViewRow2.tableViewRow);
        rows.push(buttonTableViewRow3.tableViewRow);
        rows.push(buttonTableViewRow4.tableViewRow);

        this.controlsTable.setData(rows);

    }
};