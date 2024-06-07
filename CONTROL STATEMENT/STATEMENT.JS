//control flow statement///////////////
//
///
//
//
//
//
//
//
///
///
///
//

//
//
//
//
//
//
//
// three types
// 1 => conditional statement
// 2 => loops
// 3 => try/catch state

// ! Conditional statement

// if statement
// else statement
// switch statement
// else if statement
// ? if statement

// if the condition true is execute
// if the condition false then exit

if (true) {
  console.log('Hello world');
}

// output : Hello world

if (false) {
  console.log('Hello world');
}

// another example
let age = 20;
if (age >= 18) {
  console.log('You are adult');
}

// output :
// You are adult

// ? if else

// is conditional statement for both true and false

let number = 10;

if (number >= 20) {
  console.log('Your are great');
} else {
  console.log('You want some practice');
}

// ? else if

let count = 18;
if (count >= 20) {
  console.log('Your are great');
} else if (count <= 16) {
  console.log('You want some practice');
} else {
  console.log('intermediate');
}

// output: intermediate

// ? switch statement

// switch
// the switch statement  in js is a conditional statement that is used to execute a block of code based on the value of an expression

// let value = 42
// let value = 'hello';
// let value = true;
let value = [];

switch (typeof value) {
  case 'number':
    console.log('Number');
    break;
  case 'string':
    console.log('String');
    break;
  case 'boolean':
    console.log('Boolean');
    break;

  default:
    console.log('other');
    break;
}
// output:
// Number
// String
// Boolean
//Other

// ? Ternary operator
//  act as  a if else statement

// syntax
// condition ? true Condition : false Condition ;

let personAge = 20;

personAge >= 20
  ? console.log('You are an adult') // true statement
  : console.log('You are young'); // false statement

// ! loops in js

// for loop
// do loop
// while loop

// ? for loop

for (let i = 0; i < 10; i++) {
  console.log('Hello world ');
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let coding = ['javaScript', 'Python', 'C++'];
for (let i = 0; i < coding.length; i++) {
  console.log(coding[i]);
}

// output :
// javaScript
// python
// C++

// ? while loop

// this code will execute until the condition is true / if the condition is false is stop
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// ? do while

// first execute the do statement then check the condition if the condition is true the execute the condition get false

let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// ? break / continue

// break statement used to terminate the condition immediately

for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// output:
// 1
// 2

for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}
// output :
// 4
