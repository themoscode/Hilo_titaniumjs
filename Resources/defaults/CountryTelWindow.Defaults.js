App.Defaults.CountryTelWindow = {
	
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
	
	TitleLabel:{
		top: 30 ,
		text: L('CountryTelWindowTitleLabel'),
		color: '#193540',
		font: {
			fontFamily:'Helvetica Neue',
			fontSize: 34 ,
		}
	},
	
	DescriptionLabel:{
		top: 80 ,
		text: L('CountryTelWindowDescriptionLabel'),
		color: '#193540',
		width: 290,
		font: {
			fontFamily:'Helvetica Neue',
			fontSize: 18 ,
		},
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	},
	
	CountryLabel:{
		left: 10 ,
		top: 180 ,
		text: L('CountryTelWindowCountryLabel'),
		color: '#193540',
		font: {
			fontFamily:'Helvetica Neue',
			fontSize: 20 ,
		},
	},
	
	CountryTextField:{
		top : 200,
	    width : 300, 
	    height : 35,
		color: App.Styles.Colors.DARK_BLUE ,
	    hintText : L('CountryTelWindowCountryTextFieldHintText'),
	},
	
	RightArrowImageView:{
		top: 205 ,
		right: 5 ,
		width : 20 , 
	    height : 20 ,
		backgroundImage: 'images/icons/rightArrow.png',
	},
	
	LineImageView:{
		top: 230,
		width : 300 , 
	    height : 2 ,
	    backgroundColor: '#9ba39a',
	},
	
	PhoneNumberTextField:{
		top : 240,
	    width : 300, 
	    height : 35,
		color: App.Styles.Colors.DARK_BLUE ,
	    hintText : L('CountryTelWindowPhoneNumberTextField'), 
	},
	
	LineImageView2:{
		top: 270 ,
		width : 300 , 
	    height : 2 ,
	    backgroundColor: App.Styles.Colors.DARK_BLUE ,
	},
	
	SubmitButton:{
		top: 322 ,
		width: 170 ,
	    height: 38 ,
		title: L('CountryTelWindowSubmitButton'),
		color:App.Styles.Colors.WHITE,
	    backgroundColor:App.Styles.Colors.DARK_BLUE ,
	},
}

