const dogs = {
    raining: true,
    noise: "woof",
    makeNoise: function(){if (this.raining){console.log(this.noise)}}
}

const cats = {
    raining: false,
    noise: "meow",
    makeNoise: function(){if (this.raining){console.log(this.noise)}}
}

var a = process.argv[2];
var b = process.argv[3];

if (a === "cats"){
    dogs.raining = false;
    cats.raining = true;
}

dogs.makeNoise();
cats.makeNoise();


