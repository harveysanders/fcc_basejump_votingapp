'use strict';

//FCC clementine version: http://www.clementinejs.com/tutorials/tutorial-passport.html

var express = require('express'),
	routes = require('./app/routes/index.js'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	session = require('express-session');

var app = express();
require('dotenv').load(); //add GitHub API info from .env to the Node process.env object.
require('./app/config/passport')(passport);

var port = process.env.PORT || 8080;

mongoose.connect(process.env.MONGO_URI);

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

app.use(session({
	secret: 'secretClementine',
	resave: false,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

routes(app, passport);

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
