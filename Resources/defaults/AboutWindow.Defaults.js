App.Defaults.AboutWindow = {
	
	Window:  {
		barColor: App.Styles.Colors.DARK_BLUE ,
		backgroundColor:App.Styles.Colors.DARK_BLUE,
		navTintColor:App.Styles.Colors.WHITE,
		tabBarHidden:true,
		//navBarHidden:true
	},

	TitleControlView: {
        width : "100%" ,
        height:"100%",
    },

    TitleLabel:{
    	left:90,
    	text: L('About'),
    	color:App.Styles.Colors.RED ,
    },
	
	LogoImageView:{
		width:  Ti.UI.FILL,
		height: Ti.UI.FILL,
		backgroundImage: '/images/backgrounds/Hilo-4.png',
	},

	BubbleView:{
		top:80,
		width: 220,
		height: 170,
		backgroundImage: '/images/icons/bubbleAbout.png'
	},

	BubbleHiloImageView:{
		top:6,
		width: 71,
		height: 60,
		backgroundImage: '/images/icons/bubbleHiloAbout.png'
	},

	VersionLabel:{
		top:65,
		text:'Version 1.1.0',
		font: {
			fontFamily:'Helvetica Neue',
			fontSize: 10 ,
		},
	},

	InstagramButton:{
		bottom:51,
		left:40,
		width:40,
		height:40,
		backgroundImage: '/images/icons/instagramButton.png'
	},

	FacebookButton:{
		bottom:51,
		width:40,
		height:40,
		backgroundImage: '/images/icons/facebookButton.png'
	},

	TwitterButton:{
		bottom:51,
		right:40,
		width:40,
		height:40,
		backgroundImage: '/images/icons/twitterButton.png'
	},

	HiloLabel:{
		bottom:37,
		text:'hilo.ms',
		font: {
			fontFamily:'Helvetica Neue',
			fontSize: 10 ,
		}
	}
}