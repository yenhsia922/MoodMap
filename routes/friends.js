/*
// Get all of our friend data
var friends = require('../friends.json');

exports.viewFriends = function(req, res){
	res.json(friends);
};*/

// Get all of our friend data
var friends = require('../friends.json');

exports.viewFriends = function(req, res){
	res.render('friends');
};