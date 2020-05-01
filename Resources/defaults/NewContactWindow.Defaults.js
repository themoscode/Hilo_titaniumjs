App.Defaults.NewContactWindow = {


	Window: {
        barColor: App.Styles.Colors.DARK_BLUE,
        backgroundColor: '#d9d5c1',
        navTintColor: App.Styles.Colors.WHITE,
        layout:'vertical',
        tabBarHidden:true
    },

    TitleControlView: {
        width : "100%" ,
        height:"100%", 
    },

    NewContactLabel:{
    	left:10,
    	color:App.Styles.Colors.RED,
    	text:L('NewContact')
    },

    PhoneView:{
    	
    	width:Ti.UI.FILL,
    	height:55,
    	backgroundColor:'#ffffff'
    },

	PhoneLabel:{
		bottom:3,
		left:10,
		color:'#193540',
		text:L('newContactWindowPhoneLabel'),
		font:{
            fontFamily:'Helvetica Neue', 
            fontSize:18, 
            fontWeight:'normal'
        },
        textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
	},

	ContactNumberView:{
		
		width:Ti.UI.FILL,
		height:45,
		backgroundColor:'#d9d5c1'
	},

	ContactNumberTextField:{

		left : 10,
		width : 200, 
	    color: '#808080' ,
	    hintText : L('newContactWindowNumber'), 
	    font:{
            fontFamily:'Helvetica Neue', 
            fontSize:18, 
            fontWeight:'normal'
        },
	},

	ContactNumberButton:{
		right:10,
		width:70,
		height:28,
		color:'white',
		title:L('ready'),
		borderRadius:3,
		backgroundColor:'#3d5a66'
	},

	ScanView:{
    	
    	width:Ti.UI.FILL,
    	height:55,
    	backgroundColor:'#ffffff'
    },

	ScanLabel:{
		bottom:3,
		left:10,
		color:'#193540',
		text:L('newContactWindowScanLabel'),
		font:{
            fontFamily:'Helvetica Neue', 
            fontSize:18, 
            fontWeight:'normal'
        },
        textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
	},

	QrScanView:{
		
    	width:Ti.UI.FILL,
    	height:45,
    	backgroundColor:'#d9d5c1'
	},

	QrScanImageView :{
		left:10,
		width:26,
		height:26,
		backgroundImage:'images/icons/scanSymbol.png'
	},

	QrScanLabel:{
		left:40,
		color:'#808080',
		text:L('newContactWindowQrScanLabel'),
		font:{
            fontFamily:'Helvetica Neue', 
            fontSize:18, 
            fontWeight:'normal'
        },
	},

	ArrowButton:{
		right:5,
		width:16,
		height:16,
		backgroundImage:'images/icons/rightArrow.png'
	},

	LineView:{
		
		width:Ti.UI.FILL,
		height:1,
		backgroundColor:'#bdbcb7'
	},

	PleaseView:{
		width:Ti.UI.FILL,
    	height:55,
    	backgroundColor:'#d9d5c1'
	},

	PleaseLabel:{
		left:10,
		width:'80%',
		text:L('newContactWindowPleaseLabel'),
		color:'#808080',
		font:{
            fontFamily:'Helvetica Neue', 
            fontSize:12, 
            fontWeight:'normal'
        },
	},

	SecurityView:{
		width:Ti.UI.FILL,
    	height:45,
    	backgroundColor:'#f21d2f'
	},

	SecurityLabel:{
		bottom:3,
		left:10,
		text:L('newContactWindowSecurityLabel'),
		color:'white',
		font:{
            fontFamily:'Helvetica Neue', 
            fontSize:15, 
            fontWeight:'normal'
        },
	},

	PasswordView:{
		width:Ti.UI.FILL,
    	height:45,
    	backgroundColor:'#d9d5c1'
	},

	LockImageView:{
		left:10,
		width:25,
		height:25,
		backgroundImage:'images/icons/lock.png'
	},

	PasswordTextField:{
		left:40,
		
	},

	

}