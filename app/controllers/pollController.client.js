'use strict';

(function() {
	var addPollButton = document.querySelector('.btn-add-poll');
	var apiUrl = appUrl + '/api/:id/polls';

	function getInputVal(selector) {
		var val = document.querySelector(selector).value;
		document.querySelector(selector).value = '';
		return val;
	}

	function createPoll() {
		return {
			pollName: getInputVal('#poll-name-input'),
			//figure out best represention for 1 or more poll options
			pollChoice1: getInputVal('#choice1'),
			pollChoice2: getInputVal('#choice2'),
			pollChoice3: getInputVal('#choice3')
		};
	}

	function showAddedPoll (data) {
		var pollObject = JSON.parse.data;
		// console.log(pollObject);
	}
 
	function serialize(obj) { //http://stackoverflow.com/questions/1714786/querystring-encoding-of-a-javascript-object
	  var str = [];
	  for(var p in obj)
	    if (obj.hasOwnProperty(p)) {
	      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
	    }
	  return str.join("&");
	}

	addPollButton.addEventListener('click', function() {
		
		ajaxFunctions.ajaxRequest('POST', apiUrl, function() {

			ajaxFunctions.ajaxRequest('GET', apiUrl, showAddedPoll);
		}, serialize(createPoll()));
	}, false);

})();