var http = require("http");

var PORTa = 7000;
var PORTb = 7500;

function handleRequest(request, response){
    response.end("IT WORKED!! SERVER" +request.url+ "IS ALIVE");
    // if (PORTa){
        response.end("You're such a smartiepants.")
    // }
}

var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);

server1.listen(PORTa, function(){
    console.log("Server listening on: http://localhost" + PORTa);
    });

server2.listen(PORTb, function(){
    console.log("Server listening on: http://localhost" + PORTb);
    console.log("Now go wash your ass. You stank.")
});