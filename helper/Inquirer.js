const inquirer = require("inquirer");
// accepting an array of question and choices and return array of user input
const inquirerObjMacker = (questions, isList, choices = ["add the choice"]) => {
  let obj = {};
  return questions.map((question) => {
    if (!isList) {
      obj = {
        type: "input",
        message: Object.values(question)[0],
        name: Object.keys(question)[0],
      };
    } else {
      obj = {
        type: "list",
        message: Object.values(question)[0],
        name: Object.keys(question)[0],
        choices: choices,
      };
    }
    return obj;
  });
};
async function inquirerQuestioner(questions, isList, choices) {
  const answers = await inquirer
    .prompt(inquirerObjMacker(questions, isList, choices))
    .then((response) => {
      return response;
    });
  // console.log(answers)
  return answers;
}
module.exports = { inquirerQuestioner };
