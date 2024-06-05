// data types in java

// primitive data type
// reference data type

// primitive data type

//   1 => String
//   2 => Integer / Number
//   3 => Boolean
//   4 => undefined  
//   5 => null
//   6 => BigInt
//   7 => Symbol

// reference data type
//  1 => object
//  2 => Array
//  3 => Function



// primitive data type

let firstName = "Dhanush" // string data type within double quotes
let age = 25   // Integer means number
let result = true // boolean => true or false | 0 or 1
let name;  
console.log(name); // by default you don't have any value is Undefined 


let something = null;  // first you declare null then you can assign value later
something = "some thing"
console.log(something);



// statically typed language => c++, c ,java etc...

// ex:
// String name = "dhanush"
// we can declare the data type at the time of declaration

// dynamic typed language  => js, python, php etc...

// ex : 
// name = "dhanush"
// we can't assign data types the compiler automatically assign the datatype 



// string

// we can use string 

// Using the single quote
// Using the double quote
// Using the backticks

let str1 = "Hello World!"; // Using double quotes
let str2 = 'Hello World!'; // Using single quotes
let str3 = `Hello World!`; // Using backticks

console.log(str1);
console.log(str2);
console.log(str3);


// numbers

// integer
// 64-bit floating-point 

let num1 = 10; // Integer
let num2 = 10.22; // Floating point number

console.log(num1);
console.log(num2);


// also we use Exponential notation of numbers
let num01 = 98e4;    // 980000
let num02 = 98e-4;   // 0.0098

console.log(num01);
console.log(num02);



// BigInt 

// JavaScript stores only 64-bit long floating point numbers. If you want to store a very large number, you should use the Bigint. You can create Bigint by appending n to the end of the number.

let largeNum = 1245646564515635412348923448234842842343546576876789n;  // use n on the last
console.log(largeNum);



// symbol
// It is used to create unique primitive, and immutable values.
