// TODO: Write code to define and export the Employee class

// this is going to be our big daddy to all the rest of our classes

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }

  getName() {
    console.log("this getName function is working");
    return this.name;
  }
  getId() {
    console.log("this getId function is working");
    return this.id;
  }
  getEmail() {
    console.log("this getEmail function is working");
    return this.email;
  }
  getRole() {
    console.log(`this getRole function is working and logs ${this.role}`);
    return this.role;
  }
}

module.exports = Employee;

// Question: How do I log this to the console so that I can check that it is doing what I want it to do?

// class Vehicle {
//     constructor(id, numberOfWheels, sound) {
//       this.id = id;
//       this.numberOfWheels = numberOfWheels;
//       this.sound = sound;
//     }

//     printInfo() {
//       console.log(`This vehicle has ${this.numberOfWheels} wheels`);
//       console.log(`This vehicle has an id of ${this.id}`);
//     }
//   }
//   module.exports = Vehicle;
