'use strict';

var Users = require('../models/users.js');

function PollHandler () {
	this.getPolls = function (req, res) {
		Users
			.findOne({ 'github.id': req.user.github.id }, {'_id': false })
			.exec(function (err, user) {
				if (err) throw err;
				//figure out what to do with the result
				console.log('getting polls for' + user.polls);
				res.json(user.polls);
			});
	};

	this.addPoll = function(req, res) {
		Users
			.findOne({ 'github.id': req.user.github.id }, {'id': false})
			.exec(function (err, user) {
				if (err) throw err;
				user.polls.push({
					pollQuestion: 'test'
				});
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