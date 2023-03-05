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


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Manager prompts
function addManager() {
    console.log("Build your team profile");
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Enter the managers name",
            validate: answer =>  {
                if (answer !== "") {
                    return true;
                }
                return "Name cannot be left empty";
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "Enter the managers ID",
            validate: answer =>  {
                if (answer !== "") {
                    return true;
                }
                return "ID cannot be left empty";
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Enter the managers email",
            validate: answer =>  {
                if (answer !== "") {
                    return true;
                }
                return "Email cannot be left empty";
            }
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "Enter the managers office number",
            validate: answer =>  {
                if (answer !== "") {
                    return true;
                }
                return "Office number cannot be left empty";
                }
            }
    ])
    
    .then(answers =>{
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamInput.push(manager);
        idInput.push(answers.managerId);
        addTeam();
    });
}

// addTeam prompts

function addTeam() {

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