var orm = require("./config/orm.js");

orm.selectWhere("parties", "party_type", "grown-up", function(result){
    var data = result;
    console.log(data); // Data WAS undefined. Why?
});




//problem solved by adding callback function to delay code