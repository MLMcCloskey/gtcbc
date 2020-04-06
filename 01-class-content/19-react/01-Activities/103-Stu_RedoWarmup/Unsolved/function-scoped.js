let name = "Nick";

const tinyize = function(name) {
  var myName = "Tiny " + name + "!";

  return myName;   //Tiny Nick
};

name = tinyize("Rick");
console.log(name); // if const, still Nick which will cause error. If Let, now Tiny Rick

for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100); // will post numbers 0 through 5 every tenth of a second if changed to Let. Otherwise will post 5 5times
}
