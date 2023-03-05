// Constructors
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Dependencies

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Paths

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// Add team array
const teamArray = []; 


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Manager prompts
const addManager() => {
    console.log("Build your team profile");
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Enter the managers name",
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log ("Name cannot be left empty")
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "Enter the managers ID",
            validate: answer =>  {
                if (isNaN(answer)) {
                    console.log ("ID cannot be left empty")
                    return false;
                } else {
                return true;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Enter the managers email",
            validate: managerEmail =>  {
                valid = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/".test(managerEmail)
                if (valid) {
                    return true;
                } else {
                    console.log ("Email cannot be left empty")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "Enter the managers office number",
            validate: answer =>  {
                if (isNan(answer)) {
                    console.log ("Office number cannot be left empty")
                    return false;
                } else {
                return true;
                }
                }
            }
    ])
    
    .then(answers =>{
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
        idInput.push(answers.managerId);
        addTeam();
    });
}

// addTeam prompts
const addTeam() => {
    console.log("Add other members to your team");
    inquirer.prompt([
        {
            type: "list",
            name: "roleOption",
            message: "Choose a role to add next",
            choices: [
                "Engineer",
                "Intern",
                "Finish building team"
            ]
        }
    ])
    
    .then(userInput => {
        switch (userInput.roleOption) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                generateHTML();
        }
    });
}

// Add engineer prompts
const addEngineer() => {
    console.log("Add your engineer profile");
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Enter the engineers name",
            validate: answer =>  {
                if (answer !== "") {
                    return true;
                }
                return "Name cannot be left empty";
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "Enter the engineers ID",
            validate: answer =>  {
                if (answer !== "") {
                    return true;
                }
                return "ID cannot be left empty";
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Enter the engineers email",
            validate: answer =>  {
                if (answer !== "") {
                    return true;
                }
                return "Email cannot be left empty";
            }
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "Enter the engineer's GitHub",
            validate: answer =>  {
                if (answer !== "") {
                    return true;
                }
                return "GitHub cannot be left empty";
            }
        }
    ])
    
    .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
        teamArray.push(engineer)
        idInput.push(answers.engineerId);
        addTeam();
    });
}

// Add intern prompts
const addIntern() => {
    console.log("Add your intern profile");
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Enter the intern's name",
            validate: answer =>  {
                if (answer !== "") {
                    return true;
                }
                return "Name cannot be left empty";
            }
        },
        {
            type: "input",
            name: "internId",
            message: "Enter the interns ID",
            validate: answer =>  {
                if (answer !== "") {
                    return true;
                }
                return "ID cannot be left empty";
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "Enter the interns email",
            validate: answer =>  {
                if (answer !== "") {
                    return true;
                }
                return "Email cannot be left empty";
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "Enter the interns school",
            validate: answer =>  {
                if (answer !== "") {
                    return true;
                }
                return "School cannot be left empty";
            }
        }
    ]). then(answers =>{
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern)
        idInput.push(answers.internId);
        addTeam();
    });
}