// Initialize Firebase (YOUR OWN APP)
// Make sure that your configuration matches your firebase script version
// (Ex. 3.0 != 3.7.1)
var config = {
  apiKey: "AIzaSyAZkGMc6A9f-gWM-oCxJvgzxcjkuXoIByk",
  authDomain: "countdown-521a5.firebaseapp.com",
  databaseURL: "https://countdown-521a5.firebaseio.com",
  projectId: "countdown-521a5",
  storageBucket: "countdown-521a5.appspot.com",
  messagingSenderId: "995955630768"
};
firebase.initializeApp(config);
// Create a variable to reference the database
// var database = ...
var database = firebase.database();

// Use the below initialValue
var initialValue = 100;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
// This callback keeps the page updated when a value changes in firebase.
// HINT: Assuming 'database' is our database variable, use...
// database.ref().on("value", function(snapshot)) {}
database.ref().on("value", function(snapshot){
// We are now inside our .on function...
  console.log(snapshot.val());
// Console.log the "snapshot" value (a point-in-time representation of the database)
// This "snapshot" allows the page to get the most current values in firebase.
  clickCounter = snapshot.val().clickCount;

// Change the value of our clickCounter to match the value in the database
// ___________ = snapshot.val().______________________

// Console Log the value of the clickCounter
console.log(clickCounter);
// Change the HTML using jQuery to reflect the updated clickCounter value
$("#click-value").text(snapshot.val().clickCount);
// Then include Firebase error logging
// HINT: }, function(errorObject)
}, function(errorObject){
  console.log("you done fucked up" + errorObject.code);
})
// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter === 0) {

    alert("Phew! You made it! That sure was a lot of clicking.");

    clickCounter = initialValue;

  }

  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter
  })

  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter
  })

  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").text(clickCounter);


});
