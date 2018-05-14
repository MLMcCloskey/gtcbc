var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mlm123",
    database: "gb_db"
});

connection.connect(function (error, response) {
    if (error) throw error;
    console.error;
    afterConnection();
    // connection.end();
});

function afterConnection() {
    connection.query("SELECT * FROM bay", function (error, response) {
        if (error) throw error;
        console.log(response);
        inquirer.prompt({
            type: "list",
            name: "prompt",
            message: "Would you like to bid on an item/service or post a new one?",
            choices: ["BID", "POST"]
        }).then(function (answer) {
            if (answer.prompt === "POST") {
                post()
            } else {bid()}
        });
    })
}

function post() {
    inquirer.prompt([{
        type: "list",
        name: "postType",
        message: "What type of post would you like to make?",
        choices: ["Item", "Task", "Job", "Project"]
    },
    {
        type: "input",
        name: "name",
        message: "What would you like post?"
    },
    {
        type: "input",
        name: "price",
        message: "Where shall we start the bid? (dollar amount)"
    }]).then(function (answer) {
        connection.query(
            "INSERT INTO bay SET ?",
            {
                post: answer.name,
                kind: answer.postType,
                bid: answer.price
            },
            function(error, response){
                if (error) throw error;
                console.log(response);
                connection.end();
            }
        )
    })
}

function bid(){
    var posts = connection.query("SELECT post FROM bay");
    inquirer.prompt([{
        name: "bidSelection",
        message: "What would you like to bid on?",
        type: "list",
        choices: posts
    }])
}