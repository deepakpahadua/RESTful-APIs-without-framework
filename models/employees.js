//  This is Model in Mogoose for Employees
var mongoose = require('mongoose');

var EmployeeSchema = mongoose.Schema({
  EmpName: {
    type: String
  },
  EmpManager: {
    type: String
  },
  EmpProject: {
    type: String
  }
});

var Employee = module.exports = mongoose.model('Employee', EmployeeSchema);

module.exports.createEmployee = function(newEmp, callback) {
  newEmp.save(callback);
}

module.exports.getEmployees = function(callback) {
  var query = {};
  Employee.find(query, callback);
}
