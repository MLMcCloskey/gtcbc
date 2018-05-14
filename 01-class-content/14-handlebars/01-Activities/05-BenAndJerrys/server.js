const express = require ("express");
const handlebars = require ("express-handlebars");

const app = express();
const PORT = 8080;

app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var flavors = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
  ];

app.get("/icecreams", function (req, res){
    res.render("index", {icecreams: flavors});
});

app.get("/icecream/:name", function(req, res){
    var name = req.params.name;
    for (i = 0; i < flavors.length; i++){
        if (flavors[i].name === name){
        res.render("index", {icecreams: flavors.name})
        }
    }
})


app.listen(PORT, function(){
    console.log("Listening");
});