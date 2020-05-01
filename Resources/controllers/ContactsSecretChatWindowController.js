App.Controllers.ContactsSecretChatWindowController = {

    tabbedBarClick: function (e) {

        if (e.index == 0){this.setContacts(contactInstanceList,{hasHilo:true});}
        else if (e.index == 1){this.setContacts(contactInstanceList);}
        else {this.setContacts(contactInstanceList,{hasHilo:false});}
    }

};
