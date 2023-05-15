// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");



function checkInput(input){
    if(input != ""){
        return true
    }
    return "Input invalid try again"
}



// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title',
    validate:checkInput()
    },
    {
    type: 'input',
    message: 'Enter a description for your project',
    name: 'description',
    validate:checkInput()
    },
    {
    type: 'input',
    message: 'Enter installation instructions for your project',
    name: 'installation',
    validate:checkInput()
    },
    {
    type: 'input',
    message: 'Enter usage information for your project',
    name: 'usage',
    validate:checkInput(),
    },
    {
    type: 'input',
    message: 'Enter contribution guidelines for your project',
    name: 'contribution',
    validate:checkInput(),
    },
    {
    type: 'input',
    message: 'Enter test instructions for your project',
    name: 'test',
    validate:checkInput(),
    },
    {
    type: 'list',
    message: 'Select a license',
    name: 'license',
    choices:[
        "MIT",
        "mit",
        "mit",
        "mit",
        "mit",
        "mit",],
    validate:checkInput(),
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((data) => {
console.log(data)
})
};

// Function call to initialize app
init();
