App.Defaults.ContactsWindow = {

    Window: {
        barColor: App.Styles.Colors.DARK_BLUE,
        backgroundColor: App.Styles.Colors.BEIGE,
        navTintColor: App.Styles.Colors.RED
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

    TabbedBar: {
        width: 210,
        height: 24,
        labels: ['Hilo', 'All', 'Hilo Out'],
        backgroundColor: App.Styles.Colors.RED ,
        style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
        index: 0
    },

    PlusButton: {
        right: 0,
        width: 19,
        height: 19,
        backgroundImage: 'images/iconsTitle/plus.png'
    },

    TableView: {
        separatorColor: 'transparent',
        backgroundColor: App.Styles.Colors.BEIGE,
        filterAttribute : 'filter'
    },

    
};