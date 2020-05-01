App.Defaults.ProfileWindow = {
	
	Window:  {
		barColor: App.Styles.Colors.DARK_BLUE ,
        backgroundColor:App.Styles.Colors.BEIGE,
        tabBarHidden:true,
        navTintColor:App.Styles.Colors.WHITE
	},
	
	 LockButton: {
        right: 60,
        width:25,
        height:25,
        backgroundImage: 'images/iconsTitle/lock.png',
    },
    
    EditButton:{
    	right:9,
        bottom:13,
        width:30,
        height:14,
        backgroundImage: 'images/iconsTitle/edit.png',
    },
    
    FreeSmsButton:{
    	top:210,
    	right:25,
    	width:124,
    	height:40,
    	backgroundColor:App.Styles.Colors.DARK_BLUE ,
    	title : L('ProfileWindowButtonfreeSms'),
    	borderRadius : 5,
    	color:App.Styles.Colors.WHITE
    },
    
    FreeCallButton:{
    	left:25,
        top:210,
    	width:124,
    	height:40,
    	backgroundColor:App.Styles.Colors.DARK_BLUE ,
    	title : L('ProfileWindowButtonfreeCall'),
    	borderRadius : 5,
    	color:App.Styles.Colors.WHITE
    },
    
    HiloOutButton:{
    	top:325,
    	right:13,
    	width:75,
    	height:25,
    	backgroundImage:'images/icons/buttonHiloOut3.png',
    },
   
   HiloOutView:{
        top:270,
        height:45,
        backgroundColor:App.Styles.Colors.WHITE,
        width:Ti.UI.FILL,
   },

   HiloOutDescriptionLabel :{
        bottom:5,
        left:80,
        font:{fontFamily:'Arial', fontSize:16, fontWeight:'normal'},
        text:L('ProfileWindowLabelCallAnyNumber'),
        color:'#999999'
   }, 


   HiloOutLabel:{
    	bottom:5,
        left:5,
        font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
    	text:'Hilo Out - ',
        color:'#999999'
    },
    
    MobileNumberLabel:{
    	left:18,
        top:325,
        font:{fontFamily:'Arial', fontSize:16, fontWeight:'normal'},
    	text:''
    },
    
    MobileLabel:{
    	left:18,
        top:340,
    	font:{fontFamily:'Arial', fontSize:10, fontWeight:'normal'},
    	text:L('mobile'),
    	color:'#808080'
    },
    
    LineView:{
        bottom:55,
        height:1,
        width:Ti.UI.FILL,
        backgroundColor:App.Styles.Colors.WHITE,
    },
    
    StatusLabel : {
    	right:12,
        bottom:1,
    	font:{fontFamily:'Arial', fontSize:8, fontWeight:'normal'},
    	color:'#a1c2fe',
    	text:''
    },
    
    TitleControlView: {
        width : "100%" ,
        height:"100%",
    },
    
    ProfileImageView: {
    	left:0,
        top:0,
    	width: Ti.UI.FILL,
    	height: '190',
    }
	
};
