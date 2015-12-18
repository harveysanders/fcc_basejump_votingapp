'use strict';

(function() {
	var profileID = document.querySelector('#profile-id') || null;
	var profileUsername = document.querySelector('#profile-username') || null;
   	var profileRepos = document.querySelector('#profile-repos') || null;
   	var displayName = document.querySelector('#display-name');
   	var apiUrl = appUrl + '/api/:id';

   	function updateHtmlElement (data, element, userProperty) {
   		element.innerHTML = data[userProperty];
   	}

   	ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, function(data) {
         var userObject = JSON.parse(data);
         console.log(userObject);
   		updateHtmlElement(userObject, displayName, 'displayName');

         if (profileID !== null) {
            updateHtmlElement(userObject, profileID, 'id');   
         }

         if (profileUsername !== null) {
            updateHtmlElement(userObject, profileUsername, 'username');   
         }

         if (profileRepos !== null) {
            updateHtmlElement(userObject, profileRepos, 'publicRepos');   
         }
   	}));
})();