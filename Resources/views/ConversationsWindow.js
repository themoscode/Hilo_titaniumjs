App.UI.ConversationsWindow = function () {

    // load defaults
    var that = this;
    var TiExtendText = App.modules.ExtendText;

    this.interlocutor = {firstName: 'Abigail',
        lastName: 'Sabra',
        image: 'images/imagesAvatar/AbigailSabra.png',
        profileImage: 'images/imagesAvatar/AbigailSabraProfile.png',
        status: 'Online',
        mobileNumber: '0179 3452 987'
    };

    this.messagePositionY = 60; // this will be needed in App.UI.ConversationMessageView 
    

    this.defaults = App.Defaults.ConversationsWindow;
    this.windowProperties = this.defaults.Window;
    this.titleControlViewProperties = this.defaults.TitleControlView;

    this.lockButtonProperties = this.defaults.LockButton;
    this.settingsButtonProperties = this.defaults.SettingsButton;
    this.callButtonProperties = this.defaults.CallButton;
    
    this.plusButtonProperties = this.defaults.PlusButton;
    this.smileButtonProperties = this.defaults.SmileButton;
    this.microphoneButtonProperties = this.defaults.MicrophoneButton;

    this.scrollViewProperties = this.defaults.ScrollView;
    this.dateBaloonViewProperties = this.defaults.DateBaloonView;
    this.dateBaloonLabelProperties = this.defaults.DateBaloonLabel;

    this.textAreaProperties = this.defaults.TextArea;
    this.sendButtonProperties = this.defaults.SendButton;
    this.bottomWrapperViewProperties = this.defaults.BottomWrapperView;
    this.bottomViewProperties = this.defaults.BottomView;
    this.inputViewProperties = this.defaults.InputView;
    
    // create elements

    this.window = Titanium.UI.createWindow(this.windowProperties);
    this.titleControlView = Ti.UI.createView(this.titleControlViewProperties);
    this.lockButton = Titanium.UI.createButton(this.lockButtonProperties);
    this.settingsButton = Titanium.UI.createButton(this.settingsButtonProperties);
    this.callButton = Titanium.UI.createButton(this.callButtonProperties);

    this.scrollView = Ti.UI.createScrollView(this.scrollViewProperties);
    this.dateBaloonView = Ti.UI.createView(this.dateBaloonViewProperties);
    this.dateBaloonLabel = Ti.UI.createLabel(this.dateBaloonLabelProperties);

    this.textArea = Ti.UI.createTextArea(this.textAreaProperties);
    this.sendButton = Ti.UI.createButton(this.sendButtonProperties);
    this.bottomWrapperView = Ti.UI.createView(this.bottomWrapperViewProperties);
    this.bottomView = Ti.UI.createView(this.bottomViewProperties);
    this.inputView = Ti.UI.createView(this.inputViewProperties);
    this.textFieldTrigger = TiExtendText.createTextField(_.extend({},this.defaults.TextFieldTrigger,{inputAccessoryView: this.bottomWrapperView,inputView: this.inputView}));

    this.plusButton = Titanium.UI.createButton(this.plusButtonProperties);
    this.smileButton = Titanium.UI.createButton(this.smileButtonProperties);
    this.microphoneButton = Titanium.UI.createButton(this.microphoneButtonProperties);

    //assemble elements

    this.titleControlView.add(this.lockButton);
    this.titleControlView.add(this.settingsButton);
    this.titleControlView.add(this.callButton);

    this.window.backButtonTitle = this.interlocutor.name;
    this.window.setTitleControl(this.titleControlView);

    
    this.bottomView.add(this.textArea);
    this.bottomView.add(this.plusButton);
    this.bottomView.add(this.smileButton);
    this.bottomView.add(this.microphoneButton);
    this.bottomWrapperView.add(this.bottomView);

    this.dateBaloonLabel.text = moment().format('Do. MMMM YYYY');
    this.dateBaloonView.add(this.dateBaloonLabel);
    this.scrollView.add(this.dateBaloonView);

    this.window.add(this.scrollView);
    this.window.add(this.textFieldTrigger);

//events

    this.callButton.addEventListener('click', _.bind(App.Controllers.ConversationsWindowController.callButtonClick, that));
    this.sendButton.addEventListener('click', _.bind(App.Controllers.ConversationsWindowController.sendButtonClick, that));
    this.window.addEventListener('focus', _.bind(App.Controllers.ConversationsWindowController.windowFocus, that));
    this.textArea.addEventListener('return', _.bind(App.Controllers.ConversationsWindowController.textAreaReturn, that));
    this.textArea.addEventListener('change', _.bind(App.Controllers.ConversationsWindowController.textAreaChange, that));
    Ti.App.addEventListener('keyboardframechanged', _.bind(App.Controllers.ConversationsWindowController.TiAppKeyboardFrameChanged, that));

    this.lockButton.addEventListener('click', function() {
        App.Services.XmppService.connect(App.state.userId, App.state.userPassword);
    });

};

App.UI.ConversationsWindow.prototype = {

    setContact: function (contactInstance) {
        this.contactInstance = contactInstance;
    }

};


