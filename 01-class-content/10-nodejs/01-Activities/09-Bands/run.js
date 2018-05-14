var bands = require("./bands.js")

var parameter = process.argv[2]

if (parameter === "jazz"){
    console.log("A jazz artist is "+bands.jazz);
} else if (parameter === "chanson"){
    console.log("A chanson artist is "+bands.chanson)
} else if (parameter === "afrobeat"){
    console.log("An afrobeat artist is "+bands.afrobeat)
} else if (parameter == undefined){
    console.log(bands)
}