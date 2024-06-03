/** four types of variables *
 *
 *
 *
 *  */

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
var myName = 'ram'; // using var keyword w can change the value
console.log(myName);

/**
Dhanush === global scope
Kumar  === local scope use within the particular function or the block
Dhanush === global scope
ram === assigned value
 */

// 2 => let
// using let keyword we can't be redeclare

let name = 'Dhanushkumar'; // global scope
console.log(name);

function myNameFunction() {
  let name = 'Kumar'; // local scope
  console.log(name);
}
myNameFunction();

console.log(name);
// let name = "ram";   cannot redeclare block-scoped variable 'name'.
// console.log(name);

// 3 => const
// using const keyword we can't be redeclare and also can't be used another time
const name1 = 'Dhanushkumar'; // global scope
console.log(name1);

function myNameFunction() {
  const name1 = 'Kumar'; // local scope
  console.log(name1);
}
myNameFunction();

console.log(name1);

// var

if (true) {
  var text = 'hello'; // using var keyword we can use outside the block element
  console.log(text);
}
console.log(text);

console.log('===========================================');

// let

if (true) {
  let message = 'Hello world'; // using let keyword we can't be used outside the blocked scope variable
  console.log(message);
}
// console.log(message);  can't be used



if (true) {
  const text = 'Hello world'; // using same as const keyword we can't be used outside the blocked scope variable
  console.log(text);
}

// console.log(message);  can't be used



var person = "john";
console.log(person);

person = "wick";  //  we can't add any variable to the person so it take var as default and reassign the values
console.log(person);


// hello world from js