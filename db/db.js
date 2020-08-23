const connection = require('./connection.js');

class EmployeeDb {
    constructor(connection){
        this.connection = connection
    }
    viewDepartments() {
        return this.connection.promise().query(
            "SELECT department.id, department.name FROM department;"
        )
    }
    viewRoles() {
        return this.connection.promise().query(
            "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;"
        )
    }
    viewEmployees() {
        return this.connection.promise().query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id;"
        )
    }  
}


module.exports = new EmployeeDb (connection);

