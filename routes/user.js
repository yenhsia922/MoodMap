var user = require('../user.json');

exports.updateUser = function(req, res) {
	// get a random palette from the top ones
	var updateUser = user[0];
	//res.send('Your random palette is called: ' + randomPalette['title']);
	res.json(updateUser);
}