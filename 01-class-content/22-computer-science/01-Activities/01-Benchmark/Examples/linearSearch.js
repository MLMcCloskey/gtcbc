// Benchmark is a library that times
var Benchmark = require("benchmark");
var generate = require("../shared/generate");


// Generate an array of the given length.
var length = 100000;
var stuff = generate(length);
var randomValue = stuff[Math.ceil(Math.random() * length)];


// const stuff = [10, 34, 56, 67, 93, 120, 137, 168, 259, 280, 311, 342, 413, 514];
// var random_value = stuff[Math.floor(Math.random() * 14)];


const algorithm = () => {
  for (let i = 0; i < stuff.length; i++) {
    if (stuff[i] === random_value) {
      console.log(`Its a match! ${stuff[i]} = ${random_value}`)
    } else {
      console.log(`${stuff[i]} does not equal ${random_value}`)
    }
  }
}

// algorithm();




function binaryIndexOf(searchElement) {
  'use strict';

  var minIndex = 0;
  var maxIndex = this.length - 1;
  var currentIndex;
  var currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = (minIndex + maxIndex) / 2 | 0;
    currentElement = this[currentIndex];

    if (currentElement < searchElement) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > searchElement) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }

  return -1;
}
// A "suite" is a series of code snippets you
//   want to execute and time.
var suite = new Benchmark.Suite();

suite
  // Add the function 'linearSearch' to the suite.
  .add("Linear Search", function binaryIndexOf(stuff) {
    'use strict';

    var minIndex = 0;
    var maxIndex = this.length - 1;
    var currentIndex;
    var currentElement;

    while (minIndex <= maxIndex) {
      currentIndex = (minIndex + maxIndex) / 2 | 0;
      currentElement = this[currentIndex];

      if (currentElement < stuff) {
        minIndex = currentIndex + 1;
      }
      else if (currentElement > stuff) {
        maxIndex = currentIndex - 1;
      }
      else {
        return currentIndex;
      }
    }

    return -1;
  })
    // On 'start', run the 'start' function.
    .on("start", function start() {
      console.log("Beginning benchmark...");
    })

    // On the 'complete' event, run the 'report' function.
    .on("complete", function report() {
      // Get successful benchmark.
      var benchmark = Benchmark.filter(this, "successful")[0];

      console.log("On average, " + benchmark.name + " took " + benchmark.stats.mean + " seconds to complete.");
    })

    // Run the test!
    .run();
