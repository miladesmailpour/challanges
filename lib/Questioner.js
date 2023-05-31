const inquirer = require('inquirer')

const inquirerObjMacker = (questions, choices = ['add the choice']) => {
    let obj = {}
    return questions.map((question) => {
        if (Object.keys(question)[0] != 'selectedShape') {
            obj = {
                type: 'input',
                message: Object.values(question)[0],
                name: Object.keys(question)[0]
            }
        }
        else {
            obj = {
                type: 'list',
                message: Object.values(question)[0],
                name: Object.keys(question)[0],
                choices: choices
            }
        }
        return obj
    })
}
async function inquirerQuestioner(questions, choices) {
    const answers = await inquirer
        .prompt(inquirerObjMacker(questions, choices))
        .then((response) => {
            return response
        }
        )
    // console.log(answers)
    return answers
}
module.exports = { inquirerQuestioner }