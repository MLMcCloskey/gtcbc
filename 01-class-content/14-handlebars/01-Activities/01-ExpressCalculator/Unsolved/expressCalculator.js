// Dependencies
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

  // TODO parse out the variables from the request
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers
// app.get("/api/calculator", function(req, res){
//   return res.json(calculator);
// });

app.get("/:operation/:integer1/:integer2", function(req, res){
  var operation = req.params.operation;
  var integer1 = parseInt(req.params.integer1);
  var integer2 = parseInt(req.params.integer2);

  console.log(res);

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
  // BONUS - How could you use * + etc. inside the app.get()?
  case "add": result = integer1 + integer2;
    // Add your logic here. Pun intended.
    break;
  case "subtract":result = integer1 - integer2;
    // Subtract logic
    break;
  case "multiply":result = integer1 * integer2;
    // Multiply
    break;
  case "divide":result = integer1 / integer2;
    // Divide
    break;
  default:
    // Handle anything that isn't specified
    result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
