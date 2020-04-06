// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
app.get("/api/all", function(req, res){
  connection.query("SELECT * FROM chirp", function(err, result){
    var html = "<h1>When I chirp shawty chirp back</h1>";
    console.log(result[0].body);
    html += `<p>${result[0].author}</p>`;
    html += `<p>${result[0].chirp}</p>`;
    html += `<p>${result[0].ts}</p>`;
    html += "<hr>";
    res.send(html);
  })
})

  // Add a chirp


};
