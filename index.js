const inquirer = require('inquirer');
const db = require('./db/db');
const { connection } = require('./db/db');
const { prompts } = require('inquirer');
const { type } = require('os');
// const { viewEmployees } = require('./db/db');
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
            viewRole();
            break;
        case "view all employees":
            viewEmployee();
            break;
        case "add department":
            addDepartment();
            break;
        case "add role":
            addRole();
            break;
        case "add employee": 
            addEmployee();
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

viewRole = function() {
    db.viewRoles()
    .then(([rows]) =>  {
       console.table(rows)
    })
    .then(() => firstQuestion())
}; 
viewRole = function() {
    db.viewRoles()
    .then(([rows]) =>  {
       console.table(rows)
    })
    .then(() => firstQuestion())
}; 
viewEmployee = function() {
    db.viewEmployees()
    .then(([rows]) =>  {
       console.table(rows)
    })
    .then(() => firstQuestion())
};


 
addDepartment = function(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'department', 
            message: 'What department would you like to add?'
        }
    ])
    .then(({department}) => {
        const query = connection.query(
            'INSERT INTO department SET ?',
            {
                name: department
            },
            function (err, res) {
                if(err) throw err;
               console.table(department);
            }
        )
    })
    .then(()=> viewDepartment())
}
addRole = function(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'role', 
            message: 'What role would you like to add?'
        },
        {
            type: 'input',
            name: 'salaryNumber',
            message: 'What is the salary for the role?'
        },
        {
            type: 'input',
            name: 'departmentId',
            message: 'What is the department Id?'

        }
    ]) 
    .then(({role, salaryNumber, departmentId}) =>{
        const query = connection.query(
            'INSERT INTO role SET ?',
            {
                title: role,
                salary: salaryNumber,
                department_id: departmentId
            },
            function(err, res) {
                if (err) throw err;
                console.log(role);
            }
        )
    })
    .then(() => viewRole())
};

addEmployee = function() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Whats the employees first name?'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'What is the employees last name?'
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'What is the employees role id?'
        }
    ]) .then (({firstName, lastName, roleId}) => {
        const query = connection.query(
            'INSERT INTO employee SET ?',
            {
                first_name: firstName,
                last_name: lastName,
                role_id: roleId
            }
        )
    })
    .then (() => viewEmployee())
}

// addLastName = function() {
//     inquirer.prompt([
//         {
//             type:'input',
//             name:'firstName',
//             message: 'Whats the employees last name?'
//         }
//     ])
//     .then (({lastName}) => {
//         const query = connection.query(
//             'INSERT INTO employee SET ?',
//             {
//                 last_name: lastName
//             }
//         )
//     })
//     console.log(lastName)
//     // .then(() => viewEmployee()) 

    
// }
    
//     .then((firstName)=>{
//         inquirer.prompt([
//             {
//                 type: 'input',
//                 name: 'lastName',
//                 message:'Whats the employees last name?'
//             }
//         ]) .then (({lastName}) =>{
//             const query = connection.query(
//                 'INSERT INTO employee SET ?',
//                 {
//                     first_name: firstName,
//                     last_name: lastName
//                 }
//             )
//         })
//     })
//     .then((firstName, lastName) => {
//         const query = connection.query (
//             'INSERT INTO employee SET ?',
//             {
//                 first_name: firstName,
//                 last_name: lastName,
//                 role_id: 1
//             }
//         )
//     })
//     .then(() => viewEmployee())
// }
//     .then(() => addLastName(firstName))
    

// addLastName = function(firstName) {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'lastName',
//             message: 'Whats the employess first name?'
//         }
//     ])
// .then (({firstName, lastName})=>{
//     'INSERT INTO employee SET ?, ?, ?',
//     {
//         first_name: firstName,
//         last_name: lastName, 
//         role_id: 1
//     }
// })
// .then(() => viewEmployee())
// }
// }

firstQuestion();


// addDepartment = function() {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'department',
//             message: 'What department would you like to add?'
//         }
//     ])
//     .then((answer) => {
//         // const department = new Department (answer.name)
//         db.addDepartment(answer)
//     })
//     .then(([answer]) => {
//         console.table(answer)
//     })
//     .then(() => firstQuestion())
// };



    
// }
// addRole = function() {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'role',
//             message: 'What role would you like to add?'
//         }
//     ])
//     .then((answer) => {
//         db.viewRoles(answer);

//     })
//     .then((row) => {
//         console.table(row)
//     })
//     .then(() => firstQuestion())
    
// }
// firstQuestion();

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