App.Controllers.ContactsGroupWindowController = {

    nextButtonClick: function (e) {
    	Ti.API.debug('this.groupContacts=',this.groupContacts);
    	
    	if (this.groupContacts.length < 2) {
    		alert(L('contactsGroupWindowAlert'));
    	}
    	else{
	    	App.views.newGroupWindow = new App.UI.NewGroupWindow();
	    	App.views.newGroupWindow.setContacts(this.groupContacts);
	    	App.views.tabGroup.tabContacts.open(App.views.newGroupWindow.window);
            
    	} 

    }

};
