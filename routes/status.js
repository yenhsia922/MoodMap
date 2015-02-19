// Get all of our friend data
var masterUserList = require('../masterUserList.json');

exports.updateStatuses = function(req, res){
	res.json(masterUserList);
};