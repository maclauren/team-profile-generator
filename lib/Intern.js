// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Intern class constructor + extend employee class constructor 
const Employee = require("./Employee");
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // Call employee constructor
        super (name, id, email); 
        // Define school property
        this.school = school; 
    }

    // Return school
    getSchool () {
        return this.school;
    }

    // Role override employee to intern
    getRole () {
        return "Intern"
    }
}

module.exports = Intern;