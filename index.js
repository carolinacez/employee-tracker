const inquirer = require('inquirer');
const db = require('./db/db');
// const { viewRoles } = require('./db');

// const { start } = require('repl');
// const { allowedNodeEnvironmentFlags } = require('process');
require('console.table');


firstQuestion = function(){
inquirer.prompt([
    {
        type: 'list',
        name: 'start',
        message: 'What would you like to do?',
        choices: ['view all departments', 'view all roles', 'view all employees',
        'add department', 'add role', 'add employee', 'update employee role']
    }

])
.then((choice) => {
    switch (choice.start) {
        case "view all departments":
            viewDepartment(); //referencing the function in this file
            break;
        case "view all roles":
            viewRoles();
            break;
    }

})
}

// viewDepartment //reference db.viewalldepartment 

viewDepartment = function() {
    db.viewDepartments()
    .then(([rows]) =>  {
       console.table(rows)
    })
    .then(() => firstQuestion())
}; 
 firstQuestion();
// viewRoles


// addDepartment = function() {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'department',
//             message: 'What department would you like to add?'
//         }
//     ])
//     .then(answer => {

//     })
    
// }
// addRole = function() {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'role',
//             message: 'What role would you like to add?'
//         }
//     ])
//     .then(answer => {

//     })
    
// }

// addEmployee = function() {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'employee',
//             message: 'What employee would you like to add?'
//         }
//     ])
//     .then(answer => {

//     })
    
// }