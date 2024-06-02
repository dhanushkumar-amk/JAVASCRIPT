////////////////////////////////
//
//
//
//
//
//
//
//
/* scope of the variable
let
var is never used 
const

*/

// popularly used in let and const
//  ? let

// let  is used to reassign the value

let x = 1;
x = 3;

console.log(x);

// 3

// ? const

const z = 10;
const y = 10;
// z = 39; // invalid assignment to const 'z

console.log(z);
// const refers to the constant value the value can't be  change

// Scope

// global scope
// local scope  or function scope
// block scope

// global scope

// used to entire program :
let a = 10;
const b = 20;
var c = 30;

// local scope => block scope

{
  let a = 20;
}

// local scope => functional scope

function Scope() {
  const b = 20;
}

console.log(c);
