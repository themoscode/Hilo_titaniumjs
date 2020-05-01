App.Defaults.IncomingCallWindow = {


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

	IcomingCallLabel:{
		top:42,
		right:86,
		color:'#7ac943',
		text:L('incoming')+'...',
		font:{
            fontFamily:'Helvetica Neue', 
            fontSize:12, 
            fontWeight:'normal'
        }
    },
    
    RejectButton:{
    	left:30,
    	bottom:70,
    	width:124,
    	height:40,
    	title:L('reject'),
    	borderRadius:3,
    	color:'white',
    	borderColor:'#f0f2f3',
    	backgroundColor:'#3d5a66'
    },

    MessageButton:{
    	right:30,
    	bottom:70,
    	width:124,
    	height:40,
    	borderRadius:3,
    	title:L('message'),
    	color:'white',
    	borderColor:'#f0f2f3',
    	backgroundColor:'#3d5a66'
    },

    AnswerButton:{
    	bottom:17,
    	width:260,
    	height:40,
    	borderRadius:3,
    	title:L('answer'),
    	color:'white',
    	borderColor:'#f0f2f3',
    	backgroundColor:'#7ac943'
    },
	


}