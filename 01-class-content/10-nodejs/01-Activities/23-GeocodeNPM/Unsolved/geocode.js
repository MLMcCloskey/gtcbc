// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)

var geocoder = require("geocoder");


// Take in the command line arguments

var a = process.argv[2];
var b = process.argv[3];
var api = {key: "AIzaSyASI3Mg_oWKush5wdir_fOqMkogsy6icIE"}


// Build your address as an array or string

var address = [];


// Then use Geocoder NPM to geocode the address

geocoder.geocode("'"+a+"'", function (error, data, body){
    console.log(error);
    console.log(JSON.stringify(data, null, 2));
    // console.log(body);
}, api);



// apiKey = AIzaSyASI3Mg_oWKush5wdir_fOqMkogsy6icIE