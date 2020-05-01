App.UI.ConversationMessageView = function() {

	this.defaults = App.Defaults.ConversationMessageView;

	this.messageMaxWidth = 200;
    this.messageEdgeY = -8;
    this.messagesDistanceY = 20;
    this.messageTimeLabelY = 7;
    this.messageRightFontColor = App.Styles.Colors.WHITE;
    this.messageLeftFontColor = App.Styles.Colors.DARK_BLUE;

    this.messageRightBackgroundColor = '#3d5a66';
    this.messageLeftBackgroundColor = '#bdccd4';

    this.messageLabelProperties = this.defaults.MessageLabel;

    this.messageRightViewProperties = _.extend({},this.defaults.MessageRightView,{backgroundColor:this.messageRightBackgroundColor});
    this.messageLeftViewProperties = _.extend({},this.defaults.MessageLeftView,{backgroundColor:this.messageLeftBackgroundColor});

    this.messageRightEdgeViewProperties = this.defaults.MessageRightEdgeView;
    this.messageLeftEdgeViewProperties = this.defaults.MessageLeftEdgeView;

    this.messageTimeLabelProperties = this.defaults.MessageTimeLabel;


}

App.UI.ConversationMessageView.prototype = {

	textMessage: function (that,position, str) {


        var messageView = null;
        var messageViewProperties = null;

        var messageEdgeView = null;
        var messageEdgeViewProperties = null;

        var messageTimeLabel = null;
        var messageLabel = null;

        var messageTimeLabelProperties = this.messageTimeLabelProperties;
        var messageMaxWidth = this.messageMaxWidth;
        var messageEdgeY = this.messageEdgeY;
        var messagesDistanceY = this.messagesDistanceY;
        var messageTimeLabelY = this.messageTimeLabelY;
        var messageFontColor = this.messageFontColor;


        // right
        if (position == 'right') {

            messageViewProperties = this.messageRightViewProperties;
            messageEdgeViewProperties = this.messageRightEdgeViewProperties;
            messageFontColor = this.messageRightFontColor;
        }

        else { //left

            messageViewProperties = this.messageLeftViewProperties;
            messageEdgeViewProperties = this.messageLeftEdgeViewProperties;
            messageFontColor = this.messageLeftFontColor;
        }

        messageEdgeView = Ti.UI.createView(messageEdgeViewProperties);

        messageLabel = Ti.UI.createLabel(this.messageLabelProperties);
        messageLabel.text = str;
        messageLabel.color = messageFontColor;

        messageView = Ti.UI.createView(messageViewProperties);
        messageView.add(messageLabel);

        messageTimeLabel = Ti.UI.createLabel(messageTimeLabelProperties);
        messageTimeLabel.text = moment().format('hh:mm a');
        messageTimeLabel.left = messageLabel.toImage().width + 20;


        messageView.add(messageTimeLabel);
        messageView.top = that.messagePositionY;
        messageView.width = messageView.toImage().width + 5;
        that.scrollView.add(messageView);


        if (messageView.toImage().width > messageMaxWidth) {

            messageView.width = messageMaxWidth;
            messageTimeLabel.left = messageView.toImage().width - 47;
            messageTimeLabel.top = messageLabel.toImage().height;
            messageTimeLabel.height = 20;

        }
        messageEdgeView.top = that.messagePositionY + messageView.toImage().height + messageEdgeY;
        that.scrollView.add(messageEdgeView);
        that.messagePositionY = that.messagePositionY + messageView.toImage().height + messagesDistanceY;

        //Ti.API.debug('that.messagePositionY =',that.messagePositionY);

        that.textArea.value = "";
        that.bottomView.remove(that.sendButton);
        that.scrollView.scrollToBottom();

    }

};