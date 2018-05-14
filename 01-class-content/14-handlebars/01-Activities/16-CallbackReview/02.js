var sum = function(numOne, numTwo) {
  return numOne + numTwo;
};

var multiply = function(numOne, numTwo) {
  return numOne * numTwo;
};

var addCallBacks = function(functionOne, functionTwo) {
  return functionOne(6, 2) + functionTwo(6, 3);
};

// What does this return?
addCallBacks(multiply, sum);

// function one is multiply with parameters 6 and 2 which returns 12. function two is sum with parameters 6 and 3 which returns 9. The two are then added together to return 21