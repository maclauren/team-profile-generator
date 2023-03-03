// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// Manager class constructor + extend employee class constructor 
class Manager extends Employee {
    // Add officeNumber property
    constructor (name, id, email, officeNumber) {
        // Call employee constructor
        super (name, id, email); 
        // Define officeNumber property
        this.officeNumber = officeNumber; 
    }

    // Return officeNumber
    getOfficeNumber () {
        return this.officeNumber;
    }

    // Role override employee to manager
    getRole () {
        return "Manager"
    }
}