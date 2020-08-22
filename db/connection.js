const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Almost1993!Love2012!',
    database: 'employee_db'
    
});

connection.connect(function(err){
 if(err) throw err;
 console.log('Connected to employee_db!')
});

module.exports = connection;