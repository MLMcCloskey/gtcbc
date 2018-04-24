// We're incorporating an npm package for doing weather searches.
var weather = require("weather-js");

function getWeather(options) {
  return new Promise(function (resolve, reject) {
    weather.find({ search: options.location, degreeType: "F" }, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result)
      }
    });

  })
}

// Creates a UserSearch Constructor
var UserSearch = function (name, location) {
  this.name = name;
  this.location = location;
  this.date = Date.now();

  this.getWeather = function () {
    return getWeather({
      location: this.location
    })
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2))
      })
      .catch(function (err) {
        console.log(err)
      })
  };

};

module.exports = UserSearch;
