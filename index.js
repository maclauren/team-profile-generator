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
const { throwError } = require("rxjs");

// Add team array
// added prompt to construct and then get
class TeamPrompt {
  constructor() {
    this.teamArray = [];
  }
  getTeamArray() {
    return this.teamArray;
  }

  // TODO: Write Code to gather information about the development team members, and render the HTML file.

  // Manager prompts
  questions() {
    console.log("Build your team profile");
    inquirer
      .prompt({
        type: "list",
        name: "employeeRole",
        message: "Pick the role you want to add to the team",
        choices: ["Manager", "Engineer", "Intern", "I am done adding roles"],
      })
      .then(({ employeeRole }) => {
        if (employeeRole === "Manager") {
          inquirer
            .prompt([
              {
                type: "input",
                name: "managerName",
                message: "Enter the managers name",
                validate: (answer) => {
                  if (answer) {
                    return true;
                  } else {
                    console.log("Name cannot be left empty");
                    return false;
                  }
                },
              },
              {
                type: "input",
                name: "managerId",
                message: "Enter the managers ID",
                validate: (answer) => {
                  if (isNaN(answer)) {
                    console.log("ID must be a number");
                    return false;
                  } else {
                    return true;
                  }
                },
              },
              {
                type: "input",
                name: "managerEmail",
                message: "Enter the managers email",
                validate: (email) => {
            if (
              /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
                email
              )
            ) {
              return true;
            }
            return `Email address must be valid`;
          },
              },
              {
                type: "input",
                name: "managerOfficeNumber",
                message: "Enter the managers office number",
                validate: (answer) => {
                  if (isNaN(answer)) {
                    console.log("Office number must be a number");
                    return false;
                  } else {
                    return true;
                  }
                },
              },
            ])

            // Put manager inputs into teamArray
            .then((answers) => {
              const newManager = new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.managerOfficeNumber
              );
              this.teamArray.push(newManager);
              // Return to questions
              this.questions();
            });

          // Add team prompts
        } else if (employeeRole === "Engineer") {
          console.log("Add engineer profile");
          inquirer
            .prompt([
              {
                type: "input",
                name: "engineerName",
                message: "Enter the engineers name",
                validate: (answer) => {
                  if (answer !== "") {
                    return true;
                  }
                  return "Name cannot be left empty";
                },
              },
              {
                type: "input",
                name: "engineerId",
                message: "Enter the engineers ID",
                validate: (answer) => {
                  if (answer !== "") {
                    return true;
                  }
                  return "ID cannot be left empty";
                },
              },
              {
                type: "input",
                name: "engineerEmail",
                message: "Enter the engineers email",
                validate: (answer) => {
                  if (answer !== "") {
                    return true;
                  }
                  return "Email cannot be left empty";
                },
              },
              {
                type: "input",
                name: "engineerGithub",
                message: "Enter the engineer's GitHub",
                validate: (answer) => {
                  if (answer !== "") {
                    return true;
                  }
                  return "GitHub cannot be left empty";
                },
              },
            ])
            // Put manager inputs into teamArray
            .then((answers) => {
              const newEngineer = new Engineer(
                answers.engineerName,
                answers.engineerId,
                answers.engineerEmail,
                answers.engineerGitHub
              );
              this.teamArray.push(newEngineer);
              // Return to questions
              this.questions();
            });
        } else if (employeeRole === "Intern") {
          console.log("Add your intern profile");
          inquirer
            .prompt([
              {
                type: "input",
                name: "internName",
                message: "Enter the intern's name",
                validate: (answer) => {
                  if (answer !== "") {
                    return true;
                  }
                  return "Name cannot be left empty";
                },
              },
              {
                type: "input",
                name: "internId",
                message: "Enter the interns ID",
                validate: (answer) => {
                  if (answer !== "") {
                    return true;
                  }
                  return "ID cannot be left empty";
                },
              },
              {
                type: "input",
                name: "internEmail",
                message: "Enter the interns email",
                validate: (answer) => {
                  if (answer !== "") {
                    return true;
                  }
                  return "Email cannot be left empty";
                },
              },
              {
                type: "input",
                name: "internSchool",
                message: "Enter the interns school",
                validate: (answer) => {
                  if (answer !== "") {
                    return true;
                  }
                  return "School cannot be left empty";
                },
              },
              //
            ])
            .then((answers) => {
              const newIntern = new Intern(
                answers.internName,
                answers.internId,
                answers.internEmail,
                answers.internSchool
              );
              this.teamArray.push(newIntern);
              // Return to questions
              this.questions();
            });
        } else if (employeeRole === "I am done adding roles") {
          const createTeamHtml = () => {
            // if (err) throwError;
            // else 
            if (!fs.existsSync(OUTPUT_DIR)) {
              fs.mkdirSync(OUTPUT_DIR);
            }
            fs.writeFileSync(outputPath, render(this.teamArray), "utf-8");
            console.log(
              "Team complete. Find it in the output folder under team.html"
            );
          };
          createTeamHtml()
        }
      });
  }
}

// Runs prompts
const teamPrompt = new TeamPrompt();
teamPrompt.questions();

// TUTOR INPUT BELOW - Tutor was explaining to me how to build the inquirer functions I needed

//Export
// module.exports = prompt
// inquirer.prompt(

//     [
//         {
//             type: "input",
//             name: "manName",
//             message: "What is your manager's name?"
//         },
//         {
//             type: "input",
//             name: "manId",
//             message: "What is your manager's ID?"
//         },
//         {
//             type: "input",
//             name: "manEmail",
//             message: "What is your manager's Email?"
//         },
//         {
//             type: "input",
//             name: "manOfficeNum",
//             message: "What is your manager's office number?"
//         },
//         {
//             type: "list",
//             name: "role",
//             choices: ["Manager", "Engineer", "Intern"],
//             message: "What is your role?"
//         },
//     ]
// )
// .then(answers => {
//     const results = [];
//     const manager = new Manager(
//         answers.manName,
//         answers.manId,
//         answers.manEmail,
//         answers.manOfficeNum,
//         answers.role,
//     )
//     results.push(manager)
//     console.log(render(results));
// })

//npmjs.com


// const x = val => console.log(`My name is ${val}`)

// x("Dennis Itua")