// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
};

module.exports = Manager;




/*

const Shape = require("./shape");

class Circle extends Shape {
  constructor(radius) {
    const area = radius*radius*3.14;
    const perimeter = 2*radius*3.14;
    // "super" refers to the constructor of the extended class
    // in this case, super is the constructor for the parent class "Shape"
    super(area, perimeter);
    this.radius = radius;
  }
}

const circle = new Circle(10);
circle.printInfo();

module.exports = Circle 

*/