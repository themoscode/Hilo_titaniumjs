App.Defaults.ConversationMessageView = {

	MessageLabel: { //message
     	left:10,
 	    top:4,
 	    right:5,
        bottom:4,
 	    text: '',
        width:'auto',
        height:'auto'  
     },

     MessageRightView : {
 	    right:5,
 	    width: Ti.UI.SIZE,
	 	height: Ti.UI.SIZE,
	    borderRadius :8, 
     },
     
     MessageLeftView : {  
 	    left:5,
 	    width: Ti.UI.SIZE,
	 	height: Ti.UI.SIZE,
	    borderRadius :8,
     },
     
     MessageRightEdgeView: {
     	right:0,
     	width:13,
     	height:7,
     	backgroundImage:'images/icons/messageEdgeRight.png',
     	zIndex : -1
     },
     
      MessageLeftEdgeView: {
     	left:0,
     	width:13,
     	height:7,
     	backgroundImage:'images/icons/messageEdgeLeft.png',
     	zIndex : -1
     },
     
     MessageTimeLabel: {
     	font:{
     		fontFamily:'Arial', 
     		fontSize:10, 
     		fontWeight:'normal'
     	},
     	color:'7a8c95'
     }
};