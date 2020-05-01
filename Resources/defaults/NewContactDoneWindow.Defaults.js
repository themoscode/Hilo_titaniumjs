App.Defaults.NewContactDoneWindow = {

    Window: {
        
        navTintColor: App.Styles.Colors.WHITE,
        barColor: App.Styles.Colors.DARK_BLUE,
        backgroundColor: App.Styles.Colors.BEIGE,
    },

    TitleControlView: {
        width: "100%",
        height: "100%"
    },

    SaveButton: {
        title: L('save'),
        color: App.Styles.Colors.WHITE
    },

    ProfileImageView: {
        left: 0,
        top: 0,
        width: Ti.UI.FILL,
        height: '150',
        backgroundImage: 'images/imagesAvatar/MaryHill.jpg'
    },

    EditView: {
        left: 0,
        top: 105,
        width: Ti.UI.FILL,
        height: 45,
        backgroundColor: '#d94343',
        opacity: 0.5
    },

    ProfileNameLabel: {
        left: 17, 
        top: 160,
        color: '#193540',
       
        font:{
            fontFamily:'Helvetica Neue', 
            fontSize:12, 
            fontWeight:'bold'
        },
    },

     ProfileSurnameLabel: {
        left: 17, 
        top: 180,
        color: '#193540',
        font:{
            fontFamily:'Helvetica Neue', 
            fontSize:12, 
            fontWeight:'bold'
        },
    },

    MobileLabel:{
        left:17,
        top:222,
        color: '#193540',
        text:'Mobile:',
        font:{
            fontFamily:'Helvetica Neue', 
            fontSize:12, 
            fontWeight:'bold'
        },
    },

    MobileNumberLabel:{
        left:70,
        top:222,
        color: '#193540',
        font:{
            fontFamily:'Helvetica Neue', 
            fontSize:12, 
            fontWeight:'normal'
        },
    },

    EditButton: {
        top: 113,
        right: 17, 
        color: App.Styles.Colors.WHITE,
        backgroundImage: 'images/icons/buttonEdit.png',
        width: 22,
        height: 22

    },

    LineView :{
        width:Ti.UI.FILL,
        height:1,
        backgroundColor:'#f1efe8'
    }
    
};
