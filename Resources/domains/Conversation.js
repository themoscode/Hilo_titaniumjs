App.Domains.Conversation = function(properties) {
	
	this.name = properties.name;
	this.date = properties.date;
	this.people = properties.people;
	this.recipients = this.getNumberOfRecipients();
	this.singleImage = this.getSingleImage();
	this.groupImage = properties.groupImage;
	this.message = properties.message;
	this.locked = properties.locked;
	this.messagesNumber = properties.messagesNumber;
	this.type = this.getType();
};

App.Domains.Conversation.prototype = {

	getType:function(){

		return (this.recipients == 1) ? 'single' : 'group';
	},

	getSingleImage:function(){

		var singleImage = this.people[0].image ? this.people[0].image : '/images/icons/logo.png';
		return singleImage ;
	},

	getNumberOfRecipients: function() {
		return _.size(this.people);
	},

	getConversationName: function() {
		return this.name ? this.name : this.people[0].getFullName();
	}

};
