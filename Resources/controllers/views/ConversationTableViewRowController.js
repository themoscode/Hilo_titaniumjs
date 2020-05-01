App.Controllers.ConversationTableViewRowController = {

    tableViewRowClick: function () {

        App.views.conversationsWindow = new App.UI.ConversationsWindow();
        App.views.tabGroup.tabChats.open(App.views.conversationsWindow.window);

    },

    callButtonClick:function(){

    	alert('callButtonClick');
    },

    lockButtonClick:function(){

    	alert('lockButtonClick');
    },

    deleteButtonClick:function(){

    	alert('deleteButtonClick');
    },

};