

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

// ============================== function ==========================//



function hello(){
  console.log("hello world")
  }
  hello();
// basic syntax 

  hello world


// parameter function
  function hello(message){
    console.log(message)
    }
    hello("hello dhanushkumar");

    output:
    hello dhanushkumar

// function with no return value 
    function hello(message){
      console.log(message)
      }
      let result = hello("hello dhanushkumar");
      console.log('result', result);
output:

      hello dhanushkumar 
      result undefined // result will be no undefined



      // function with return value


function add(a,b){
  return a+b;
  
  }
  add(10,10)

  output:
  20

// function with return value


function add(a,b){
  if(a&b){
  return a+b;
  }
  return 0
  }
  add()
  output:
  0 


// ============================== closure==========================//

// closure

function outer()
{
  var a = 10;

function inner()
{
  let b = 20;
console.log(a+b);

}
return inner;
}

let resuly = outer() // resuly is a  reference variable to call the inner function
resuly();
30


// another simple example 
// calling directly

function outerFunction() {
  //outer function
  let a = 100;
function innerFunction() {  // inner function
  let b = 200;
  console.log(a + b);
}
innerFunction(); // calling inner function
}
outerFunction(); // outer function
 
output:
300

//  closer using function example 3


function mobilePrize(mobile) {
  console.log('mobile prize :', mobile);

  return function (laptop) {
    console.log('laptop prize :', laptop);
    let prize = mobile + laptop;
    return prize;
  };
}

let reference = mobilePrize(30000);
let totalPrize = reference(20000);
console.log('total prize :', totalPrize);

output:
mobile prize : 30000
laptop prize : 20000
total prize : 50000


// ============================== array ==========================//

// array is a  datatype  used to store the different values in one variable

// method 1

// let colors = ['red','blue','green',1,2,3,4,5,true,false]  and objects


// array accessing method 2let
let colors = new Array('red', 'green', 'blue');

console.log(colors);


// accessing the value in array using index value
let colors = new Array('red', 'green', 'blue');

console.log(colors[1]);

output:
green

//  to change the value in array using  assignment operator
let colors = new Array('red', 'green', 'blue');
colors[2] = 'yellow';
console.log(colors);

output:
[ 'red', 'green', 'yellow' ]


// to identify array length using length method


let rgb = new Array('red', 'green', 'blue');

rgb.length;
3



if(rgb.length > 0){
  console.log('we have colors')
}
ouput:
we have colors


// push method
// push method used to add values in array element


// ex

let arrayname = new Array('red','green','blue');

arrayname.length
3
arrayname.push('yellow');
arrayname 


output:
Array(4) [ "red", "green", "blue", "yellow" ]
4



// unshift method
// its used to push the element in first position

let arrayname1 = new Array('red','green','blue');

arrayname1.unshift('yellow');

arrayname1

output:
Array(4) [ "yellow", "red", "green", "blue" ]


//pop method 
// used to remove the last element in the array

var arrayPop = new Array('red','green','blue');

arrayPop.pop()
"blue"
arrayPop
Array [ "red", "green" ]


// shift method 
// its is used to remove the first element in a array  just opposite of an pop method
var arrayPop = new Array('red','green','blue');

arrayPop.shift()
"red"
arrayPop
Array [ "green", "blue" ]

//indexof
//used to get a index value in an array element

var arrayPop = new Array('red','green','blue');

arrayPop.indexOf('green')
1 


/* forEach method  */
var numbers = [1, 2, 3];
/* forEach method is used to get a value of every element in array*/

numbers.forEach(function (element) { // element parameter
  console.log(element * 5);
});

output:
5 // 1 * 5
10// 2 * 5
15//3 * 5

