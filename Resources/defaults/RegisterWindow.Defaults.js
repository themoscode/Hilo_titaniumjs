App.Defaults.RegisterWindow = {
	
	Window:  {
		width: 322,
		height: 570,
		backgroundImage: '/images/backgrounds/Hilo-1.png',
	},

	WrapperView:{
		top:40,
	    width:Titanium.UI.FILL,
		height:Titanium.UI.FILL
	},

	RegisterLabel :{
		top: 30 ,
		text: L('RegisterWindowRegisterLabel'),
		color: '#193540',
		font: {
			fontFamily:'Helvetica Neue',
			fontSize: 34 ,
		}
	},

	ConfirmCodeLabel:{
		top: 80 ,
		text: L('RegisterWindowConfirmCodeLabel'),
		color: '#193540',
		font: {
			fontFamily:'Helvetica Neue',
			fontSize: 18 ,
		},
	},

	ConfirmCodeTextField:{
		top : 186 ,
	    width : 242 , 
	    height : 42 ,
		color: App.Styles.Colors.DARK_BLUE ,
	    borderStyle : Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
	    hintText : L('RegisterWindowConfirmCodeLabel'),
	    keyboardToolbarColor : '#999',
	    keyboardToolbarHeight : 40 ,
	    backgroundColor: App.Styles.Colors.WHITE ,
	},

	FurtherButton:{
		top: 233 ,
		width: 242 ,
	    height: 42 ,
		title: L('RegisterWindowFurtherButtonText'),
		color: App.Styles.Colors.WHITE ,
		font: {
			fontFamily:'Helvetica Neue',
			fontSize: 18 ,
			},
		backgroundColor:App.Styles.Colors.DARK_BLUE ,
	},

	SmsQuestionLabel:{
		top: 280 ,
		width: 242 ,
	    height: 42 ,
		text: L('RegisterWindowSmsQuestionLabel'),
		color: '#8c928a',
		font: {
			fontFamily:'Helvetica Neue',
			fontSize: 16 ,
		},
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	},

    NeuConfirmationCodeSendButton:{
    	top: 327 ,
    	width: 242 ,
	    height: 42 ,
	    borderWidth: 1,
	    borderColor:'#8c928a',
	    backgroundColor:App.Styles.Colors.BEIGE,
	    title: L('RegisterWindowNeuConfirmationCodeSendButtonText'),
		color: '#8c928a',
		font: {
			fontFamily:'Helvetica Neue',
			fontSize: 14 ,
			},
    },  

}