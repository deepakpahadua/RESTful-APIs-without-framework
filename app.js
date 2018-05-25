var http = require("http"); // http core module inclusion for server creation and APIs creation
var mongoose = require('mongoose'); //  Mongoose for connection to Database mongodb and Writing Models and calls to db
const querystring = require('querystring'); //  querystring is to parse incoming req body

var Employee = require('./models/employees'); // Model requiring in app.js
var Manager = require('./models/managers'); // Model requiring in app.js
var Project = require('./models/projects'); // Model requiring in app.js

mongoose.connect('mongodb://wizni:wizni@ds233970.mlab.com:33970/wizni'); // this is remote mongodb database instance for data storage
var db = mongoose.connection;

function onRequest(req, res) { // This is function onReques that will handle all incoming POST and GET  requests without any framework i.e Express.js or Hapi.js

  if (req.url == "/employees") { // checking incoming request url
    if (req.method == "POST") // checking incoming request method
    {

      var body = '';
      req.on('data', function(data) {
        body += data;
      });
      req.on('end', function() {
        body = JSON.parse(body)
        var newEmp = new Employee({
          EmpName: body.EmpName,
          EmpProject: body.EmpProject,
          EmpManager: body.EmpManager
        });

        Employee.createEmployee(newEmp, function(err, user) {
          if (err) throw err;
          console.log(user);
          res.writeHead(200, {
            "Content-Type": "text/html"
          });
          res.end("Emloyee added successfully");
        });
      })
    } else if (req.method == "GET") {

      Employee.getEmployees(function(err, employees) {
        if (err) throw err;
        console.log(employees);
        res.writeHead(200, {
          "Content-Type": "application/json"
        });
        employees = JSON.stringify(employees)
        res.end(employees);

      });
    }
  } else
  if (req.url == "/projects") {
    if (req.method == "POST") {

      var body = '';
      req.on('data', function(data) {
        body += data;
      });
      req.on('end', function() {
        body = JSON.parse(body)
        console.log(body)
        var newProject = new Project({
          ProjName: body.ProjName,
          ProjEmpoloyees: body.ProjEmpoloyees,
          ProjManager: body.ProjManager
        });

        Project.createProject(newProject, function(err, project) {
          if (err) throw err;
          console.log(project);
          res.writeHead(200, {
            "Content-Type": "text/html"
          });
          res.end("Project added successfully");
        });
      })
    } else if (req.method == "GET") {

      Project.getProject(function(err, project) {
        if (err) throw err;
        console.log(project);
        res.writeHead(200, {
          "Content-Type": "application/json"
        });
        project = JSON.stringify(project)
        res.end(project);
      });
    }
  } else if (req.url == "/managers") {
    if (req.method == "POST") {
      var body = '';
      req.on('data', function(data) {
        body += data;
      });
      req.on('end', function() {
        body = JSON.parse(body)

        console.log(body)
        var newManager = new Manager({
          ManagName: body.ManagName,
          ManagProjects: body.ManagProjects,
          ManagEmployees: body.ManagEmployees
        });

        Manager.createManager(newManager, function(err, manager) {
          if (err) throw err;
          console.log(manager);
          res.writeHead(200, {
            "Content-Type": "text/html"
          });
          res.end("Manager added successfully");
        });
      })
    } else if (req.method == "GET") {
      Manager.getManager(function(err, managers) {
        if (err) throw err;
        console.log(managers);
        res.writeHead(200, {
          "Content-Type": "application/json"
        });
        managers = JSON.stringify(managers)
        res.end(managers);
      });
    }
  }
}

var port = 3000
http.createServer(onRequest).listen(port);
console.log("Server has started on port "+port);
