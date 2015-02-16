// Get all of our friend data
var data = require('../data.json');

exports.viewMap = function(req, res){

	console.log(data);
	res.render('MainPage');
};