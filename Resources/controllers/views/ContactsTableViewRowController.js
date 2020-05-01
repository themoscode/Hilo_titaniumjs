App.Controllers.ContactsTableViewRowController = {

    tableViewRowClick: function () {

        var contactInstance = this.contactInstance;
        App.Services.XmppService.openPrivateConversation(contactInstance.id);
        App.views.conversationsWindow = App.views.conversationsWindow || new App.UI.ConversationsWindow();
        App.views.conversationsWindow.setContact(contactInstance);
        App.views.tabGroup.tabContacts.open(App.views.conversationsWindow.window);
    },

    tableViewRowClickSecretChat:function() {
       
       App.views.secretChatInvitationWindow  = new App.UI.SecretChatInvitationWindow(this.contactInstance);
       App.views.tabGroup.tabContacts.open(App.views.secretChatInvitationWindow.window);

    },

    deleteButtonClick:function(){
    	alert('deleteButtonClick');
    },

    switchClick:function(e){
        
        //initialize
       
        App.views.contactsGroupWindow.groupContacts = []; // 
        
        var str = '';
        var defaultFontColor='#999999';
        var defaultText = L('ContactsGroupWindowNamesLabel');
        var namesFontcolor = '#0c3140';
        
        
        var tableView = App.views.contactsGroupWindow.tableView;
        var namesLabel = App.views.contactsGroupWindow.namesLabel;
            namesLabel.text = defaultText;
            namesLabel.color = defaultFontColor;
        
        for (var i = 0; i < tableView.data.length; ++i) {
            
            for (var j = 0; j < tableView.data[i].rows.length; ++j) {

                var currentName = tableView.data[i].rows[j].children[0].children[2].text;
                var currentSwitchVal = tableView.data[i].rows[j].children[0].children[0].value;
                var currentContactInstance = tableView.data[i].rows[j].contactInstance;

                if (currentSwitchVal == 1) {
                   str = str + currentName + ',';
                   App.views.contactsGroupWindow.groupContacts.push(currentContactInstance);
                }
                
            }
           
        }
        if (str != '') { str = str.substring(0, str.length - 1);namesLabel.text = str;namesLabel.color = namesFontcolor; }
           
    }

};