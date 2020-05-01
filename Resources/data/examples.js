//CONTACTS

contactInstanceList = [new App.Domains.Contact({
	
	firstName:"Abigail",
	lastName:"Sabra",
	image : null,
	hasHilo : true
	
}),new App.Domains.Contact({
	
	firstName:"Elise",
	lastName:"Satien",
	image : "images/imagesAvatar/EliseGatien.jpg",
	hasHilo : false

}),new App.Domains.Contact({
	
	firstName:"John",
	lastName:"Karras",
	image : "images/imagesAvatar/GeorgeKarras.jpg",
	hasHilo : false

}),new App.Domains.Contact({
	
	firstName:"Georgia",
	lastName:"Tomson",
	image : "images/imagesAvatar/GeorgiaSmith.jpg",
	hasHilo : true
}),new App.Domains.Contact({
	
	firstName:"Debbie",
	lastName:"Moris",
	image : "images/imagesAvatar/DebbieMoris.png",
	hasHilo : true

}),new App.Domains.Contact({
	
	firstName:"Heather",
	lastName:"Braaten",
	image : "images/imagesAvatar/HeatherBraaten.jpg",
	hasHilo : true

}),new App.Domains.Contact({
	
	firstName:"Ingrid",
	lastName:"Bergman",
	image : "images/imagesAvatar/IngridBergman.jpg",
	hasHilo : true
}),new App.Domains.Contact({
	
	firstName:"Katia",
	lastName:"Doris",
	image : "images/imagesAvatar/KatiaDoris.jpg",
	hasHilo : true
}),new App.Domains.Contact({
	
	firstName:"Mandy",
	lastName:"Soul",
	image : "images/imagesAvatar/mandySoul.jpg",
	hasHilo : true

}),new App.Domains.Contact({
	
	firstName:"Mariam",
	lastName:"Cell",
	image : "images/imagesAvatar/MariamCell.jpg",
	hasHilo : true
}),new App.Domains.Contact({
	
	firstName:"Min",
	lastName:"Seok",
	image : "images/imagesAvatar/MinSeok.jpg",
	hasHilo : true
}),new App.Domains.Contact({
	
	firstName:"Samantha",
	lastName:"Elauf",
	image : "images/imagesAvatar/samanthaElauf.jpg",
	hasHilo : true
}),new App.Domains.Contact({
	
	firstName:"Tatyana",
	lastName:"Escobar",
	image : "images/imagesAvatar/tatyanaEscobar.jpg",
	hasHilo : true
	
})];

//CONVERSATIONS

conversationInstanceList = [new App.Domains.Conversation({
	date : new Date(),
	message : "Pix: Hey there Don't really have a",
	locked : true,
	messagesNumber : 0,
	people: [
		contactInstanceList[0]
		
	]
	
}), new App.Domains.Conversation({
	name : "group1",
	date : new Date(),
	message : "group1 message",
	groupImage : null,
	locked : false,
	messagesNumber : 3,
	people: [
		contactInstanceList[0],
		contactInstanceList[1],
		contactInstanceList[2],
		// contactInstanceList[3],
		// contactInstanceList[4]
	]

}),new App.Domains.Conversation({
	date : new Date(),
	message : "Hey , let‘s see a movie",
	locked : false,
	messagesNumber : 3,
	people: [
		contactInstanceList[1]
	]
	
}), new App.Domains.Conversation({
	name : 'group2',
	date : new Date(),
	message : "group2 message",
	locked : true,
	messagesNumber : 12,
	people: [
		contactInstanceList[5],
		contactInstanceList[6],
		contactInstanceList[7],
		contactInstanceList[8],
		contactInstanceList[9]
	]
	
}), new App.Domains.Conversation({
	date : new Date(),
	message : "Shall we meet today?",
	locked : false,
	messagesNumber : 1219,
	people: [
		contactInstanceList[3]
	]

})]; 