'use strict';

//FCC clementine version: http://www.clementinejs.com/tutorials/tutorial-passport.html

var express = require('express'),
	routes = require('./app/routes/index.js'),
	mongoose = require('mongoose');

var app = express();
var port = 8080;

mongoose.connect('mongodb://localhost:27017/clementinejs');

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

routes(app);

app.listen(port, function() {
	console.log(" Node.js listening on port " + port +"..");
});



/*
connect to DB
inside conncetion,
	check for error
	set up routes with app.use and express.static()
	listen for connection
*/
