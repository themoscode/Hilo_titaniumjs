App.Controllers.InformationWindowController = {

	saveButtonClick: function() {

			App.views.tabGroup.tabGroup.open();
			this.window.close();

			var that = this;
			var dialog = Ti.UI.createAlertDialog({
		    cancel: 0,
		    buttonNames: [L('no'), L('yes')],
		    message: L('InformationWindowDialogueMessage'),
		    title: L('InformationWindowDialogueTitle')
		    });
		  
		   dialog.addEventListener('click', function(e){
		   
		     if (e.index == 1) {
		    	 
		    	var dialog2 = Ti.UI.createAlertDialog({

		    		cancel: 0,
				    buttonNames: [L('reject'), L('allow')],
				    message: L('InformationWindowDialogueMessage2'),
				    title: L('InformationWindowDialogueTitle2')
		    		
		    	})

		    	dialog2.addEventListener('click',function(e){

		    		if (e.index == 1) {

		    			////////
		    		}

		    	});
		    	dialog2.show();
		    	
		     }
		    
		   });
	  	 
	  	 dialog.show();

	}

};