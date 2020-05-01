App.Defaults.NewGroupWindow = {

    Window: {
        barColor: App.Styles.Colors.DARK_BLUE,
        backgroundColor: App.Styles.Colors.BEIGE,
        navTintColor: App.Styles.Colors.WHITE,
        layout :'vertical'
    },

    HeaderView:{
        width:Ti.UI.FILL,
        height:81,
    },

    BuildButton:{
        color:App.Styles.Colors.WHITE,
        title:L('build'),
    },

    GroupTextField:{
        bottom:20,
        left:90,
        width:200,
        color: App.Styles.Colors.DARK_BLUE,
        hintText : L('groupName'),
        keyboardToolbarColor : '#999',
        keyboardToolbarHeight : 40,      
    },

    LineView:{
        left:90,
        width:220,
        bottom:19,
        height:1,
        backgroundColor: '#9ba39a',
    },

    AddPhotoButton:{
        left: 15,
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor:'#5d7274',
        backgroundImage:'/images/icons/pixel.png'
    },

    AddPhotoLabel:{
        top: 30,
        text: L('addPhoto'),
        color: '#5d7274',
        font: {
            fontFamily:'Helvetica Neue',
            fontSize: 8,
            },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    },

    AddPhotoImageView:{
        top: 10,
        width: 24,
        height: 18,
        color: '#5d7274',
        backgroundImage:'/images/icons/camera.png'
    },

    TitleControlView: {
        width: "100%",
        height: "100%"
    },

    TitleLabel:{
        color:App.Styles.Colors.RED,
        text:L('NewGroup'),
        left:20
    },

    TableView: {
        separatorColor: 'transparent',
        backgroundColor: App.Styles.Colors.BEIGE
    },

    
};