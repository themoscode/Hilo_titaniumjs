App.Defaults.ContactTableViewRow = {

    TableViewRow: {
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        height:78
    },
    OptionView: {
        right: 5,
        width: 207,
        height: 69,
        opacity: 0
    },
    View: {
        left: 5,
        width: App.Styles.Display.width - 10,
        height: 73,
        borderRadius: 5,
        backgroundImage: 'images/colors/ffffff.png'
    },
    
    AvatarView: {
        left: 10,
        width: 62,
        height: 62,
        borderRadius: 31,
        borderColor: App.Styles.Colors.BEIGE,
        borderWidth: 4
    },
    AvatarImageView: {
        width: 58,
        height: 58,
        borderRadius: 29
    },
    Label: {
        left: 80,
        color: App.Styles.Colors.BLACK,
        font: {
            fontFamily: 'Arial',
            fontSize: 18,
            fontWeight: 'normal'
        }
    },
    LogoView: {
        left: 270,
        width: 25,
        height: 14,
        backgroundImage: 'images/icons/HiloLogo.png'
    },

    HiloOutButton:{
        left: 260,
        width: 43,
        height: 14,
        backgroundImage: 'images/icons/buttonHiloOut3.png',
        bubbleParent : false
    },

    DeleteButton: {
        right: 0,
        width: 69,
        height: 69,
        backgroundImage: 'images/icons/buttonDelete.png',
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    },

     Switch:{
        right: 5,
        width: 25,
        value: false,
        titleOff:'off',
        titleOn:'on',
    }

};