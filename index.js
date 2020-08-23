const inquirer = require('inquirer');
const db = require('./db/db');
const { connection } = require('./db/db');
const { prompts } = require('inquirer');
const { type } = require('os');
// const { viewEmployees } = require('./db/db');
// const { viewRoles } = require('./db');

// const { start } = require('repl');
// const { allowedNodeEnvironmentFlags } = require('process');
const cTable = require('console.table');


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
        case "update employee role":
            updateEmployeeRole();
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
    ]) 
    .then (({firstName, lastName, roleId}) => {
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
};

updateEmployeeRole = function(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeList',
            message: 'What is the id of the employee you would like to update?',
            // choices: ['Virginia Woolf', 'Ronald Firbank', 'Piers Gaveston', 'Charles LeRoi', 'Katherine Mansfield', 'Dora Carrington']
        }, 
        {
            type: 'input',
            name: 'roleUpdate',
            message: 'What is the new role id?'
        },
        // {
        //     type: 'input',
        //     name: 'roleOldId',
        //     message: 'What is the employee old role id?'
        // }
    ]) .then (({roleUpdate, employeeList}) => {
        'UPDATE employee SET ? WHERE  ?', 
        [
            {
                role_id: roleUpdate
            },
            {
                id: employeeList
            }
        ]

    }) .then (() => viewEmployee()) 

}
firstQuestion();

