App.Controllers.CallsTableViewRowController = {

    viewClick: function () {

        
       alert('view clicked');

    },

    deleteButtonClick:function(){
    	alert('deleteButtonClick');
    },

    callButtonClick:function(){
       // alert('callButtonClick');
        App.views.tabGroup.tabCalls.open(App.views.runningCallWindow.window);
    }


};