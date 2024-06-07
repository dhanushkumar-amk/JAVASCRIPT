// The JavaScript if...else statement executes a block of code when the specified condition is true. When the condition is false the else block will be executed. The if-else statements can be used to control the flow of execution of a program based on different conditions.// Types of if statement

// if statement
// if...else statement
// if...else if... statement.

// if statement

// if the condition is true then it execute the condition

// if (expression) {
//     Statement(s) to be executed if expression is true
//  }

// ex :

var age1 = 10;

if (age1 > 5) {
  console.log('Your are eligible'); // Your are eligible
}

// if...else statement

// it consists  two  statement  true statement  and false statement

let age = 15;
if (age > 18) {
  console.log('Qualifies for driving');
} else {
  console.log('Does not qualify for driving'); // Does not qualify for driving
}

// if else if

// The if...else if... statement (also called as if...else ladder)is an advanced form of if…else that allows JavaScript to make a correct decision out of several conditions.

let book = 'maths';
if (book == 'history') {
  console.log('History Book ');
} else if (book == 'maths') {
  console.log('Maths Book');
} else if (book == 'economics') {
  console.log('Economics Book');
} else {
  console.log('Unknown Book');
}
