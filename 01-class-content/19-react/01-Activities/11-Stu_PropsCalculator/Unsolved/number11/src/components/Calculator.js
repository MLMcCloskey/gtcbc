import React, {Component} from "react";

// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360
const Calculator = () => (
  <div>
    <p>
      {/* 19 + 341 =  <Math ( num1 + num2 )/> */}
    </p>
    <p>
      42 - 17 = {props.num2}
    </p>
    <p>
      100 * 3 = ?
    </p>
    <p>
      96 / 4 = ?
    </p>
  </div>
);

class Math extends Calculator {
  constructor (props){
    super(props);
  }
  return(
    num1 operator num2
  );
}

export default Calculator;
