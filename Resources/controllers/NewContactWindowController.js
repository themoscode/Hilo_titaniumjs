App.Controllers.NewContactWindowController = {

    arrowButtonClick: function (e) {

        alert('arrowButtonClick');

    },

    contactNumberButtonClick: function (e) {
    	//App.views.tabGroup.tabGroup.setActiveTab(2);
        App.views.tabGroup.tabMore.open(App.views.newContactDoneWindow.window);

    }
}