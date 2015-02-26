/*
// Get all of our friend data
var friends = require('../friends.json');

exports.viewFriends = function(req, res){
	res.json(friends);
};*/

// Get all of our friend data
var messages = require('../messages.json');

exports.viewMessages = function(req, res){
res.render('messages',messages);
};
/*
	res.render('friends', {
    'friends': [
      { 'name': 'C',
        'image': 'https://tse1.mm.bing.net/th?&id=HN.607997688310989954&w=300&h=300&c=0&pid=1.9&rs=0&p=0'
      },
      { 'name': 'Y',
        'image': 'https://tse1.mm.bing.net/th?&id=HN.607997688310989954&w=300&h=300&c=0&pid=1.9&rs=0&p=0'
      },
      { 'name': 'J',
        'image': 'https://tse1.mm.bing.net/th?&id=HN.607997688310989954&w=300&h=300&c=0&pid=1.9&rs=0&p=0'
      }
    ]
  });
};
*/
