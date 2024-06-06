// ARITHMETIC OPERATOR

// +   Addition
// - Subtraction
// * multiplication
// / division
// % modulus
// -- increment
// ++ decrement

var x= 20;
var y = 40;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

// output :
// 60
// -20
// 800
// 0.5
// 20



// The subtraction operator uses numeric operands but can also be used for non-numeric operands such as strings.

// If both operands are numbers, then resultant is number.

// If any or both operands are strings (containing only numbers), it first converts the strings to number and then performs subtraction operations.

// If string contains non numeric value, it will return NaN.

// If any operand is NaN or Infinity, the result will be NaN or Infinity respectively.





// increment and decrement
 
//increment operator
// 1 => Postfix Increment Operator
// 2 => Prefix Increment Operator


// 1 => Postfix Increment Operator

// The postfix increment operator increments the value of the variable after its current value is used

var a1 = 10;
var b1 = a1++; // a1 is now 11 but b1 is 10.

console.log(a1);
console.log(b1);



The prefix increment operator increments the value of the variable before its current value is used.