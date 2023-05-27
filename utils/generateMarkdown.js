// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  // let readMe = `# ${data.title}\n
  // ## Description\n
  // - ${data.desc_1 ? data.desc_1 + '\n' : ''}
  // - ${data.desc_2 ? data.desc_2 + '\n' : ''}
  // - ${data.desc_3 ? data.desc_3 + '\n' : ''}
  // - ${data.desc_4 ? data.desc_4 + '\n' : ''}
  // ## Table of Contents
  // ${data.installation ? '- [Installation](#installation)\n' : ''}
  // ${data.screenShot ? '- [Usage](#usage)\n' : ''}
  // ${data.collaborator ? '- [Credits](#credits)\n' : ''}
  // ${data.license ? '- [License](#license)\n' : ''}
  // ## Installation\n
  // ${data.installation ? '```' + data.installation + '```' : ''}\n
  // ## Usage\n
  // ${data.deployLink ? `[Deploy link](${data.deployLink})` + '\n' : ''}
  // ${data.screenShot ? `![Screenshot](./assets/images/${data.screenShot})` + '\n' : ''}
  // ## Credits\n
  // ${data.collaborator ? data.collaborator + '\n' : ''}
  // ## License\n
  // ${data.license ? data.license + '\n' : ''}
  // ---
  // ## Badges\n
  // ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  // ## Tests\n
  // ${data.test ? data.test + '\n' : ''}
  // ## Questions\n
  // please contact for more information via\n
  // [GitHub](https://github.com/${data.githubID})
  // or
  // ${data.email} 
  // `;
  // console.log(readMe)
  return 'readMe'
}

module.exports = generateMarkdown;
