

// ======================================================java script ================================//
// ============================== hoisting ======================================//
//  !            hoisting


//  ? definition declare a variable invisible in a program is called hosting// var a = 10;function code() {
  // is automatically declared by js
  // var a declared by js outside the function so it has global scope
  // var a = 10;

  a = 10;

  let b = 50;

  //   console.log(b);

code();

console.log(a); // it is executed

console.log(b); // it has local scope so takes error
// ============================== scope ======================================//

//  scope

// three types
// 1.global scope
// 2.function scope
// 3.block scope 

// 1.global scope
const personName = 'dhanushkumar';

function globalScope() {
  console.log(name);
}
console.log(name);
globalScope();
// output:
// dhnushkumar
// dhnushkumar

// 2.function scope

const name =  "dhanushkumar"

function localScope(){
  const name = "sanjaykumar"
console.log(name);


}

console.log(name)
localScope();
// output
// dhnushkumar- global scope
//   
// sanjaykumar  = we declare the variable within the function is called functional scope


// 3.block scope 
const name = 'dhanushkumar';

function localScope() {
  const name = 'sanjaykumar';
  console.log(name);

  if (true) {
    const name = 'hello world';  // block scope na execute inside the block
    console.log(name);
  }
}

console.log(name);
localScope();


// output
const name = 'dhanushkumar';

function localScope() {
  const name = 'sanjaykumar';
  console.log(name);

  if (true) {
    const name = 'hello world';  // block scope na execute inside the block
    console.log(name);
  }
}

console.log(name);
localScope();
// dhanushkumar   //global scope output
// sanjaykumar  // function scope output
// hello world   // block scope output



// scope of the variable
// var keyword used to declare outside the block element

function logname() { 
    
    if (true) {
    var name = 'hello world';
    // ! once we declare the var keyword inside the function we can use entire function
    // make error but code run [because use of var keyword]
  }
  console.log(name);
} // function ends
logname();

// output

// hello world




// ? exercise

const name = 'hello world';
function hello() {
  var name = 'world hello';
  if (true) {
    
    console.log(name);
  }
  console.log(name);
}

console.log(name);
hello();


// output



// hello world
// world hello
// world hello

// ?-------------------------------------------------------------------------------------------//

// ============================== coercion ======================================//

//  converting one datatype to another illegally is known as coercion 
// ! coercion [ + ] used to join
// ex:1
42 + ''
"42" 
// second value as string so assume as string
// it assume first character as string and return string value

// ex:2
42 + '0'
"420" 

// ex:3
42 - '7' // if we give [ - ] symbol it assume as a subtraction
// so [ + ] for coercion
35 

42 + 'hello'
"42hello" 


// ============================== Logical operator ======================================//



// Logical operator
// mainly used two [ &&  || ] used in if condition

// first || [or] operator

// a or b 

const  a= 42;

const b ="dhanushkumar"
const c = null;

a || b
42 // a

 // c  is null value so print b
c || b
"dhanushkumar" 

// second && [&&] operator
// ? always give second value as output:


const e ="dhanushkumar"
const f = null;
const g = 42;

g && e
"dhanushkumar" 


// 
e && f
null 


example:

function orOperator(name) 

{ 
     console.log(`hello, ${name || 'world'}`);
}
orOperator();// no value so default value

output:
hello, world

example2:

function orOperator(name) {
    console.log(`hello, ${name || 'world'}`);
  }
  orOperator('aswin'); // parameter passed 
  

  output:
  hello, aswin




// ============================== Equality operator ======================================//


// Equality operator [ ===, == ] is used to check the value is equal including data type 

// ! == equality operator only check values 
// ! === strict  equality operator  check values and also data types 
42 == 42
true
42 === 42
tr42 == '42' // == only check values not check datatype 
true
42 === '42'  // ===  check value and also the data type
false 
// so first check the value ius equal or not then check data types is same for both

// if condition is satisfy then return true else return false


// ============================== nullish coalescing operator ==========================//

//used to perform the undefined  and null value

[let result = undefined;

if(result == undefined){
  result = "hello world"
}

result
output:
"hello world" ]



//  ? null coalescing operator [ ?? ] null and undefined

//! if the value is null the nullish coalescing operator used to programmer to define the values

let nullresult = null;
// for null
nullresult = result ?? 'hello world'

output:
"hello world" 

let nullText = undefined;
// for undefined
nullText = nullText ?? 'user defined value'
nullText;
"user defined value" 



// otherwise
let value = 'hello world program' // work only null and undefined values
value =  value ?? "dhanushkumar";
value
"hello world program" 


// ============================== String data types and String Methods ==========================//

// used to count the length of the string it includes white space also
let x = "hello world";
x.length 
11 
// 
    hello = 5 ;
    world = 5;
    whiteSpace = 1;
    total = 11;
//

var string = "dhanushkumar";

string.length
12

string.toUpperCase();
"DHANUSHKUMAR"

string.toLowerCase();
"dhanushkumar"

// always starts with index 0
var string = "dhanushkumar";
// ?   syntax: charat(index value);
string.charAt(7)
"k" 

// targeting the element with in the string using charAt()


// substring()


var string = "dhanushkumar";

string.substring(0,6);
"dhanus"
var string = "dhanushkumar";

string.substring(0,7);
"dhanush" 


// indexof

var string = "hello world or dhanushkumar"

text.indexOf('or');
7
var string = "hello world or or dhanushkumar"

text.indexOf('or');
7
var string = "hello world or or dhanushkumar"

text.lastIndexOf('or')


// replace
// used to replace the value in exiting string

var string = "hello world and dhanushkumar"

text.replace('world', 'guys');
"hello guys" 

// split
//  used to split the each  value as array including space

var string = "hello dhanushkumar , hi am dhaushkumar"

string.split(" ")
Array(6) [ "hello", "dhanushkumar", ",", "hi", "am", "dhaushkumar" ]

// trim
// remove the unwanted  space in the string 
var string = "      hello dhanushkumar , hi am dhaushkumar   ";

string.trim()
"hello dhanushkumar , hi am dhaushkumar" 

