App.Controllers.RunningCallWindowController = {

	microphoneButtonClick:function(){
		alert('microphoneButtonClick');
	},

	keyboardButtonClick:function(){
		alert('keyboardButtonClick');
	},

	cameraButtonClick:function(){
		alert('cameraButtonClick');
	},

	speakerButtonClick:function(){
		//alert('speakerButtonClick');
		App.views.tabGroup.tabCalls.open(App.views.incomingCallWindow.window);
	},

	callStopButtonClick:function(){
		//alert('callStopButtonClick');
		this.window.close();
	},


}