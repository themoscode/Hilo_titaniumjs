App.Defaults.ContactsSecretChatWindow = {

    Window: {
        barColor: App.Styles.Colors.DARK_BLUE,
        backgroundColor: App.Styles.Colors.BEIGE,
        navTintColor: App.Styles.Colors.WHITE
    },

    SearchBar: {
        top: 0,
        height: 43,
        barColor: App.Styles.Colors.BEIGE,
        backgroundImage: 'images/icons/pixel.png',
        borderColor: App.Styles.Colors.BEIGE,
        showCancel: false,
    },

    TitleControlView: {
        width: "100%",
        height: "100%"
    },

    TitleLabel:{
        color:App.Styles.Colors.RED,
        text:L('ContactsWindowLabelNewSecretChat'),
        left:20
    },

    TableView: {
        separatorColor: 'transparent',
        backgroundColor: App.Styles.Colors.BEIGE,
        filterAttribute : 'filter'
    },

    
};