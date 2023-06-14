const inquirer = require("inquirer");


const menuPrinter = (choice) => {
  if (choice === "main") {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What would you like to do?",
          name: "choice",
          choices: [
            "View All Employees",
            "View All Departments",
            "View All Roles",
            "View employees by manager",
            "View employees by department",
            "View annual budget by department",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update employee's Role",
            "Update employee's Manager",
            "Delete departments, roles, and employees",
          ],
          pageSize: 12,
          validate: (answer) => {
            if (answer.length === 0) {
              return console.log("Select one!");
            }
            return true;
          },
        },
      ])
      .then((answer) => answer.choice);
  }
};
module.exports = menuPrinter;
