var inquirer = require('inquirer');
var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
   port: 3306,
   user: 'root',
   password: 'Ahmed123$',
   database: 'Bamazon'
});

	connection.connect(function(err) {
     if (err) {
     throw err;
 }
     console.log('connected as id' + connection.threaId);
     	runSearch();
 });

connection.query('SELECT * FROM products', function(err, data) {
    if (err) throw err;
    console.log(data);
});
connection.end();