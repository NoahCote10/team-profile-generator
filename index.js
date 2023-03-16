// accesses all necessary directories
const generateHtml = require("./src/generateHtml")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// accesses node modules
const fs = require("fs");
const inquirer = require("inquirer");

// create an array to hold all info collected
const teamArray = [];

// manager questions
const addManager = () => {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is this manager's name?",
        },
        {
          type: "input",
          name: "id",
          message: "what is this manager's ID number?",
        },
        {
          type: "input",
          name: "email",
          message: "what is this manager's email?",
        },
        {
          type: "input",
          name: "office",
          message: "what is this manager's office number?",
        },
      ])
      // takes inputs and adds it to the object
      .then((managerInput) => {
        const { name, id, email, office } = managerInput;
        const manager = new Manager(name, id, email, office);

        teamArray.push(manager);
        console.log(manager);
      })
  );
};

// employees question
const addEmployee = () => {
  console.log(`Let's add some team members!`);

  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is this employee's role?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is this employee's name?",
      },

      {
        type: "input",
        name: "id",
        message: "Please enter this employee's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter this employee's email.",
      },
      {
        when: input => {
            return input.role === 'Engineer'
        },
        type: 'input',
        message: "Please enter the employee's GitHub username.",
        name: 'github',
    },
    {
        when: input => {
            return input.role === 'Intern'
        },
        type: 'input',
        message: "Please enter the intern's school.",
        name: 'school',
    },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add any more team members?",
        default: false,
      },
    ])
    .then((employeeData) => {
      // data for employee types

      let { name, id, email, role, github, school, confirmAddEmployee } =
        employeeData;
      let employee;
      // this is checking the information based on the user input
      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);

        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);

        console.log(employee);
      }

      teamArray.push(employee);

      if (confirmAddEmployee) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    });
};

// this is writing the file with the info from the user
const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your team profile has been succesfully created!!");
    }
  });
};
// invoking all of the functions with the info from the user
addManager()
  .then(addEmployee)
  .then((teamArray) => {
    return generateHtml(teamArray);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
