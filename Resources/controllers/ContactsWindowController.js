App.Controllers.ContactsWindowController = {

    tabbedBarClick: function (e) {
        
        switch (e.index) {

            case 0:
                this.setContacts(contactInstanceList,{hasHilo:true});
                break;
            case 1:
                this.setContacts(contactInstanceList);
                break;
            case 2:
                this.setContacts(contactInstanceList,{hasHilo:false});
                break;
        }

    },

    buttonNewGroupClick : function(e){

    	App.views.tabGroup.tabContacts.open(App.views.contactsGroupWindow.window);
    },

    buttonNewSecretChatClick : function(e){

        App.views.tabGroup.tabContacts.open(App.views.contactsSecretChatWindow.window);
    },

    plusButtonClick: function() {
         App.views.tabGroup.tabGroup.setActiveTab(3);
         App.views.tabGroup.tabMore.open(App.views.newContactWindow.window);
    }

  
};
