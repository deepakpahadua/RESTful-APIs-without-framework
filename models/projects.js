//  This is Model in Mogoose for projects
var mongoose = require('mongoose');

var ProjectSchema = mongoose.Schema({
  ProjName: {
    type: String
  },
  ProjEmpoloyees: [{
    type: String
  }],
  ProjManager: {
    type: String
  }
});

var Project = module.exports = mongoose.model('Project', ProjectSchema);

module.exports.createProject = function(newProject, callback) {
  newProject.save(callback);
}

module.exports.getProject = function(callback) {
  var query = {};
  Project.find(query, callback);
}
