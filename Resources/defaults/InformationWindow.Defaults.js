App.Defaults.InformationWindow = {


	Window:{
		width: 322,
		height: 570,
		backgroundImage: '/images/backgrounds/Hilo-1.png'
	},

	WrapperView:{
		top:40,
	    width:Titanium.UI.FILL,
		height:Titanium.UI.FILL
	},

	InformationWindowLabel:{
		top: 30,
		text: L('InformationWindowTitle'),
		color: '#193540',
		font: {
			fontFamily:'Helvetica Neue',
			fontSize: 34,
		}
	},

    AddPhotoButton:{
	    left: 16,
	    top: 90,
	    width: 112,
	    height: 112,
	    borderRadius: 55,
	    borderWidth: 1,
	    borderColor:'#5d7274',
	    backgroundImage:'/images/icons/pixel.png'
    },

    AddPhotoLabel:{
    	top: 60,
    	text: L('addPhoto'),
		color: '#5d7274',
		font: {
			fontFamily:'Helvetica Neue',
			fontSize: 14,
			},
	    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    },

    AddPhotoImageView:{
    	top: 20,
    	width: 47,
	    height: 36,
    	color: '#5d7274',
		backgroundImage:'/images/icons/camera.png'
    },

    Information1Textfield:{
	    left: 138,
	    top : 94,
	    width : 174, 
	    height : 42,
    	color: App.Styles.Colors.DARK_BLUE,
    	hintText : 'text1',
   		keyboardToolbarColor : '#999',
	    keyboardToolbarHeight : 40,          
    },

    Information1LineImageView:{
		left:138,
		top: 126,
		width : 174, 
	    height : 1,
	    backgroundColor: '#9ba39a',
	},

    Information2Textfield:{
    	left: 138,
    	top : 141,
	    width : 174, 
	    height : 42,
    	color: App.Styles.Colors.DARK_BLUE,
    	hintText : 'text2',
   		keyboardToolbarColor : '#999',
	    keyboardToolbarHeight : 40 
    },

    Information2LineImageView:{
		left:138,
		top: 173,
		width : 174, 
	    height : 1,
	    backgroundColor: '#9ba39a'
	},

    SaveButton:{
    	width: 170,
    	title:L('save'),
    	color: App.Styles.Colors.WHITE,
    	backgroundColor:App.Styles.Colors.DARK_BLUE,
		font: {
			fontFamily:'Helvetica Neue',
			fontSize: 17 
			},
	    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    },
}