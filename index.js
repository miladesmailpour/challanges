const inquirer = require("inquirer");
const mysql = require("mysql2");
const util = require("util");
const { Console } = require("console");
const { Transform } = require("stream");
const { async } = require("rxjs");
require("dotenv").config();

// database  connection
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
db.query = util.promisify(db.query);

// main menu
const menu = (choice) => {
  if (choice === "main") {
    console.log(`
  ███ █   █ ███ █    ██  █   █ ███ ███   █   █  ██  █   █  ██   ██  ███ ████          
  █   ██ ██ █ █ █   █  █ █   █ █   █     ██ ██ █  █ ██  █ █  █ █    █   █  █         
  ██  █ █ █ ███ █   █  █  ███  ██  ██    █ █ █ ████ █ █ █ ████ █    ██  ████          
  █   █   █ █   █   █  █   █   █   █     █   █ █  █ █  ██ █  █ █  █ █   █ █         
  ███ █   █ █   ███  ██    █   ███ ███   █   █ █  █ █   █ █  █  ██  ███ █  █ 
  `);
  }
  if (choice === "allEmp") {
    console.log(`
                        ╔═╗ ╦  ╦    ╔═╗╔╦╗╔═╗╦  ╔═╗╦ ╦╔═╗╔═╗╔═╗
                        ╠═╣ ║  ║    ║╣ ║║║╠═╝║  ║ ║╚╦╝║╣ ║╣ ╚═╗
                        ╩ ╩ ╩═╝╩═╝  ╚═╝╩ ╩╩  ╩═╝╚═╝ ╩ ╚═╝╚═╝╚═╝
  `);
  }
  if (choice === "allRole") {
    console.log(`
                  ╦═╗╔═╗╦  ╔═╗╔═╗
                  ╠╦╝║ ║║  ║╣ ╚═╗
                  ╩╚═╚═╝╩═╝╚═╝╚═╝
  `);
  }
  if (choice === "allDep") {
    console.log(`
 ╦╗╔═╗╔═╗╔═╗╦═╗╔╦╗╔╦╗╔═╗╔╗╔╔╦╗╔═╗
 ║║║╣ ╠═╝╠═╣╠╦╝ ║ ║║║║╣ ║║║ ║ ╚═╗
 ╩╝╚═╝╩  ╩ ╩╩╚═ ╩ ╩ ╩╚═╝╝╚╝ ╩ ╚═╝
  `);
  }
  if (choice === "addDep") {
    console.log(`
 ╔═╗╔╦╗╔╦╗  ╔╦╗╔═╗╔═╗╔═╗╦═╗╔╦╗╔╦╗╔═╗╔╗╔╔╦╗╔═╗
 ╠═╣ ║║ ║║   ║║║╣ ╠═╝╠═╣╠╦╝ ║ ║║║║╣ ║║║ ║ ╚═╗
 ╩ ╩═╩╝═╩╝  ═╩╝╚═╝╩  ╩ ╩╩╚═ ╩ ╩ ╩╚═╝╝╚╝ ╩ ╚═╝
  `);
  }
};
const init = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
          "1 - View All Employees",
          "2 - Add an Employee",
          "3 - Update employee's Role",
          "4 - View All Roles",
          "5 - Add a Role",
          "6 - View All Department",
          "7 - Add a Department",
          "8 - Quit",
        ],
        pageSize: 8,
        validate: (answer) => {
          if (answer.length === 0) {
            return console.log("Select one!");
          }
          return true;
        },
      },
    ])
    .then((userInput) => {
      switch (parseInt(userInput.choice[0])) {
        case 1:
          viewAllEmployees();
          break;
        case 2:
          console.log("2 - Add an Employee");
          break;
        case 3:
          console.log("3 - Update employee's Role");
          break;
        case 4:
          viewAllRoles();
          break;
        case 5:
          console.log("5 - Add a Role");
          break;
        case 6:
          viewAllDepartments();
          break;
        case 7:
          addDepartment();
          break;
        case 8:
          console.clear();
          console.log("see you soon!");
          break;
        default:
          console.log("Invalid choice. Please try again.");
      }
    });
};
// table maker
const tableMaker = (data) => {
  const t = new Transform({
    transform(chunk, enc, cb) {
      cb(null, chunk);
    },
  });
  const logger = new Console({ stdout: t });
  logger.table(data);
  const table = (t.read() || "").toString();
  let result = "";
  for (let row of table.split(/[\r\n]+/)) {
    let r = row.replace(/[^┬]*┬/, "┌");
    r = r.replace(/^├─*┼/, "├");
    r = r.replace(/│[^│]*/, "");
    r = r.replace(/^└─*┴/, "└");
    r = r.replace(/'/g, " ");
    result += `${r}\n`;
  }
  console.log(result);
};

menu("main");
init();

// View All Employees
const viewAllEmployees = () => {
  console.clear();
  menu("main");
  menu("allEmp");

  db.query(
    "select e.id, e.first_name, e.last_name, r.title, d.name as department, r.salary, concat(em.first_name, ' ', em.last_name) as manager from employee e join role r on e.role_id= r.id join department d on r.department_id=d.id join employee em on e.manager_id= em.id;",
    function (err, res) {
      if (err) throw err;

      tableMaker(res);
      init();
    }
  );
};

// View All Roles
const viewAllRoles = () => {
  console.clear();
  menu("main");
  menu("allRole");
  db.query(
    "select r.id, r.title, d.name as department, r.salary FROM role r join department d on r.department_id = d.id;",
    function (err, res) {
      if (err) throw err;

      tableMaker(res);
      init();
    }
  );
};

// View All Departments
const viewAllDepartments = () => {
  console.clear();
  menu("main");
  menu("allDep");
  db.query("select id, name from department;", function (err, res) {
    if (err) throw err;

    tableMaker(res);
    init();
  });
};

// Add a Department

const addDepartment = () => {
  console.clear();
  db.query("SELECT id, name FROM department;", function (err, res) {
    if (err) throw err;

    menu("addDep");

    tableMaker(res);

    inquirer
      .prompt([
        {
          type: "input",
          message: "Please enter the name of department?",
          name: "newDep",
          validate: function (answer) {
            if (answer.length === 0) {
              return console.log("name is require for adding a Department!");
            }
            return true;
          },
          pageSize: 13,
        },
      ])
      .then(function (answer) {
        db.query(
          `INSERT INTO department (name) VALUES ("${answer.newDep}");`,
          function (err, res) {
            if (err) throw err;
            viewAllDepartments();
          }
        );
      });
  });
};
