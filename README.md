# Assignment given

RESTful APIs for Entity/Domain (Projects, Employees and Manager)

This application is build in core node.js without using any framework i.e Express.JS or Hapi.JS or Sails.JS

## Running Locally

Download the application on local machine

Make sure you have [Node.js](http://nodejs.org/) and the npm installed.

```sh
$ cd RESTful-APIs-without-framework/
$ npm install


Your app should now be running on [localhost:3000](http://localhost:5000/).

## RESTful APIs

$ 1. http://localhost:3000/employees POST req to add new Employee
 or http://54.202.121.128:3002/employees POST req to add new Employee

req body : {
	"EmpName" : "E1",
	"EmpProject" : "P1",
	"EmpManager" : "M1"
}

$ http://localhost:3000/employees GET req to get Employee list
    or  http://54.202.121.128:3002/employees GET req to get Employee list

$ 2. http://localhost:3000/projects POST req to add new project
    or  http://54.202.121.128:3002/projects GET req to get Employee list

req body : {
	"ProjName" : "P1",
	"ProjEmpoloyees" : ["John"],
	"ProjManager" : "M1"
}

$ http://localhost:3000/projects GET req to get Employee list
    or  http://54.202.121.128:3002/projects GET req to get Employee list

$ http://localhost:3000/managers POST req to add new Manager
    or  http://54.202.121.128:3002/managers GET req to get Employee list

req body : {
	"ManagName" : "M2",
	"ManagProjects" : ["P2", "P4"],
	"ManagEmployees" : ["S", "A"]
}

$ http://localhost:3000/managers GET req to get Manager list
    or  http://54.202.121.128:3002/managers GET req to get Employee list
