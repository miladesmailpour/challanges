const inquirer = require("inquirer");
const mysql = require("mysql2");
const { Console } = require("console");
const util = require("util");
const { Transform } = require("stream");
const headerPrinter = require("./assets/js/headerPrinter");
const menuPrinter = require("./assets/js/menuPrinter");
require("dotenv").config();

// database  connection
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
db.query = util.promisify(db.query);

const init = () => {
  headerPrinter("logo");
  switch (menuPrinter("main")) {
    case "View All Employees":
      console.log("viewEmployees");
      break;
    case "View All Departments":
      console.log("viewDepartments");
      break;
    case "View All Roles":
      console.log("viewRoles");
      break;
    case "View employees by manager":
      console.log("viewManagers");
      break;
    case "View employees by department":
      console.log("viewEmployDepart");
      break;
    case "View annual budget by department":
      console.log("viewAnnualBudget");
      break;
    case "Add a Department":
      console.log("addDepartment");
      break;
    case "Add a Role":
      console.log("addRole");
      break;
    case "Add an Employee":
      console.log("addEmployee");
      break;
    case "Update employee's Role":
      console.log("updateEmployeeRole");
      break;
    case "Update employee's Manager":
      console.log("updateEmployeeManager");
      break;
    case "Delete departments, roles, and employees":
      console.log("deleteElements");
      break;
    default:
      console.log("Invalid choice. Please try again.");
  }
};

init();
