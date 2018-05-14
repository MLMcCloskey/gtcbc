// import { Module } from 'module';

var weather = require('weather-js');

function UserSearch(name, location){
    this.name = name;
    this.location= location;
    this.date = Date.now();
    this.getWeather = function(){
        weather.find({
            search: location,
            degreeType: "F",
        }, function(err, result){
            if (err) {
                console.log(err);
                return;
            }
            console.log(JSON.stringify(result, null, 2));
        });
    }; getWeather();
}

UserSearch("Matt", "Atlanta, GA")

module.exports = UserSearch