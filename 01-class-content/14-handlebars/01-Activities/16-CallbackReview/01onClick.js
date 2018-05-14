// 1. Explain the on click code below.
// when a  button gets clicked, an alert pops up saying "boom"
// 2. When the page loads does the anonymous function get executed?
//not immediately
// 3. When does the anonymous function get executed?
//when the button is clicked

$("#boomButton").on("click", function() {
  alert("boom");
});
