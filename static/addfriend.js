/*copied from lab5 this doesn't do anything*/

var friendList = require("../friendlist.json");

exports.addFriend = function(req, res) {   
	// Your code goes here]
	 data["friends"].push({name: req.query.name, 
	 					   description: req.query.description, 
	 					   imageURL: 'http://lorempixel.com/400/400/people'});
	 res.render('add');
	 console.log("FRIEND BE ADDED");
}