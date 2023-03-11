
const Employee = require("./lib/Employee");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const { info } = require("console"); // I'm not sure what this is for 

const render = require("./src/page-template.js"); // this is the equivalent to my generateMarkdown.js file in the readme project
// eventually we will use fs to write our HTML with the promise from our inquirer prompts 



/*
// function to initialize program
function init() {
    inquirer.prompt(heya).then(answer => {
        console.log(answer);
        fs.writeFile("./folder1/README.md", generateMarkdown(answer), err => console.log(err))
    })   // the order of writing with fs is /filename, /something to write to file, /the encoding 
}
*/

const employeeQuestions = require("./employeeQuestions");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


// empty array where I can pust generated employees
const employees = [];



// potential code from Dan:




// this is an array where I am going to push the information for my employees 

inquirer.createPromptModule([{
    // manager questions
}]).then(response => [
    // populate manager info
    // promptForNextEmployeee();
]);

const promptForNextEmployee = () => {
    inquirer.prompt([{
        //choice of 3
    }]).then(response => {
        // if engineer
        //  promptForEngineer
        // else if intern
        //  promptForIntern
        // else 
        //  use the functionality from page-template to generate the team
    })
};

const promptForEngineer = () => {
    inquirer.prompt([{
        // engineer questions
    }]).then(response => {
        // add new engineer to employees array
        // promptForNextEmployee
    })
};

const promptForIntern = () => {
    inquirer.prompt([{
        // intern questions
    }]).then(response => {
        // add new intern to employees array
        // promptForNextEmployee
    })
};

const buildPage = () => {

}
