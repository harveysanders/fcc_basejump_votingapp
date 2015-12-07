'use strict';

var express = require('express'),
	routes = require('./app/routes/index.js'),
	mongo = require('mongodb').MongoClient;

var app = express();
var port = 3000;

mongo.connect('mongodb://localhost:27017/clementinejs', function (err, db) {
	
	if (err) 
		throw new Error('Database failed to connect!');
	else 
		console.log('MongoDB successfully connected on port 27017');

	app.use('/public', express.static(process.cwd() + '/public'));
	app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

	routes(app, db);

	app.listen(port, function() {
		console.log("listening on port " + port +"..");
	});

});

/*
connect to DB
inside conncetion,
	check for error
	set up routes with app.use and express.static()
	listen for connection
*/
