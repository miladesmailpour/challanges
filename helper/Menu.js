const Inquirer = require("./Inquirer");

const menuChoices = [
  "1 View All Employees",
  "2 Add Employee",
  "3 Update Employee Role",
  "4 View All Roles",
  "5 Add Role",
  "6 View All Department",
  "7 Add Department",
  "Exit",
];

const call = async () => {
  console.clear();
  // fetching the user input

  userInput = await Inquirer.inquirerQuestioner(
    [{ menu: "Please select from the menu:" }],
    true,
    menuChoices
  );
  return userInput.menu;
};
module.exports = call;
