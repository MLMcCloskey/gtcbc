var http = require ("http");
var fs = require("fs");

var PORT = 8080;
var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});

function handleRequest(request, response){
    var path = request.url;

    switch (path) {
        case "/":
            return displayRoot(path, request, response);

        case "/foods":
            return displayFoods(path, request, response);

        
        case "/movies":
            return displayMovies(path, request, response);

        
        case "/frameworks":
            return displayFrame(path, request, response);

            
        default:
            return display404(path, request, response);
    }
}

function displayRoot(url, request, response){
    var myHTML = "<html>"+
                "<body><h1>Welcome To My Page!</h1>"+
                "<h2>These are a few of my favorite things.</h2>"+
                " <a href='/foods'>Foods</a> "+
                " <a href='/movies'>Movies</a> "+
                " <a href='/frameworks'>Frameworks</a>"+
                "</body></html>";

    response.writeHead(200, {"Content-Type": "text/html"});

    response.end(myHTML);
}

function displayFoods(url, request, response){
    var myHTML = "<html><body>"+
                "<h2>I like to eat the following things</h2>"+
                "<h5>Babaganoush</h5>"+
                "<h5>Beans</h5>"+
                "<h5>Human Souls</h5>"+
                "<br><a href=../>Home</a>"+
                "</body></html>";

    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(myHTML);
}

function displayMovies(url, request, response){
    var myHTML = "<html><body>"+
                "<h2>I like these movies</h2>"+
                "<h5>Nacho Libre</h5>"+
                "<h5>2001: A Space Odyssey</h5>"+
                "<h5>It's Such A Beautiful Day</h5>"+
                "<br><a href=../>Home</a>"+
                "</body></html>";

    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(myHTML);
}

function displayFrame(url, request, response){

    fs.readFile(__dirname + "/frameworks.html", function (error, data){
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data + "<br><a href=../>Home</a>");
    })
    // var myHTML = "<html><body>"+
    //             "<h2>I like to eat the following things</h2>"+
    //             "<h5>Babaganoush</h5>"+
    //             "<h5>Beans</h5>"+
    //             "<h5>Human Souls</h5>"+
    //             "</body></html>";

    // response.writeHead(200, {"Content-Type": "text/html"});
    // response.end(myHTML);
}