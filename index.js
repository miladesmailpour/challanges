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
  ╔═╗╔╦╗╔╦╗  ╔╦╗╔═╗╔═╗╔═╗╦═╗╔╦╗╔╦╗╔═╗╔╗╔╔╦╗
  ╠═╣ ║║ ║║   ║║║╣ ╠═╝╠═╣╠╦╝ ║ ║║║║╣ ║║║ ║ 
  ╩ ╩═╩╝═╩╝  ═╩╝╚═╝╩  ╩ ╩╩╚═ ╩ ╩ ╩╚═╝╝╚╝ ╩ 
  `);
  }
  if (choice === "addRole") {
    console.log(`
  ╔═╗╔╦╗╔╦╗  ╦═╗╔═╗╦  ╔═╗
  ╠═╣ ║║ ║║  ╠╦╝║ ║║  ║╣ 
  ╩ ╩═╩╝═╩╝  ╩╚═╚═╝╩═╝╚═╝
  `);
  }
  if (choice === "addEmp") {
    console.log(`
  ╔═╗╔╦╗╔╦╗  ╔═╗╔╦╗╔═╗╦  ╔═╗╦ ╦╔═╗╔═╗
  ╠═╣ ║║ ║║  ║╣ ║║║╠═╝║  ║ ║╚╦╝║╣ ║╣ 
  ╩ ╩═╩╝═╩╝  ╚═╝╩ ╩╩  ╩═╝╚═╝ ╩ ╚═╝╚═╝
  `);
  }
  if (choice === "updateEmpRole") {
    console.log(`
  ╦ ╦╔═╗╔╦╗╔═╗╔╦╗╔═╗  ╦═╗╔═╗╦  ╔═╗
  ║ ║╠═╝ ║║╠═╣ ║ ║╣   ╠╦╝║ ║║  ║╣ 
  ╚═╝╩  ═╩╝╩ ╩ ╩ ╚═╝  ╩╚═╚═╝╩═╝╚═╝                                          
  `);
  }
  if (choice === "updateManager") {
    console.log(`
  ╦ ╦╔═╗╔╦╗╔═╗╔╦╗╔═╗  ╔╦╗╔═╗╔╗╔╔═╗╔═╗╔═╗╦═╗
  ║ ║╠═╝ ║║╠═╣ ║ ║╣   ║║║╠═╣║║║╠═╣║ ╦║╣ ╠╦╝
  ╚═╝╩  ═╩╝╩ ╩ ╩ ╚═╝  ╩ ╩╩ ╩╝╚╝╩ ╩╚═╝╚═╝╩╚═                 
  `);
  }
  if (choice === "viewAllEmpMan") {
    console.log(`
  ╔═╗╔╦╗╔═╗╦  ╔═╗╦ ╦╔═╗╔═╗╔═╗  ╔═╗╔╗╔╔╦╗  ╔╦╗╔═╗╔╗╔╔═╗╔═╗╔═╗╦═╗╔═╗
  ║╣ ║║║╠═╝║  ║ ║╚╦╝║╣ ║╣ ╚═╗  ╠═╣║║║ ║║  ║║║╠═╣║║║╠═╣║ ╦║╣ ╠╦╝╚═╗
  ╚═╝╩ ╩╩  ╩═╝╚═╝ ╩ ╚═╝╚═╝╚═╝  ╩ ╩╝╚╝═╩╝  ╩ ╩╩ ╩╝╚╝╩ ╩╚═╝╚═╝╩╚═╚═╝
  `);
  }
  if (choice === "viewAllEmpDep") {
    console.log(`
  ╔═╗╔╦╗╔═╗╦  ╔═╗╦ ╦╔═╗╔═╗╔═╗  ╔═╗╔╗╔╔╦╗  ╔╦╗╔═╗╔═╗╔═╗╦═╗╔╦╗╔╦╗╔═╗╔╗╔╔╦╗
  ║╣ ║║║╠═╝║  ║ ║╚╦╝║╣ ║╣ ╚═╗  ╠═╣║║║ ║║   ║║║╣ ╠═╝╠═╣╠╦╝ ║ ║║║║╣ ║║║ ║ 
  ╚═╝╩ ╩╩  ╩═╝╚═╝ ╩ ╚═╝╚═╝╚═╝  ╩ ╩╝╚╝═╩╝  ═╩╝╚═╝╩  ╩ ╩╩╚═ ╩ ╩ ╩╚═╝╝╚╝ ╩ 
  `);
  }
  if (choice === "annual") {
    console.log(`
    ╔═╗╔╗╔╔╗╔╦ ╦╔═╗╦    ╔╗ ╦ ╦╔╦╗╔═╗╔═╗╔╦╗
    ╠═╣║║║║║║║ ║╠═╣║    ╠╩╗║ ║ ║║║ ╦║╣  ║ 
    ╩ ╩╝╚╝╝╚╝╚═╝╩ ╩╩═╝  ╚═╝╚═╝═╩╝╚═╝╚═╝ ╩ 
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
          "8 - Update employee managers",
          "9 - View employees by manager",
          "10 - View employees by department",
          "11 - View the total utilized budget of the departments",
          "12 - Quit",
        ],
        pageSize: 15,
        validate: (answer) => {
          if (answer.length === 0) {
            return console.log("Please select from options!");
          }
          return true;
        },
      },
    ])
    .then((userInput) => {
      switch (parseInt(userInput.choice.slice(0, 2))) {
        case 1:
          viewAllEmployees();
          break;
        case 2:
          addEmployee();
          break;
        case 3:
          updateEmployeeRole();
          break;
        case 4:
          viewAllRoles();
          break;
        case 5:
          addRole();
          break;
        case 6:
          viewAllDepartments();
          break;
        case 7:
          addDepartment();
          break;
        case 8:
          updateEmployeeManager();
          break;
        case 9:
          viewEmpViaManagers();
          break;
        case 10:
          viewEmpViaDepartments();
          break;
        case 11:
          annualBudget();
          break;
        case 12:
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
  db.query("select id, name from department;", function (err, res) {
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
          `insert into department (name) values ("${answer.newDep}");`,
          function (err, res) {
            if (err) throw err;
            viewAllDepartments();
          }
        );
      });
  });
};

