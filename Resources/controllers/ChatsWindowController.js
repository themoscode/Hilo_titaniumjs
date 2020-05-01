App.Controllers.ChatsWindowController = {

    allGroupsTabbedBarClick: function (e) {
        
        switch (e.index) {

            case 0:
                this.setConversations(conversationInstanceList);
                break;
            case 1:
                this.setConversations(conversationInstanceList,{type:'group'});
                break;
        }
    }, 

    peopleButtonClick:function(){
            App.views.tabGroup.tabGroup.setActiveTab(2);
            App.views.tabGroup.tabContacts.open(App.views.contactsGroupWindow.window);
            
    }
  
};
