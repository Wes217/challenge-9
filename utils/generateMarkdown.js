// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None') return ``

  if(license === 'MIT') return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

  if(license === 'Mozilla') return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`

  if(license === 'GNU GPL v2') return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`

  if(license === 'GNU GPL v3') return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`

  if(license === 'Apache') return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'None') return ``

  if(license === 'MIT') return `[MIT](https://opensource.org/licenses/MIT)`

  if(license === 'Mozilla') return `[Mozilla](https://opensource.org/licenses/MPL-2.0)`

  if(license === 'GNU GPL v2') return `[GNU GPL v2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`

  if(license === 'GNU GPL v3') return `[GNU GPL v3](https://www.gnu.org/licenses/agpl-3.0)`

  if(license === 'Apache') return `[Apache](https://opensource.org/licenses/Apache-2.0)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None') return ``

  return `
  ## License
  
  ${renderLicenseLink(license)}
  
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Content
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  * Email: [${data.email}](${data.email})
  * Github: [${data.username}](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;
