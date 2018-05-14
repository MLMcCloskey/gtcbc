var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    password: "mlm123",
    database: "playlist_db"
});

connection.connect(function(error, data, body){
    if (error) throw error;
    console.log ("connected as id " + connection.threadID);
    // console.log (data);
    // afterConnection();
    connection.query("SELECT * FROM playlist", function(error, response) {
        if (error) throw error;
        console.log(response);
    connection.end();
    })
});

// function afterConnection() {
//     connection.query("SELECT * FROM playlist", function(error, response) {
//       if (error) throw error;
//       console.log(response);
//     //   connection.end();
//     });
//   }