App.Defaults.SpinnerWindow = {

    Window: {
        backgroundColor: '#333333',
        opacity: 0.9,
        zIndex: 100
    },

    ActivityIndicator: {

    },
    Label: {
        top: (App.Styles.Display.height / 2) - 70,
        left: 50,
        right: 50,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        color: App.Styles.Colors.WHITE ,
        font: {
            fontSize: 16,
            fontWeight: 'bold'
        }
    },
    Button: {
        label: 'Abbrechen'
    }

};