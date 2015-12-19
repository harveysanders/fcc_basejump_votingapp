'use strict';

var Users = require('../models/users.js');

function PollHandler () {
	this.getPolls = function (req, res) {
		Users
			.findOne({ 'github.id': req.user.github.id }, {'_id': false })
			.exec(function (err, user) {
				if (err) throw err;
				//figure out what to do with the result
				// console.log('getting polls for' + user);
				res.json(user);
			});
	};

	this.addPoll = function(req, res) {
		//TODO allow createPoll() to accept poll obj e.g. 
		//{pollName: 'name of poll', options: [...] } 
		function createPoll(pollName, pollOptions) {
			var poll = {};
			
			poll.pollName = pollName;
			poll.options = pollOptions.map(function(option, index) {
				return {
					option: option,
					votes: 0
				};
			});
			return poll;
		}

		var newPoll = createPoll(req.body.pollName, req.body.pollOptions);

		Users
			.findOneAndUpdate({ 'github.id': req.user.github.id }, {$push: {"polls": newPoll} })
			.exec(function (err, user) {
				if (err) throw err;
				res.json(user.polls);
			});
	};

	this.deletePoll = function(req, res) {
		Users
			.findOne({ 'github.id': req.user.github.id }, {'id': false})
			.exec(function (err, user) {
				if (err) throw err;
				console.log('in deletePoll function.');
			});
	};

}

module.exports = PollHandler;