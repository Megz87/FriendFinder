// DATA AND LOGIC TO MANIPULATE THAT DATA LIVE ON THE NODE SERVER
//=============================================================================
// DEPENDENCIES	
// Series of npm packages that we will use to give our server useful functionality
//==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================
var bodyParser = require('body-parser');
var express = require('express');//express makes routing easy using node.js
var path = require('path');

// Tells node that we are creating an "express" server..setting variable app equal to function express to make it easier to call
var app = express();
var PORT = process.env.PORT || 8080;

 
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }));


// parse application/json 
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));


//this is including htmlRoutes in the server file and the app that we are passing in to that specific
//function we want to use express
require('./routing/htmlRoutes.js')(app);


app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});


 