var appUrl = window.location.origin;
var ajaxFunctions = {
	ready: function ready (fn) {
		if (typeof fn !== 'function') {return;}

		if (document.readyState === 'complete') {
			return fn();
		}

		document.addEventListener('DOMContentLoaded', fn, false);
	},
	ajaxRequest: function ajaxRequest (method, url, callback, postData) {
		//add post handler

		var xmlhttp = new XMLHttpRequest();

		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
				callback(xmlhttp.response);
			}
		};

		xmlhttp.open(method, url, true);
		if (method === 'POST') {
			xmlhttp.setRequestHeader("Content-type", "application/json");
			xmlhttp.send(JSON.stringify(postData));
		} else {
			xmlhttp.send(null);
		}
		
	}
};

