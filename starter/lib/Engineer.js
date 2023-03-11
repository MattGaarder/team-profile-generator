// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
// Question: Is it possible to not have to repeat these parameters?
    this.github = github;
    this.role = "Engineer";
  }

  getRole() {
    return this.role;
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
