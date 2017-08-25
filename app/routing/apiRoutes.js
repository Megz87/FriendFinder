//ROUTES MAKE THE DATA AND LOGIC (THAT LIVE ON THE SERVER) ACCESSIBLE
//WE USE AJAX ON THE ROUTES SO WE CAN ACCESS THE DATA AND PUSH CHANGES ON THE CLIENT FRONT END SIDE
//api routes are for data...it will determine what data the user sees as well as what data the user is able to post to the server to store
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

//whenever something is posted to URL apifriends req.body will grab the data that was posted
//and push it to friends array
    app.post("/api/friends", function(req, res) {
    	var newfriend = req.body;

    	console.log(newfriend);

    	friends.push(newfriend);

    	res.json(newfriend);
    });


