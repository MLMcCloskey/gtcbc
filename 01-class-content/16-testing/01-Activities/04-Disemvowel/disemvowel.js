const expect = require("chai").expect;
// const assert = chai.assert;


var disemvowel = function(str) {
  if (typeof str === "number") {
    return String(str);
  }
  return str.replace(/[aeiou]/gi, "");
};

describe("disemvowel", function(){
  it("should remove vowels from a string", function(){
    expect(disemvowel("Raj")).to.equal("Rj");
  });

});

module.exports = disemvowel;