// Keep these lines; they're important!
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
let myTeam = [];
const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");

function init() {
  inquirer
  .prompt([ 
    { 
      type : "input",
      message : "What is your name?",
      name : "name",
    },
    { 
      type : "input",
      message : "What is your id?",
      name : "id",
    },
    { 
      type : "input",
      message : "What is your email?",
      name : "email",
    },
    { 
      type : "list",
      message : "What is your role?",
      name : "role",
      choices : ["Manager","Engineer","Intern"],
    },

  ])
  .then(answers => {
    roleSelection(answers);
  });
}
function roleSelection(data) {
  let role = data.role;
  let selectClass;
  if(role === "Manager") {
    role = "Office Number"
    selectClass = Manager
  }else if (role === "Engineer") {
    role = "Github Username"
    selectClass = Engineer
  }else {
    role = "School"
    selectClass = Intern
  } 
  inquirer
  .prompt([
    /* Pass your questions in here */
    { 
      type : "input",
      message : "Enter your " + role,
      name : "unique",
    },
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    myTeam.push(new selectClass(data.name, data.id, data.email, answers.unique))
    console.log(myTeam);
  });
}
init();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!

