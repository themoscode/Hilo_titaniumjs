App.Defaults.ConversationTableViewRow = {

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

    Group2View:{
        left: 10,
        width: 62,
        height: 62,
        backgroundImage:'images/icons/2-circle.png',

    },

    Group2Person1ImageView:{
        left:12,
        width: 28,
        height: 28,
    },

    Group2Person2ImageView:{
        left:41,
        width: 28,
        height: 28,
    },

    Group3View:{
        left: 10,
        width: 62,
        height: 62,
        backgroundImage:'images/icons/3-circle.png'
    },

    Group3Person1ImageView:{
        top:7,
        left:12,
        width: 28,
        height: 28,
    },

    Group3Person2ImageView:{
        top:7,
        left:41,
        width: 28,
        height: 28,
    },
    Group3Person3ImageView:{
        bottom:7,
        left:24,
        width: 29,
        height: 29,
    },

    Group4View:{
        left: 10,
        width: 62,
        height: 62,
        backgroundImage:'images/icons/4-circle.png'
    },

    Group4Person3ImageView:{
        bottom:9,
        left:12,
        width: 28,
        height: 28,
    },

    Group4Person4ImageView:{
        bottom:9,
        left:41,
        width: 28,
        height: 28,
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
     VerticalLineImageView: {
        left: 79,
        top: 5,
        width: 6,
        height: 62,
        backgroundImage: 'images/icons/verticalLine.png'
    },

    LockedImageView: {
        left: 230,
        width: 34, 
        height: 34,
        backgroundImage: 'images/icons/iconLocked.png'
    },

    MessagesNumberView: {
        top: 34,
        right: 13,
        width: Titanium.UI.SIZE,
        height: 16,
        backgroundColor: '#0d3144',
        borderRadius: 2
    },


    MessagesNumberLabel: {
        left: 4,
        top: 2,
        right: 4,
        width: Titanium.UI.SIZE,
        color: App.Styles.Colors.WHITE,
        backgroundColor: '#0d3144',
        font: {
            fontFamily: 'Arial', 
            fontSize: 9, 
            fontWeight: 'normal'
        },
        textAlign: 'center'
    },

    UserNameLabel: {
        left: 90,
        top: 8,
        color: '#000000',
        font: {
            fontFamily: 'Arial', 
            fontSize: 18, 
            fontWeight: 'normal'
        }, 
    },

    MessageLabel: {
        left: 90, 
        top: 34, 
        width: 110,
        color: '#000000',
        font: {
            fontFamily: 'Arial', 
            fontSize: 12, 
            fontWeight: 'normal'
        },
    },

    TimeLabel: {
        left: 275, 
        top: 12,
        color: '#AEAEAE',
        font: {
            fontFamily: 'Arial', 
            fontSize: 9, 
            fontWeight: 'normal'
        },
    },
    
    CallButton: {
        left: 0, 
        width: 69, 
        height: 69, 
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        backgroundImage: 'images/icons/buttonCall.png',
    },

    LockButton: {
        left: 69,
        width: 69,
        height: 69,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        backgroundImage: 'images/icons/buttonUnlocked.png',
    },

    DeleteButton: {
        right: 0,
        width: 69,
        height: 69,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        backgroundImage: 'images/icons/buttonDelete.png',
    }

};