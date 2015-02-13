
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  "status": String,
  "timestamp": Number
});

exports.Project = Mongoose.model('Project', ProjectSchema);


