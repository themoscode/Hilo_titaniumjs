App.Defaults.RunningCallWindow = {


	Window:{
		 barColor: App.Styles.Colors.DARK_BLUE,
         backgroundColor: App.Styles.Colors.DARK_BLUE,
         navTintColor: App.Styles.Colors.WHITE,
         tabBarHidden:true,
         navBarHidden:true
	},

	CallBublleView:{
		top:50,
		width : 381,
		height: 300,
		backgroundImage:'images/icons/callBubble.png'
	},

	ProfileImageView:{
		top:50,
		width : 499,
		height: 300,
		backgroundImage:'images/imagesAvatar/AbigailSabraProfile.png'
	},

	ProfileNameLabel:{
		top:20,
		color:'white',
		text:'Abigail Sabra',
		font:{
            fontFamily:'Helvetica Neue', 
            fontSize:21, 
            fontWeight:'normal'
        },
	},

	RunningCallLabel:{
		top:42,
		right:86,
		color:'#7ac943',
		text:L('running')+'...',
		font:{
            fontFamily:'Helvetica Neue', 
            fontSize:12, 
            fontWeight:'normal'
        }
    },

    MicrophoneButton:{
    	bottom:80,
    	left:10,
    	width:62,
    	height:62,
    	backgroundImage:'images/icons/microphoneOff.png'
    },

    KeyboardButton:{
    	bottom:80,
    	left:80,
    	width:62,
    	height:62,
    	backgroundImage:'images/icons/keyboard.png'
    },

    CameraButton:{
    	bottom:80,
    	right:80,
    	width:62,
    	height:62,
    	backgroundImage:'images/icons/camera2.png'
    },

    SpeakerButton:{
    	bottom:80,
    	right:10,
    	width:62,
    	height:62,
    	backgroundImage:'images/icons/speaker.png'
    },

    CallStopButton:{
    	bottom:15,
    	width:67,
    	height:67,
    	backgroundImage:'images/icons/callStop.png'
    }

    

}