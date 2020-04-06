const expect = require("chai").expect;
// var title = "";
// var firstLetter = title.charAt(0);
// var capitaliz




var titties = function(title){
    // title.split();
    title.charAt(0).toUpperCase();
    for (i=0; i<title.length; i++){
        if (i===" "){
            (i+1) = ((i+1).toUpperCase());
        }
    }
}

describe("titties", function(){
    it("should capitalize the first letter of each word", function(){
        expect(titties("mr raj")).to.equal("Mr Raj");
    });
});

// titties("mr raj");