// Add role
const addRole = async () => {
  console.clear();
  menu("addRole");

  const departments = await db.query("select * from department;");
  const choices = departments.map(({ id, name }) => ({
    name: name,
    value: id,
  }));

  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter a Role",
        name: "newRole",
        validate: function (answer) {
          if (answer.length === 0) {
            return console.log("title is require for adding a Role!");
          }
          return true;
        },
      },
      {
        type: "number",
        message: "salary is require for adding a Role!",
        name: "newSalary",
        validate: function (answer) {
          if (answer.length === 0) {
            return console.log("Write one!");
          }
          return true;
        },
      },
      {
        type: "list",
        message: "Please Select a department for the Role",
        name: "department_id",
        choices: choices,
        pageSize: 15,
      },
    ])
    .then(function (answer) {
      db.query(
        `insert into role(title, salary, department_id) VALUES ("${answer.newRole}", ${answer.newSalary},${answer.department_id});`,
        function (err, res) {
          if (err) throw err;
          viewAllRoles();
        }
      );
    });
};

// Add employee
const addEmployee = async () => {
  console.clear();
  menu("addEmp");

  const roles = await db.query("select * from role;");
  const choices = roles.map(({ id, title }) => ({
    name: title,
    value: id,
  }));
  roles.unshift({ name: "None", value: null });

  const manager = await db.query("select * from employee;");
  const mChoices = manager.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id,
  }));
  mChoices.push({ name: "None", value: null });

  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the first name?",
        name: "firstName",
        validate: function (answer) {
          if (answer.length === 0) {
            return console.log("first name is require for adding an employee!");
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Please enter the last name?",
        name: "lastName",
        validate: function (answer) {
          if (answer.length === 0) {
            return console.log("last name is require for adding an employee!");
          }
          return true;
        },
      },
      {
        type: "list",
        message: "Please enter a role?",
        name: "role",
        choices: choices,
        pageSize: 15,
      },
      {
        type: "list",
        message: "Please enter the manager?",
        name: "manager",
        choices: mChoices,
        pageSize: 15,
      },
    ])
    .then(function (answer) {
      db.query(
        `insert into employee (first_name, last_name, role_id, manager_id) values ("${answer.firstName}","${answer.lastName}",${answer.role}, ${answer.manager});`,
        function (err, res) {
          if (err) throw err;
          viewAllEmployees();
        }
      );
    });
};

