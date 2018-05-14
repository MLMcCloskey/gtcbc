var fs = require('fs');
var moment = require('moment');
var UserSearch = require('../13-UserSearch/userSearch.js')

var WeatherAdmin = () =>
{
    this.getData = function(){
        fs.readFile("log.txt", "utf8", function(error, data){
            console.log(data);
        })
    }
    this.newUserSearch = function(name, location){
        var newUserSearch = new UserSearch(name, location);
        var logtxt = 
            "\nName: "+newUserSearch.name+
            " Location: "+newUserSearch.location+
            " Date: "+moment(newUserSearch.date).format("MM-DD-YYYY");

        fs.appendFile("log.txt", UserSearch.name, function(err){
            if (err) throw err;
        });

        newUserSearch.getWeather();
    }; 
}
module.exports = WeatherAdmin;