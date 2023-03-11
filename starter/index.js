const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const prompt = inquirer.createPromptModule();

const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "matt-sample.html");

// const { info } = require("console"); // I'm not sure what this is for 

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

const questions = require("./employeeQuestions");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


// empty array where I can pust generated employees
const employees = [];



// potential code from Dan:



// const manager = new Manager("John Doe", 123, "johndoe@example.com", "A123");

// console.log(manager.getRole()); 
// console.log(manager.getOfficeNumber());

prompt(questions.forManager).then(response => {
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

// const employee = new Employee('John Doe', '1239', 'john.doe@example.com', '555-1234');
// console.log(employee.getId());

console.log(questions.nextEmployee);

const promptForNextEmployee = () => {
    inquirer.prompt(questions.nextEmployee).then(response => {
        console.log(response);
        if (response.employeeType === "Engineer") {
            promptForEngineer();
        } else if (response.employeeType === "Intern") {
            promptForIntern();
        } else {
            console.log("will call the build page function here");
            buildPage();
        }
    })
};



const promptForEngineer = () => {
    inquirer.prompt(questions.aboutEngineer).then(response => {
        const engineer = new Engineer(
            response.name,
            response.id,
            response.email,
            response.github,
        );
        console.log(engineer);
        employees.push(engineer);
        promptForNextEmployee();
    })
};



const promptForIntern = () => {
    inquirer.prompt(questions.aboutIntern).then(response => {
        const intern = new Intern(
            response.name,
            response.id,
            response.email,
            response.school,
        );
        console.log(intern);
        employees.push(intern);
        promptForNextEmployee();
    })
};



const buildPage = () => {
    fs.writeFile(outputPath, render(employees), (err) =>
    err ? console.error(err) : console.log("The page was successfully created!"))
};

