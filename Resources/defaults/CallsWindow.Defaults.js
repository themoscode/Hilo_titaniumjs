App.Defaults.CallsWindow = {

 	Window: {
        title: L('CallsWindowTitle'),
        titleAttributes: {
            color: App.Styles.Colors.RED
        },
        barColor: App.Styles.Colors.DARK_BLUE,
        backgroundColor: App.Styles.Colors.BEIGE
    },
	
	SearchBar:  {
		top : 0,
		width:200,
		height : 43,
	    backgroundImage:'images/icons/pixel.png',
		borderColor :'white',
		borderRadius : 5,
		showCancel : false,
	},
	
	TitleControlView: {
		width : "100%",
		height:"100%",
	},
	
	AllLostTabbedBar: {
		width:210,
	    height:24,
	    index:0,
		labels:[L('CallsWindowTabAll'),L('CallsWindowTabLost')],
	    backgroundColor:'#f21d2f',
	    style:Titanium.UI.iPhone.SystemButtonStyle.BAR, 
	},

	
	TableView:{
		separatorColor:'transparent',
    	backgroundColor:'white',
    	filterAttribute : 'filter'
    }
	
};