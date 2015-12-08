//'use strict'; //use strict is not a function??

(function () {
	var addButton = document.querySelector('.btn-add');
	var deleteButton = document.querySelector('.btn-delete');
	var clickNum = document.querySelector('#click-num');
	var apiUrl = appUrl + '/api/:id/clicks'; //appUrl globally declate in 'ajax-functions'
	
	function updateClickCount (data) {
		var clicksObject = JSON.parse(data);
		clickNum.innerHTML = clicksObject.clicks;
	}

	ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount));
	

	addButton.addEventListener('click', function() {
		ajaxFunctions.ajaxRequest('POST', apiUrl, function() {
			ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount); 
		});
	}, false);

	deleteButton.addEventListener('click', function() {
		ajaxFunctions.ajaxRequest('DELETE', apiUrl, function() {
			ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount); //not working
		});
	}, false);

})();