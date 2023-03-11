
const Employee = require("./lib/Employee");

const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const prompt = inquirer.createPromptModule();

const path = require("path");
const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const { info } = require("console"); // I'm not sure what this is for 

// const render = require("./src/page-template.js"); // this is the equivalent to my generateMarkdown.js file in the readme project
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

const managerQuestions = require("./employeeQuestions");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


// empty array where I can pust generated employees
const employees = [];



// potential code from Dan:



const manager = new Manager("John Doe", 123, "johndoe@example.com", "A123");

console.log(manager.getRole()); 
console.log(manager.getOfficeNumber());

prompt(managerQuestions).then(response => {
    const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.number,
    );
    console.log(manager);
    employees.push(manager);
    promptForNextEmployee();
});

const employee = new Employee('John Doe', '123', 'john.doe@example.com', '555-1234');
employee.getId();

/*
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

*/