/** four types of variables */

/*Without using any keywords.
Using the 'var' keyword.
Using the 'let' keyword.
Using the 'const' keyword.
 */

/* let  2015
  const 2015
  var   1995 - 2015
  nothing */

let a = 25;
const b = 30;
var c = 20;
d = 20;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

/**
 * JavaScript variables must have unique names. These names are called Identifiers.

=>  Basic rules to declare a variable in JavaScript:
=> These are case-sensitive
=> Can only begin with a letter, underscore(“_”) or “$” symbol
=> It can contain letters, numbers, underscore, or “$” symbol
=> A variable name cannot be a reserved keyword.
 *
 */

// 1 => var

var myName = 'Dhanush'; // global scope
console.log(myName);

function myNameFunction() {
  var myName = 'Kumar'; // local scope
  console.log(myName);
}
myNameFunction();

console.log(myName);
var myName = 'ram';
console.log(myName);
