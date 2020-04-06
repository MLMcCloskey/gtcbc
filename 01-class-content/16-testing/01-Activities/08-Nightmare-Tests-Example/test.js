const Nightmare = require("nightmare");

const nightmare = Nightmare({ show: true });

nightmare
    .goto("http://www.simplesite.com/")
    .click("#_ctl0_btnStart1")
    .wait("#links a")
  .evaluate(function() {
    return document.querySelector("#links a");
  })
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });