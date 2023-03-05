// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Engineer Class Constructor
class Engineer extends Employee {
        // Add github property
    constructor (name, id, email, github) {
        // Call employee constructor
        super (name, id, email);
        // Define github property
        this.github = github; 
    }

    // Return github
    getGithub () {
        return this.github;
    }

    // Role override employee to engineer
    getRole () {
        return "Engineer"
    }
}