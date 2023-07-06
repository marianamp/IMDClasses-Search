// Include the MySQL module, which allows to use the database in MySQL.
const mysql = require('mysql');

// Configure the database.
const connection = mysql.createConnection({
    database: 'data',
    host: "127.0.0.1",
    user: "root",
    password: "8061",
    port: 3306
  });
  
connection.connect(function(error) {
    if (error){ 
        console.error('Connection Error',error);
        return;
    }
    console.log("Connected!");
});

// Export the connection as a module.
module.exports = connection;

