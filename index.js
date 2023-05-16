// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");



// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title',    
    },
    {
    type: 'input',
    message: 'Enter a description for your project',
    name: 'description',    
    },
    {
    type: 'input',
    message: 'Enter installation instructions for your project',
    name: 'installation',    
    },
    {
    type: 'input',
    message: 'Enter usage information for your project',
    name: 'usage',
    },
    {
    type: 'input',
    message: 'Enter contribution guidelines for your project',
    name: 'contribution',
    },
    {
    type: 'input',
    message: 'Enter test instructions for your project',
    name: 'test',
    },
    {
    type: 'list',
    message: 'Select a license',
    name: 'license',
    choices:[
        "MIT",
        "Mozilla",
        "GPLv2",
        "Apache",
        "GPLv3",
        "None",],
    },
    
];

// TODO: Create a function to write README file
function writeToFile (fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) throw err;
})
}
// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((data) => {
    console.log(JSON.stringify(data,null," "))
    writeToFile("./readmes/README.md",data)
})
};

// Function call to initialize apps
init();