
// Get all of our friend data
var friends = require('../friends.json');

exports.updateStatuses = function(req, res){
	res.json(friends);
};