App.UI.TabGroup = function () {

    this.defaults = App.Defaults.tabGroup;

    // load defaults
    this.tabChatsProperties = _.extend({}, this.defaults.TabChats, {window: App.views.chatsWindow.window});
    this.tabCallsProperties = _.extend({}, this.defaults.TabCalls, {window: App.views.callsWindow.window});
    this.tabContactsProperties = _.extend({}, this.defaults.TabContacts, {window: App.views.contactsWindow.window});
    this.tabMoreProperties = _.extend({}, this.defaults.TabMore, {window: App.views.moreWindow.window});

    // create views
    this.tabGroup = Titanium.UI.createTabGroup({tabsBackgroundColor: App.Styles.Colors.DARK_BLUE , activeTabIconTint: App.Styles.Colors.RED , tabsTintColor: App.Styles.Colors.WHITE});

    this.tabChats = Titanium.UI.createTab(this.tabChatsProperties);
    this.tabCalls = Titanium.UI.createTab(this.tabCallsProperties);
    this.tabContacts = Titanium.UI.createTab(this.tabContactsProperties);
    this.tabMore = Titanium.UI.createTab(this.tabMoreProperties);

    // attach event listeners
    this.tabGroup.addEventListener('open', App.Controllers.tabGroupler.tabGroupOpen);

    // attach elements
    this.tabGroup.addTab(this.tabChats);
    this.tabGroup.addTab(this.tabCalls);
    this.tabGroup.addTab(this.tabContacts);
    this.tabGroup.addTab(this.tabMore);

};

App.UI.TabGroup.prototype = {};