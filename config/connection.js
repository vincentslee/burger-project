// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burger_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

/* connection.query("SELECT * FROM BURGERS", function(err, res) {
  if (err) throw err;
  console.table(res);
}); */

// Export connection for our ORM to use.
module.exports = connection;