var fs = require("fs");

var lotto = Math.floor((Math.random()*10 +1));

var a = process.argv[2];
var b = parseFloat(process.argv[3]);
var c = parseFloat(process.argv[4]);

function bank (newTotal) {
    fs.appendFile("bank.txt", ", "+newTotal, function (err){
        if(err){
            return console.log(err)
        } else {console.log(newTotal)}
    })
}

fs.readFile("bank.txt", "utf8", function (error, data){
    var list = data.split(",");
    var total = parseFloat(list[list.length-1]);
    

    if (a ==="total"){
        console.log(total)
    }

    if (a ==="deposit"){
        var newTotal= total+b;
        bank(newTotal);
    }

    if (a==="withdraw"){
        var newTotal= total-b;
        bank(newTotal);
    }

    if (a==="lotto"){
        var newTotal= total-5;
        bank(newTotal);
        if (b===lotto){
            newTotal= total+500
            bank(newTotal)
        }
    }

})