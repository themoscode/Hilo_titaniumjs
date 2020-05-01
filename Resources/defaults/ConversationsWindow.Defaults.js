App.Defaults.ConversationsWindow = {

    Window:  {
        barColor: '#0d3144',
        backgroundImage:'images/backgrounds/conversationBackground.png',
        tabBarHidden:true,
        navTintColor:App.Styles.Colors.WHITE
    },

    TitleControlView: {
        width : "100%" ,
        height:"100%", 
    },

    LockButton: {
        right: 103,
        width:25,
        height:25,
        backgroundImage: 'images/iconsTitle/lock.png',
    },

    SettingsButton: {
        right: 55,
        width:23,
        height:23,
        backgroundImage: 'images/iconsTitle/settings.png',
    },

    CallButton: {
        right: 9,
        width:25,
        height:25,
        backgroundImage: 'images/iconsTitle/call.png',
    },
    
    PlusButton: {
        left:9,
        bottom:15,
        width:18,
        height:21,
        backgroundImage: 'images/iconsTab/plus.png',
    },

    SmileButton: {
        left:30,
        bottom:15,
        width:20,
        height:20,
        backgroundImage: 'images/iconsTab/smile.png',
    },

    MicrophoneButton: {
        right:7,
        bottom:12,
        width:26,
        height:26,
        backgroundImage: 'images/iconsTab/microphone.png',
    },

    
     ///////////////////////////
     ///////////////////////////
     
     ScrollView:{
        top:0,
        contentWidth:'auto',
        contentHeight:'auto',
        height:Ti.Platform.displayCaps.platformHeight-68,
        showVerticalScrollIndicator:true,
        showHorizontalScrollIndicator:true,
    },
     
    DateBaloonView :{
        top : 15,
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        backgroundColor:'#96a27b',
        borderRadius:2,
    },

    DateBaloonLabel :{
        left:5,
        top : 5,
        right:5,
        bottom:5,
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        color:App.Styles.Colors.WHITE,
        font:{
            fontFamily:'Arial', 
            fontSize:12, 
            fontWeight:'bold'
        },
        textAlign:'center'
    },

     TextArea: {
     	bottom: 12,
        left : 60,
        width : 220,
	    height : 26,
	    borderWidth: 1,
  		borderColor: '#dddddd',
  		borderRadius: 5,
	    color: '#336699',
	    suppressReturn : true
     },

     TextFieldTrigger:{
        visible: false
     },
     
     SendButton: {
     	right : 46,
        bottom : 16,
        width : 19,
        height : 19,
        zIndex : 2,
        backgroundImage : 'images/iconsTab/send.png',
     },
     
     BottomWrapperView: {
     	height : 50
     },
     
     BottomView: {
     	bottom : 0,
	    height : 50,
	    width : 320,
        backgroundColor : App.Styles.Colors.DARK_BLUE ,
     },
     
     InputView: {
     	width : 320,
	    height : 0,
	    layout : 'horizontal'
     }
      
 };