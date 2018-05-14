var mysql = require('mysql');

var a = process.argv[2];
var query = process.argv.slice(3, process.argv.length).join(' ');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mlm123",
    database: "topSongs_db"
})

function songsBy(){   
    connection.query('SELECT song FROM hits WHERE artist IN ('+'"'+query+'"'+')', function(error, response){
        if (error) throw error;
        console.log(response);
        connection.end()
    })   
}

function songSearch(){
    connection.query('SELECT * FROM hits WHERE song IN ('+'"'+query+'"'+')', function(error, response){
        if (error) throw error;
        console.log(response);
        connection.end()
    })
}

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected as id: "+connection.threadId+"\n");
    if (a === "songs-by"){
        songsBy()
    }
    if (a === "song-search"){
        songSearch()
    }
})