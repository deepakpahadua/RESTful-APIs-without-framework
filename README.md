# Assignment given

RESTful APIs for Entity/Domain (Projects, Employees and Manager)

This application is build in core node.js without using any framework i.e Express.JS or Hapi.JS or Sails.JS

## Running Locally

Download the application on local machine

Make sure you have [Node.js](http://nodejs.org/) and the npm installed.

```sh
$ cd wizniapp1
$ npm install


Your app should now be running on [localhost:3000](http://localhost:5000/).

## RESTful APIs

$ 1. http://localhost:3000/employees POST req to add new Employee

req body : {
	"EmpName" : "Sumit Jangid",
	"EmpProject" : "Project1",
	"EmpManager" : "Manager1"
}

$ http://localhost:3000/employees GET req to get Employee list


$ 2. http://localhost:3000/projects POST req to add new project

req body : {
	"ProjName" : "Project10",
	"ProjEmpoloyees" : ["Pulkit Bansal"],
	"ProjManager" : "manager1"
}

$ http://localhost:3000/projects GET req to get Employee list


$ http://localhost:3000/managers POST req to add new Manager

req body : {
	"ManagName" : "Atinder Pal Singh22",
	"ManagProjects" : ["Project2", "Project4"],
	"ManagEmployees" : ["Satyam", "Atul"]
}

$ http://localhost:3000/manager GET req to get Manager list
