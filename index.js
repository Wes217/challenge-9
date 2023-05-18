//packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user input
const questions = [
    {
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title',    
    },
    {
    type: 'input',
    message: 'Enter a description for your project:',
    name: 'description',    
    },
    {
    type: 'input',
    message: 'Enter installation instructions for your project:',
    name: 'installation',    
    },
    {
    type: 'input',
    message: 'Enter usage information for your project:',
    name: 'usage',
    },
    {
    type: 'input',
    message: 'Enter contribution guidelines for your project:',
    name: 'contribution',
    },
    {
    type: 'input',
    message: 'Enter test instructions for your project:',
    name: 'test',
    },
    {
    type: 'list',
    message: 'Select a license:',
    name: 'license',
    choices:[
        "MIT",
        "Mozilla",
        "GNU GPL v2",
        "GNU GPL v3",
        "Apache",
        "None",],
    },
    {
    type: 'input',
    message: 'Enter email for contact:',
    name: 'email',
    },
    {
    type: 'input',
    message: 'Enter Github username:',
    name: 'username',
    },
    
];








//function to write README file
function writeToFile (fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) throw err;
})
}
//function to initialize app
function init() {
inquirer.prompt(questions).then((data) => {
    writeToFile("./readmes/README.md",data)
})
};

// Function call to initialize apps
init();