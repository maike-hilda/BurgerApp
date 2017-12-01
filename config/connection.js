// MySQL connection data
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "test",
    database: "burgers_db"
});

// connect
connection.connect(function(err) {
    if (err) throw err;
    console.log("You have connected to: " + connection.threadId);
});

// export connection
module.exports = connection;