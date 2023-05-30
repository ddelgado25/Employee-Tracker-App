require("console.table");
const inquirer = require("inquirer");
const db = require("./config/connection");

// Prompts user with a main menu lost of choices. User can select option and another function would be called for selected option
const questions = async () => {
    await inquirer.prompt(
        {
          name: "menu",
          type: "list",
          message: "MAIN MENU",
          choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee Role",
            "Exit"
          ],
        })

        .then(function(choice) {
          switch (choice.menu) {
            case "View All Departments":
              allDepts();
              break;
            case "View All Roles":
              allRoles();
              break;
            case "View All Employees":
              allEmployees();
              break;
            case "Add a Department":
              addDept();
              break;
            case "Add a Role":
              addRole();
              break;
            case "Add an Employee":
              addEmployee();
              break;
            case "Update an Employee Role":
              updateEmployee();
              break;
            case "Exit":
              process.exit();
                    
          }
        })
};

// Functiion allows user to view all departments when selected on main menu
function viewAllDepartments() {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.table(res);
        promptUser();
    });
}