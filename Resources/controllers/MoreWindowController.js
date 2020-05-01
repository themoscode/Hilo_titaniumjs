App.Controllers.MoreWindowController = {

    editButtonClick: function (e) {

        var opts = {
            cancel: 2,
            options: ['Take a picture with the camera', 'Choose a picture from gallery', 'Cancel'],
            selectedIndex: 0,
            title: 'Edit Image:'
        };

        var dialog = Ti.UI.createOptionDialog(opts).show();

    },

    scanSymbolButtonClick: function (e) {

        App.views.tabGroup.tabMore.open(App.views.qrCodeWindow.window);

    },

    controlsTableClick:function(e){
        
        switch(e.index) {
            case 1:
               App.views.tabGroup.tabMore.open(App.views.newContactWindow.window);
               break;
            case 3:
               App.views.tabGroup.tabMore.open(App.views.aboutWindow.window);
               break;
        }
    }

};