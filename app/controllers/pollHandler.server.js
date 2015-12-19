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
		function createPoll(pollName, options) {
			var poll = {};
			var args = Array.prototype.slice.call(arguments, 1);
			
			args.forEach(function(arg, index) {
				poll['option' + index] = arg;
			});

			poll.pollName = pollName;

			return poll;
		}

		createPoll(req.body.pollName);

		var poll = {
			pollName: req.body.pollName,
			option1: req.body.pollChoice1, //figure out dynamic option handling
			option2: req.body.pollChoice2,
			option3: req.body.pollChoice3
		};

		Users
			.findOneAndUpdate({ 'github.id': req.user.github.id }, {$push: {"polls": poll} })
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