var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mlm123",
  database: "moviePlanner"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// 

app.get("/", function(request, response){
    connection.query("SELECT * FROM movies;", function(err, data){
        if (err) throw err;
        response.render("index", {movies: data})
    });
});


app.post("/", function(request, response){
  connection.query("INSERT INTO movies (movie) VALUES (?)", [request.body.movie], function (err, result){
    if (err) throw err;

    response.redirect("/");
  });
});

app.put("/", function (req, res){
  connection.query("/" function)
})

// Listen
app.listen(PORT, function(){
    console.log("We're Live");
});