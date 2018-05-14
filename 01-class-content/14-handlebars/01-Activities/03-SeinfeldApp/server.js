var express = require("express");
var mysql = require("mysql");

var app = express();
var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mlm123",
    database: "seinfeld_db",
    port: 3306
});

connection.connect(function (err){
    if (err) throw err;
    console.log("Connected!")
})

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "cast"));
});

app.get("/coolness-chart", function(req, res){
    res.sendFile(path.join(__dirname, "coolness"));
});

app.get("/attitude-chart/:att", function(req, res){
    connection.query("SELECT * FROM actors WHERE Attitude = ?", [req.params.att], function (err, result){
        if (err) throw err;
        console.log(req.params.att);
        var html = `<h1>Actors with an attitude of ${req.params.att}<h1>`;
        html += "<ul>";
        for (i = 0; i < result.length; i++){
            html+=`<li><p>ID: ${result[i].id}</p>`;
            html += `<p>Name: ${result[i].Name}</p></li>`;
        }

        html+= "</ul>";
        res.send(html);
    });
});


app.listen(PORT, function(){
    console.log("Listening on port: "+PORT)
})