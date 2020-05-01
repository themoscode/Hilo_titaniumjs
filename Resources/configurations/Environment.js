/**
 * build the app's global namespace
 */
App = {
    // UI wrapper classes like windows and views
    UI: {},
    // view and service controllers
    Controllers: {},
    // domain classes like nodes or reference hosts
    Domains: {},
    // references to active view instances
    views: {},
    // defaults styles and configurations for all views
    Defaults: {},
    // services libraries
    Services: {},
    // styles like colors and font sizes
    Styles: {},
    // properties to keep track of the current app state
    state: {
        /** indicates if the user is logged in */
        authenticated: false,
        /** indicates if an api call is running */
        loading: false,
        country: 'CN',
        countryPickerVisible: false,
        userId: undefined,
        userPassword: undefined
    },
    // temporary app data
    data: {
        deviceToken: undefined
    },
    // native third party modules
    modules: {
        ExtendText: require('net.uchidak.tiextendtext')
    },
    // platform information
    os: (Ti.Platform.osname == 'android') ? 'ANDROID' : 'IOS'
};