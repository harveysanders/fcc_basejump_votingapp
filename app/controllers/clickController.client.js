//'use strict'; //use strict is not a function??

(function () {
	var addButton = document.querySelector('.btn-add');
	var deleteButton = document.querySelector('.btn-delete');
	var clickNum = document.querySelector('#click-num');
	var apiUrl = '/api/clicks';

	function ready (fn) {
		if (typeof fn !== 'function') {
			return;
		}

		if (document.readyState === 'complete') {
			return fn();
		}
		document.addEventListener('DOMContentLoaded', fn, false); //read more for better understanding
	}

	function ajaxRequest (method, url, callback) {
		var xmlhttp = new XMLHttpRequest();

		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
				callback(xmlhttp.response);
			}
		};
		xmlhttp.open(method, url, true);
		xmlhttp.send();
	}
	
	function updateClickCount (data) {
		var clicksObject = JSON.parse(data);
		console.log('update click');
		console.log(clicksObject);
		clickNum.innerHTML = clicksObject.clicks;
	}

	ready(ajaxRequest('GET', apiUrl, updateClickCount));

	addButton.addEventListener('click', function() {
		ajaxRequest('POST', apiUrl, function() {
			console.log('click POST');
			ajaxRequest('GET', apiUrl, updateClickCount); 
		});
	}, false);

	deleteButton.addEventListener('click', function() {
		ajaxRequest('DELETE', apiUrl, function() {
			ajaxRequest('GET', apiUrl, updateClickCount); //not working
		});
	}, false);

})();