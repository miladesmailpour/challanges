// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{ title: 'What is the project title?' },
{ desc_1: 'What was your motivation?' },
{ desc_2: 'Why did you build this project?' },
{ desc_3: 'What problem does it solve?' },
{ desc_4: 'What did you learn?' },
{ installation: 'What are the steps required to install your project?' },
{ deployLink: 'Please enter the deploy link, if is there any:' },
{ screenShot: 'please save your screenShot in "assets/images" and enter the full name "Screenshot.png":' },
{ license: 'Which license did you have on the project?' },
{ collaborator: 'Is there any collaborators do you want to mention?' },
{ test: 'Is there any test method do you want to share?' },
{ githubID: 'Please enter your GitHub username:' },
{ email: 'Please enter your email:' }]

// turning question to the inquirer question
const inquirerObjMacker = (questions) => {
    let obj = {}
    return questions.map((question) => {
        if (Object.keys(question)[0] != 'license') {
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
                choices: ['MIT License', 'Apache License 2.0', 'Mozilla Public License 2.0', 'GNU GPLv3', 'Boost Software License 1.0', 'The Unlicense'],
            }
        }
        return obj
    })
}
// using inquirer to ask questions and return object with user answers
async function inquirerQuestioner(questions) {
    // console.log(questions)
    const answers = await inquirer
        .prompt(questions)
        .then((response) => {
            // console.log(response)
            return response
        }
        );
    return answers
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
async function init() {
    const inquirerArrObj = inquirerObjMacker(questions)
    const answers = await inquirerQuestioner(inquirerArrObj)
    // console.log(answers)
    const readme = readMeMaker(answers)
    writeToFile('./README.md', readme)
    // fs.writeFile('./ReadMe.md', JSON.stringify(answers), (err) =>
    //     err ? console.error(err) : console.log('Success!'))
}
// place the userinput to the template 
function readMeMaker(data) {
    let readMe = `# ${data.title}\n
## Description\n
- ${data.desc_1 ? data.desc_1 + '\n' : ''}
- ${data.desc_2 ? data.desc_2 + '\n' : ''}
- ${data.desc_3 ? data.desc_3 + '\n' : ''}
- ${data.desc_4 ? data.desc_4 + '\n' : ''}
## Table of Contents
${data.installation ? '- [Installation](#installation)\n' : ''}
${data.screenShot ? '- [Usage](#usage)\n' : ''}
${data.collaborator ? '- [Credits](#credits)\n' : ''}
${data.license ? '- [License](#license)\n' : ''}
## Installation\n
${data.installation ? data.installation : ''}\n
## Usage\n
${data.deployLink ? `[Deploy link](${data.deployLink})` + '\n' : ''}
${data.screenShot ? `![Screenshot](./assets/images/${data.screenShot})` + '\n' : ''}
## Credits\n
${data.collaborator ? data.collaborator + '\n' : ''}
## License\n
${data.license ? data.license + '\n' : ''}
---
## Badges\n
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
## Tests\n
${data.test ? data.test + '\n' : ''}
## Questions\n
please contact for more information via\n
[GitHub](https://github.com/${data.githubID})
or
${data.email} 
`;
    // console.log(readMe)
    return readMe
}
// Function call to initialize app
init();





