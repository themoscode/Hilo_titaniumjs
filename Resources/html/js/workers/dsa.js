/*global DSA */

pseudoWorker = function(root){
	//"use strict";
	var thisObj = this;
	root.OTR = {};
	root.DSA = {};

	var sendMsg = function(type, val) {
		//postMessage({ type: type, val: val });
		//sim webworker onmessage
		thisObj.onmessage({'data':{ type: type, val: val }});
	};
	this.onmessageInt = function (e) {
		var data = e;
		
		//importScripts.apply(root, imports)
		
		Cryptocat.random.setSeed(data.seed)

		//if (data.debug) { sendMsg('debug', 'DSA key creation started') }

		var dsa = new DSA()

		//if (data.debug) { sendMsg('debug', 'DSA key creation finished') }
		sendMsg('data', dsa.packPrivate())
		
	}
}
