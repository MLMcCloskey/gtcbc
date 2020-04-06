const Benchmark = require("benchmark");
// const generate = require("../shared/generate");

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
    var randomNumber = Math.round(Math.random() * arraySize);

    array.push(randomNumber);
}

// ================================================
// SOLUTION - Insertion Sort
// ================================================

function insertionSort(items) {
    for (var i = 0; i < items.length; i++) {
        let value = items[i]
        // store the current item value so it can be placed right
        for (var j = i - 1; j > -1 && items[j] > value; j--) {
            // loop through the items in the sorted array (the items from the current to the beginning)
            // copy each item to the next one
            items[j + 1] = items[j]
        }
        // the last item we've reached should now hold the value of the currently sorted item
        items[j + 1] = value
    }

    return array
}




var suite = new Benchmark.Suite();

suite
    .add("Insertion Sort", insertionSort(array))
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