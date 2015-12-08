'use strict';

//FCC clementine version: http://www.clementinejs.com/tutorials/tutorial-passport.html

var express = require('express'),
	routes = require('./app/routes/index.js'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	session = require('express-session');

var app = express();
// require('dotenv').load(); //add GitHub API info from .env to the Node process.env object.
require('./app/config/passport')(passport);

var path = process.cwd();
var port = process.env.PORT || 8080;

mongoose.connect(process.env.MONGO_URI);

app.use('/controllers', express.static(path + '/app/controllers'));
app.use('/public', express.static(path + '/public'));
app.use('/common', express.static(path + '/app/common'));

app.use(session({
	secret: 'secretClementine',
	resave: false,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

routes(app, passport);

app.listen(port, function() {
	console.log(process.env.APP_URL);
	console.log(" Node.js listening on port " + port +"..");
});



/*
connect to DB
inside conncetion,
	check for error
	set up routes with app.use and express.static()
	listen for connection
*/
