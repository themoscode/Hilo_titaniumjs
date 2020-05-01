App.Controllers.CountryTelWindowController = {
	
	submitButtonClick: function(e) {
		
		var that = this;
		var dialog = Ti.UI.createAlertDialog({
	    cancel: 2,
	    buttonNames: [L('edit'), L('ok'), L('cancel')],
	    message: L('CountryTelWindowDialogueMessage'),
	    title: L('CountryTelWindowDialogueTitle')
	    });
	  
	   dialog.addEventListener('click', function(e){
	   
	     if (e.index == 1) {
	    	 
	    	 App.views.registerWindow.window.open();
	    	 that.window.close();
	     }
	    
	   });
  	 
  	 dialog.show();
		
	}
	
};
