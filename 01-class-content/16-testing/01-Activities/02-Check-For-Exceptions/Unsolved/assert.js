var assertThrows = function(func, x, y) {
  var threw = false;
  // Wrap func with a try/catch
  // If an error is thrown, set threw to true
  try {
    func(x, y);
  }
  catch (err) {
    console.log(`Error reading ${x} or ${y}. Error logged. Continuing...`);
    console.log("Everything else worked");
  }


  // Depending on whether an error was thrown, threw is either true or false
  return threw;
};

var multiply = function(x, y) {
  // use 'typeof' keyword to check if both x and y are numbers:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  if (typeof x != "number" || typeof y != "number") {
  // try {
  //   multipy(5, 3);
  // }
  // catch (error){
      throw new Error(`one of the variables is not a number`);
    }
    // throw an error if either x or y is not a number
    else return console.log(x * y);
  
  
};


assertThrows(multiply, 5, 8);