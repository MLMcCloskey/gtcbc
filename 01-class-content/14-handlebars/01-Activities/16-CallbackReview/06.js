var sum = function(numOne, numTwo) {
  return numOne + numTwo;
};

var subtract = function(numOne, numTwo) {
  return numOne - numTwo;
};

var multiply = function(numOne, numTwo) {
  return numOne * numTwo;
};

var anythingGoes = function(functionOne, functionTwo, functionThree) {
  functionThree(functionOne(3, 4), functionTwo(7, 2));
};

// Challenge: what does this return?
anythingGoes(multiply, subtract, sum);


// sum (12, 5) = 17

// I was wrong. They didnt ever call "return" so the function is never executed. Undefined