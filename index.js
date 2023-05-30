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

        .then(function (choice) {
            switch (choice.menu) {
                case "View All Departments":
                    viewAllDepartments();
                    break;
                case "View All Roles":
                    viewAllRoles();
                    break;
                case "View All Employees":
                    viewAllEmployees();
                    break;
                case "Add a Department":
                    addDepartment();
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

// Function allows user to view all departments when selected on main menu
function viewAllDepartments() {
    db.query("SELECT * FROM department", (err, res) => {
        if (err) throw (err);
        console.table(res);
    });
}

// Function allows user to view all roles when selected on main menu
function viewAllRoles() {
    db.query("SELECT * FROM role", (err, res) => {
        if (err) throw (err);
        console.table(res);
    });
}

// Function allows user to view all employees when selected on main menu
function viewAllEmployees() {
    db.query("SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id", (err, res) => {
      if (err) throw (err);
      console.table(res);
    
    }
  )};

// Function allows user to add a department when selected on main menu
  const addDepartment = async () => {
    await inquirer.prompt (
      {
          type: 'input',
          name: 'newDeptartment',
          message: 'What is the name of the new Department you would like to add?'
  
      })
  
      .then(function(deptartmentName){
        db.query("INSERT INTO department (name) VALUES (?)", [deptartmentName.newDeptartment], (err, res) => {
          if (err) throw (err);
          console.table(res);
  
      })})
  };