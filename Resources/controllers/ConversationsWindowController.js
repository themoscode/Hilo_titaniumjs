App.Controllers.ConversationsWindowController = {

    callButtonClick: function (e) {

        App.views.profileWindow = new App.UI.ProfileWindow();
        App.views.profileWindow.setData(this.interlocutor);
        App.views.tabGroup.tabChats.open(App.views.profileWindow.window);

    },

    sendButtonClick: function (e) {

        var contactInstance = this.contactInstance;

        App.Services.XmppService.sendMessage(this.textArea.value);
        
        var conversationMessageView = new App.UI.ConversationMessageView();
        conversationMessageView.textMessage(this,'right', this.textArea.value);

        //this.textMessage('left', 'response from ' + contactInstance.getFullName());

    },

    windowFocus: function (e) {

        this.textFieldTrigger.focus();
    },

    textAreaReturn: function (e) {

        this.textFieldTrigger.focus();
    },

    textAreaChange: function (e) {

        if (this.textArea.value != "") {
            //this.bottomView.remove(this.buttonMicrophone);
            this.bottomView.add(this.sendButton);
        }
        else {
            this.bottomView.remove(this.sendButton);
            //this.bottomView.add(this.buttonMicrophone);

        }
    },

    TiAppKeyboardFrameChanged: function (e) {

        Ti.API.info('e.keyboardFrame.height=' + e.keyboardFrame.height);
        Ti.API.info('scrollView.height=' + this.scrollView.height);
        Ti.API.info('win.height=' + Ti.Platform.displayCaps.platformHeight);
        this.scrollView.height = (Ti.Platform.displayCaps.platformHeight - 68) - e.keyboardFrame.height;
    }

};
