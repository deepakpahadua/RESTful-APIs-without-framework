//  This is Model in Mogoose for Managers
var mongoose = require('mongoose');

var ManagerSchema = mongoose.Schema({
  ManagName: {
    type: String
  },
  ManagProjects: [{
    type: String
  }],
  ManagEmployees: [{
    type: String
  }]
})

var Manager = module.exports = mongoose.model('Manager', ManagerSchema);

module.exports.createManager = function(newManager, callback) {
  newManager.save(callback);
}

module.exports.getManager = function(callback) {
  var query = {};
  Manager.find(query, callback);
}
