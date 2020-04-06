const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true });

nightmare
    .goto("https://www.google.com/")
    // .type("div#search_box form [name= 'query'] input [name= 'search']", "nightmare js review")
    .click(".NKcBd")
    // .wait(".r")
    .evaluate(function(){
        return document.querySelector(".a").href;
    })
    .end()
    .then(function(result){
        console.log(result);
    })
    .catch(function(error){
        console.error("Search failed:", error);
    });