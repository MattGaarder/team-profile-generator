const forManager = [
    {
        message: "Please enter your name",
        name: "name",
        type: "input",
    },
    {
        message: "Please enter your ID?",
        name: "id",
        type: "input",
    },
    {
        message: "Please enter your email",
        name: "email",
        type: "input",
    },
    {
        message: "Please enter your work number",
        name: "number",
        type: "input",
    },
];

const nextEmployee = [
    {
        type: "list",
        name: "employeeType",
        message: "Please select the employee you would like to add",
        choices: ["Engineer", "Intern", "Done"],
    }
]

const aboutEngineer = [
    {
        type: "input",
        name: "name",
        message: "Please enter the name of the engineer",
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the engineer's ID",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the engineer's email address",
    },
    {
        type: "input",
        name: "github",
        message: "Please enter the engineer's GitHub username",
    },
]

const aboutIntern = [
    {
        type: "input",
        name: "name",
        message: "Please enter the name of the intern",
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the intern's ID",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the intern's email address",
    },
    {
        type: "input",
        name: "school",
        message: "Please enter the intern's school",
    },
]

module.exports = {
    forManager,
    nextEmployee,
    aboutEngineer,
    aboutIntern,
};


/*

"Which type of team memeber would you like to add?"
"Engineer"
"Manager"
"Intern"
"I don't want to add any more team members"


"What is the team manager's name?"
"What is the team manager's ID?"
"What is the team manager's email?"
"What is the team manager's office number?"
"Which type of team memeber would you like to add?"
"Engineer"
"Manager"
"Intern"
"I don't want to add any more team members"

*/