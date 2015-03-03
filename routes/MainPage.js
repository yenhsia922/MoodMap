// Get all of our friend data

exports.viewMap = function(req, res){

	var ran = Math.random();
	if(ran >0.5){
		res.render('MainPage');
	}
	else{
		res.render('MainPageAlt');
	}
	res.render('MainPageAlt');
};