App.Defaults.QRCodeWindow = {
	
	Window:  {
		barColor: App.Styles.Colors.DARK_BLUE ,
		backgroundColor:App.Styles.Colors.BEIGE,
		navTintColor:App.Styles.Colors.WHITE,
		tabBarHidden:true,
	},

	TitleControlView: {
        width : "100%" ,
        height:"100%",
    },

    QrTitleLabel:{
    	left:20,
    	text: L('QrCodeWindowTitleLabel'),
    	color:App.Styles.Colors.RED ,
    },
	
	QrCodeDescriptionLabel:{
		top: 25,
		width: 290,
		text: L('QrCodeWindowDescriptionLabel'),
		color: '#193540',
		font: {
			fontFamily:'Helvetica Neue',
			fontSize: 18 ,
		},
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	},
	
	QrCodeScanImageView:{
		backgroundImage:'images/icons/QrCodeScanImage.png',
		top:110,
		width:200,
		height:200
	},
	
	LineImageView:{
		width : Ti.UI.FILL , 
	    height : 1 ,
	    backgroundColor: App.Styles.Colors.WHITE,
		bottom: 40,
	},
	
	QrCodeScanButton:{
		bottom: 10 ,
		width: 290,
		title: L('QrCodeWindowCodeScanButton'),
		color: '#193540',
		font: {
			fontFamily:'Helvetica Neue',
			fontSize: 10 ,
		},
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	}
}

