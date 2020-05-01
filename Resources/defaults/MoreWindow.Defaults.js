App.Defaults.MoreWindow = {

    Window: {
        title: L('MoreWindowTitle'),
        titleAttributes: {
            color: App.Styles.Colors.RED
        },
        barColor: App.Styles.Colors.DARK_BLUE,
        backgroundColor: App.Styles.Colors.BEIGE,
    },

    TitleControlView: {
        width: "100%",
        height: "100%"
    },

    ScanSymbolButton: {
        right: 0,
        width: 24,
        height: 23,
        backgroundImage: 'images/iconsTitle/scanSymbol.png'
    },

    MoreLabel: {
        text: L('MoreWindowTitle'),
        color: App.Styles.Colors.RED
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
        top: 115,
        color: App.Styles.Colors.WHITE,
        text: 'Mary Hill',
    },

    EditButton: {
        top: 113,
        right: 17, 
        color: App.Styles.Colors.WHITE,
        backgroundImage: 'images/icons/buttonEdit.png',
        width: 22,
        height: 22

    },

    ControlsTable: {
        top: 150,
        backgroundColor: App.Styles.Colors.BEIGE,
        separatorColor: 'white',
        separatorInsets :{
            left:0,
            right:0       
        }
    },

    
};
