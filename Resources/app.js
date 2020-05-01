// load database
db = Ti.Database.install('/data/im.hilo.sqlite', 'hilo');

// load underscore
_ = require('/libraries/underscore');
// moment js
moment = require('libraries/moment-with-locales.min');
moment.locale('en'); // set to english

// load namespaces, configs and styles
require('configurations/Environment');
require('configurations/Enum');
require('configurations/Config');
require('configurations/Styles');

// load helpers
require('libraries/Helpers');
require('libraries/Logger');

// load domain classes
require('domains/Conversation');
require('domains/Contact');
require('domains/network/ReferenceHost');
require('domains/network/Node');

// load defaults
require('defaults/AboutWindow.Defaults');
require('defaults/NewGroupWindow.Defaults');
require('defaults/ContactsGroupWindow.Defaults');
require('defaults/NewContactDoneWindow.Defaults');
require('defaults/NewContactWindow.Defaults');
require('defaults/SecretChatInvitationWindow.Defaults');
require('defaults/RunningCallWindow.Defaults');
require('defaults/IncomingCallWindow.Defaults');
require('defaults/CallsWindow.Defaults');
require('defaults/QRCodeWindow.Defaults');
require('defaults/MoreWindow.Defaults');
require('defaults/ConversationsWindow.Defaults');
require('defaults/ChatsWindow.Defaults');
require('defaults/CallsWindow.Defaults');
require('defaults/ContactsSecretChatWindow.Defaults');
require('defaults/ContactsWindow.Defaults');
require('defaults/TabGroup.Defaults');
require('defaults/ProfileWindow.Defaults');
require('defaults/StartWindow.Defaults');
require('defaults/CountryTelWindow.Defaults');
require('defaults/RegisterWindow.Defaults');
require('defaults/RegisterDoneWindow.Defaults');
require('defaults/InformationWindow.Defaults');
require('defaults/LoginWindow.Defaults');
require('defaults/WebView.Defaults');
require('defaults/ui/SpinnerWindow.Defaults');
require('defaults/ui/ButtonTableViewRow.Defaults');
require('defaults/ui/ContactTableViewSection.Defaults');
require('defaults/ui/ContactTableViewRow.Defaults');
require('defaults/ui/ConversationTableViewRow.Defaults');
require('defaults/ui/ConversationMessageView.Defaults');
require('defaults/ui/CallsTableViewRow.Defaults');
require('defaults/ui/SecretChatGuideLine.Defaults');

// load
require('views/AboutWindow');
require('views/NewGroupWindow');
require('views/ContactsGroupWindow');
require('views/NewContactDoneWindow');
require('views/NewContactWindow');
require('views/SecretChatInvitationWindow');
require('views/RunningCallWindow');
require('views/IncomingCallWindow');
require('views/CallsWindow');
require('views/QRCodeWindow');
require('views/MoreWindow');
require('views/ProfileWindow');
require('views/ConversationsWindow');
require('views/ChatsWindow');
require('views/CallsWindow');
require('views/ContactsWindow');
require('views/ContactsSecretChatWindow');
require('views/TabGroup');
require('views/StartWindow');
require('views/CountryTelWindow');
require('views/RegisterWindow');
require('views/RegisterDoneWindow');
require('views/InformationWindow');
require('views/LoginWindow');
require('views/ui/SpinnerWindow');
require('views/ui/ButtonTableViewRow');
require('views/ui/ContactTableViewSection');
require('views/ui/ContactTableViewRow');
require('views/ui/ConversationTableViewRow');
require('views/ui/ConversationMessageView');
require('views/ui/CallsTableViewRow');
require('views/ui/SecretChatGuideLine');

// services
require('services/AppService');
require('services/ApiService');
require('services/AuthenticationService');
require('services/DatabaseService');
require('services/network/NetworkService');
require('services/network/NodeService');
require('services/network/ReferenceHostService');
require('services/network/XmppService');
require('services/broadcast/ApnsService');
require('services/broadcast/BroadcastService');
require('services/core/ContactService');

// global controllers
require('controllers/AppController');

// service controllers
require('controllers/services/ApiServiceController');
require('controllers/services/AuthenticationServiceController');
require('controllers/services/NetworkServiceController');
require('controllers/services/ReferenceHostServiceController');
require('controllers/services/NodeServiceController');
require('controllers/services/BroadcastServiceController');
require('controllers/services/ContactServiceController');
require('controllers/services/network/XmppServiceController');

// view controllers
require('controllers/AboutWindowController');
require('controllers/ChatsWindowController');
require('controllers/NewGroupWindowController');
require('controllers/ContactsGroupWindowController');
require('controllers/NewContactDoneWindowController');
require('controllers/NewContactWindowController');
require('controllers/SecretChatInvitationWindowController');
require('controllers/RunningCallWindowController');
require('controllers/IncomingCallWindowController');
require('controllers/CallsWindowController');
require('controllers/QRCodeWindowController');
require('controllers/ContactsWindowController');
require('controllers/ContactsSecretChatWindowController');
require('controllers/MoreWindowController');
require('controllers/ConversationsWindowController');
require('controllers/StartWindowController');
require('controllers/CountryTelWindowController');
require('controllers/RegisterWindowController');
require('controllers/RegisterDoneWindowController');
require('controllers/InformationWindowController');
require('controllers/LoginWindowController');
require('controllers/views/TabGroupController');
require('controllers/views/ContactsTableViewRowController');
require('controllers/views/ConversationTableViewRowController');
require('controllers/views/CallsTableViewRowController');

require('data/examples');

App.Controllers.AppController.start();