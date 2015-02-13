var models = require('../models');

exports.projectInfo = function(req, res) { 
  var projectID = req.params.id;

  // query for the specific project and
  // call the following callback
  models.Project
    .find({"_id": currentStatus})
    .exec(afterQuery);

  function afterQuery(err, projects) {
    if(err) console.log(err);
    res.json(projects[0]);
  }
}

exports.addStatus = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();
  var newProject = new models.Project({
    "status": form_data.status,
    "timestamp": form_data.timestamp,
  });
  
  newProject.save(afterSaving);

  function afterSaving(err, Project){
    if(err){
      console.log(err);
      res.send(500);
    }
    res.redirect('/');
    res.send();
  }
}

exports.deleteStatus = function(req, res) {
  var currentStatus = req.params.id;

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
  models.Project
    .find({"_id": currentStatus})
    .remove()
    .exec(afterRemoving);

  function afterRemoving(){
    if(err){
      console.log(err);
      res.send(500);
    }
    res.send(500);
  }

}