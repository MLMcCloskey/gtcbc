var fs = require("fs");


fs.readFile("Unsolved/best_things_ever.txt", "utf8", function(error, data){
    var list = data.split(",");
    if(error){
        return console.log(error)
    }

    for (i=0; i<list.length; i++){
    console.log(list[i])
    }
    // data.split("")
});