// Update employee role
const updateEmployeeRole = async () => {
  console.clear();
  menu("updateEmpRole");

  const roles = await db.query("select * from role;");
  const rChoices = roles.map(({ id, title }) => ({
    name: title,
    value: id,
  }));
  roles.unshift({ name: "None", value: null });

  const employee = await db.query("select * from employee;");
  const eChoice = employee.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id,
  }));

  inquirer
    .prompt([
      {
        type: "list",
        message: "Please select the employee wish to update its role?",
        name: "employeeID",
        choices: eChoice,
        pageSize: 15,
      },
      {
        type: "list",
        message: "Please select the new employee`s role?",
        name: "roleId",
        choices: rChoices,
        pageSize: 15,
      },
    ])
    .then(function (answer) {
      db.query(
        `update employee set role_id = ${answer.roleId} where id = ${answer.employeeID}; `,
        function (err, res) {
          if (err) throw err;
          viewAllEmployees();
        }
      );
    });
};

// Update employee manager
const updateEmployeeManager = async () => {
  console.clear();
  menu("updateManager");

  const employee = await db.query("select * from employee;");
  const employees = employee.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id,
  }));
  const manager = await db.query("select * from employee;");
  const mChoices = manager.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id,
  }));

  inquirer
    .prompt([
      {
        type: "list",
        message: "Please Select the employee wish to update its manager?",
        name: "employeeID",
        choices: employees,
        pageSize: 15,
      },
      {
        type: "list",
        message: "Please select the new employee manager?",
        name: "managerId",
        choices: mChoices,
        pageSize: 15,
      },
    ])
    .then(function (answer) {
      db.query(
        `update employee SET manager_id = ${answer.managerId} where id = ${answer.employeeID}; `,
        function (err, res) {
          if (err) throw err;
          viewAllEmployees();
        }
      );
    });
};

// View employees by manager
const viewEmpViaManagers = () => {
  console.clear();
  menu("main");
  db.query(
    "select em.id, concat(em.first_name, ' ', em.last_name) as manager, concat(e.first_name, ' ', e.last_name) as employee, r.title from employee e join employee em ON e.manager_id = em.id join role r on e.role_id=r.id;",
    function (err, res) {
      if (err) throw err;
      menu("viewAllEmpMan");

      tableMaker(res);
      init();
    }
  );
};

// View employees by department
const viewEmpViaDepartments = () => {
  console.clear();
  menu("main");
  db.query(
    "select d.id, d.name, concat(e.first_name, ' ', e.last_name) as employee, r.title from department d join role r on d.id = r.department_id join employee e on r.id=e.role_id;",
    function (err, res) {
      if (err) throw err;
      menu("viewAllEmpDep");
      tableMaker(res);
      init();
    }
  );
};

/// View annual budget by department
const annualBudget = () => {
  console.clear();
  menu("main");
  db.query(
    "select d.name, sum(r.salary) as budget from department d join role r on d.id = r.department_id group by d.name;",
    function (err, res) {
      if (err) throw err;
      menu("annual");

      tableMaker(res);
      init();
    }
  );
};
