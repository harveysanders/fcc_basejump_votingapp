'use strict';

(function() {
	var addPollButton = document.querySelector('.btn-add-poll');
	var apiUrl = appUrl + '/api/:id/polls';

	function showAddedPoll (data) {
		var pollObject = JSON.parse.data;
		console.log(pollObject);
	}

	addPollButton.addEventListener('click', function() {
		//TODO fix new poll posting to db
		ajaxFunctions.ajaxRequest('POST', apiUrl, function() {
			console.log('posting.');
			ajaxFunctions.ajaxRequest('GET', apiUrl, showAddedPoll);
		});
	}, false);

})();