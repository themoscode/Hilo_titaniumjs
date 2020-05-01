App.Defaults.ContactsGroupWindow = {

    Window: {
        barColor: App.Styles.Colors.DARK_BLUE,
        backgroundColor: App.Styles.Colors.BEIGE,
        navTintColor: App.Styles.Colors.WHITE,
        layout:'vertical'
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

    NextButton:{
        color:App.Styles.Colors.WHITE,
        title:L('Next')
    },

    NamesView:{
        width:Ti.UI.FILL,
        height:45,
        backgroundColor:App.Styles.Colors.WHITE,
    },

    NamesLabel:{
        width:Ti.UI.FILL,
        color:'#999999',
        text:L('ContactsGroupWindowNamesLabel'),
        textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
        font:{
             fontFamily:'Helvetica Neue', 
             fontSize:13,
             fontWeight:'normal'
        }
    }

};