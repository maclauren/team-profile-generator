// TODO: Write code to define and export the Employee class
// Employee Class Constructor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // Return name from user input
    getName () {
        return this.name;
    }

    // Return ID from user input
    getId () {
        return this.id;
    }   

    // Return email from user input
    getEmail () {
        return this.email;
    }

    // Return role type
    getRole () {
        return 'Employee'; 
    }
};

// Export
module.exports = Employee; 