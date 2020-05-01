App.Defaults.CallsTableViewRow = {


	TableViewRow: {
		height:78,
        selectionStyle:Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
	},
	
	OptionView : {
		right:5, 
		width:207,
		height:69, 
		opacity:0
	},
	
	CallButton : {
		right:10,
    	width:25,
    	height:25,
    	backgroundImage:'images/icons/call.png',
    	bubbleParent: false
	},

	DeleteButton:{
		right:0,
		width:69,
		height:69, 
		backgroundImage: 'images/icons/buttonDelete.png',
		taskid:'delete', 
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
	},
	
	View:{ 
		left:5,
        width: App.Styles.Display.width - 10,
        height:73,
        backgroundColor:'#d9d5c1',
        borderRadius:5
	},

	AbsenceSymbolImageView:{
		bottom:13,
		left:80,
		width:9,
		height:9,
		backgroundImage:'images/icons/abscenceArrow.png',
	},

	AbsenceTextLabel:{
		bottom:13,
		left:90,
		font:{
			fontFamily:'Arial', 
			fontSize:12, 
			fontWeight:'normal'
		},
		color:'red',
		text:L('CallsWindowAbsenceText')
	},
	
	AvatarView :{
		 left:10,
         width:62, 
         height:62,
         borderRadius:31,
         borderColor:'white',
         borderWidth:4
     },

	AvatarImageView:{
	     width:58, 
	     height:58,
	     borderRadius:29
	},
	
	ContactNameLabel:{
		left:80, 
		color:'#000000',
	    font:{
	    	fontFamily:'Arial', 
	    	fontSize:18, 
	    	fontWeight:'normal'
	    },
	    
	}


};