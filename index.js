const Inquirer = require("./helper/Inquirer");
const Api = require("./helper/Api");

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

const init = async () => {
  let flag = true;
  //   while (flag) {
  // console.clear();
  // fetching the user input
  const userInput = await Inquirer.inquirerQuestioner(
    [{ menu: "Please select from the menu:" }],
    true,
    menuChoices
  );
  // console.log(userInput);
  if (userInput.menu === "Exit") return;
  Api(Object.values(userInput));
  // console.log(returnApi);
};
// };

init();
