//ROUTES MAKE THE DATA AND LOGIC (THAT LIVE ON THE SERVER) ACCESSIBLE
//WE USE AJAX ON THE ROUTES SO WE CAN ACCESS THE DATA AND PUSH CHANGES ON THE CLIENT FRONT END SIDE
//HTML routes help direct the user..when the user clicks on a link the router will understand based on the information in this file what page to deliver to the user


var path = require('path');

//module.exports allows data in this file to be used in other files
module.exports = function (app) {
//based on users URL we want to send them different pages..need a way for the user to get to 
//when user clicks on survey show them survey.html
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(_dirname + '/../public/survey.html'));
	});

	app.get('/', function(req, res) {
		res.sendFile(path.join(_dirname + '/../public/home.html'));
	});

}