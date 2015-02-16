
var data = require("../data.json");

exports.updateStatus = function(req, res) {   
	// Your code goes here]
	 data["status"].push({description: req.query.description});
	res.render('MainPage');
}