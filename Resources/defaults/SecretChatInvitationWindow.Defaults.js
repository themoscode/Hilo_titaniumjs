App.Defaults.SecretChatInvitationWindow = {

    Window: {
        barColor: App.Styles.Colors.DARK_BLUE,
        backgroundImage: 'images/backgrounds/Hilo-3.png',
        navTintColor: App.Styles.Colors.WHITE,
        tabBarHidden:true
    },

     TitleControlView: {
        width: "100%",
        height: "100%"
    },

    NameLabel:{
        left:50,
        color:App.Styles.Colors.RED,
        text:'Paul Vance',
        font:{
            fontFamily:'Helvetica Neue', 
            fontSize:21, 
            fontWeight:'normal'
        }

    },

    OnlineLabel:{
        bottom:1,
        left:55,
        color:App.Styles.Colors.RED,
        text:'zul.online 26.09.14',
        font:{
            fontFamily:'Helvetica Neue', 
            fontSize:8, 
            fontWeight:'normal'
        }
    },

    LockImageView:{
        left:37,
        width:12,
        height:16,
        backgroundImage:'images/iconsTitle/lock2.png'
    },

    AvatarView: {
        right: 5,
        width: 32,
        height: 32,
        borderRadius: 16,
        borderColor: App.Styles.Colors.BEIGE,
        borderWidth: 2
    },
    AvatarImageView: {
        width: 28,
        height: 28,
        borderRadius: 14,
    },

    Lock2ImageView :{
        top:20,
        width: 104,
        height: 104,
        backgroundImage:'images/icons/lock3.png'
    },

    BodyView:{
        top:70,
        width:236,
        height:300,
        backgroundColor:'#859090',
        borderRadius:3
    },

    TitleLabel:{
        top:55,
        width:230,
        color:'white',
        font:{
            fontFamily:'Helvetica Neue', 
            fontSize:17, 
            fontWeight:'bold'
        },
        textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
    },

    Title2Label:{
        left:15,
        top:106,
        text:L('SecretChatInvitationTitle2'),
        color:'white',
        font:{
            fontFamily:'Helvetica Neue', 
            fontSize:12, 
            fontWeight:'bold'
        },
        textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
    },

    WaitLabel :{
        bottom:15,
        color:'#0c3140',
        font:{
            fontFamily:'Helvetica Neue', 
            fontSize:10, 
            fontWeight:'bold'
        }
    }

};