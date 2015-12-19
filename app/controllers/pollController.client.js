'use strict';

(function() {
	var addPollButton = document.querySelector('#btn-add-poll');
	var apiUrl = appUrl + '/api/:id/polls';

	function getInputVal(selector) {
		var val = document.querySelector(selector).value;
		document.querySelector(selector).value = '';
		return val;
	}

	function createPoll() {
		var poll = {};

		poll.pollName = getInputVal('#poll-name-input');
		poll.pollOptions = [];

		$(".poll-choices input[type=text]").each(function(){
			poll.pollOptions.push($(this).val());
		});
		return poll;
	}

	function showAddedPoll (data) {
		var pollObject = JSON.parse.data;
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
		}, createPoll());
	}, false);

})();