App.Defaults.ChatsWindow = {

    Window: {
        barColor: App.Styles.Colors.DARK_BLUE ,
        backgroundColor: App.Styles.Colors.BEIGE
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

    PeopleButton: {
        left: 0,
        bottom: 9,
        width: 32,
        height: 24,
        backgroundImage: 'images/iconsTitle/people.png'
    },

    AllGroupsTabbedBar: {
        width: 125,
        height: 24,
        labels: [L('ChatsWindowTabbedBarAllButtonTitle'), 'Groups'],
        backgroundColor: App.Styles.Colors.RED ,
        style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
        index: 0
    },

    NewsButton: {
        right: 0,
        bottom: 10,
        width: 26,
        height: 26,
        backgroundImage: 'images/iconsTitle/news.png',
    },

    TableView: {
        separatorColor: App.Styles.Colors.BEIGE,
        backgroundColor: App.Styles.Colors.BEIGE,
        filterAttribute : 'filter'
    },

};