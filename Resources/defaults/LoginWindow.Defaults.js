App.Defaults.LoginWindow = {

    Window: {
        width: 322,
        height: 570,
        backgroundImage: '/images/backgrounds/Hilo-1.png',
    },

    View: {
        top: 40,
        width: Titanium.UI.FILL,
        height: Titanium.UI.FILL
    },

    TitleLabel: {
        top: 30,
        text: L('LoginWindowTitleLabel'),
        color: '#193540',
        font: {
            fontFamily: 'Helvetica Neue',
            fontSize: 34
        }
    },

    DescriptionLabel: {

        top: 80,
        width: 290,
        text: L('LoginWindowDescriptionLabel'),
        color: '#193540',
        font: {
            fontFamily: 'Helvetica Neue',
            fontSize: 18
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    },

    UsernameTextField: {
        top: 200,
        width: 300,
        height: 35,
        color: App.Styles.Colors.DARK_BLUE ,
        hintText: L('LoginWindowUsernameTextFieldHintText'),
        value: Config.developmentUserName
    },

    RightArrowImageView: {
        top: 205,
        right: 5,
        width: 20,
        height: 20,
        backgroundImage: 'images/icons/rightArrow.png'
    },

    LineImageView: {
        top: 230,
        width: 300,
        height: 2,
        backgroundColor: '#9ba39a',
    },

    PasswordTextField: {
        top: 240,
        width: 300,
        height: 35,
        color: App.Styles.Colors.DARK_BLUE ,
        hintText: L('LoginWindowPasswordTextFieldHintText'),
        value: Config.developmentUserPassword,
        passwordMask: true
    },

    LineImageView2: {
        top: 270,
        width: 300,
        height: 2,
        backgroundColor: App.Styles.Colors.DARK_BLUE ,
    },

    SubmitButton: {
        top: 322,
        width: 170,
        height: 38,
        title: L('submit'),
        color: App.Styles.Colors.WHITE,
        backgroundColor: App.Styles.Colors.DARK_BLUE ,
    }

}