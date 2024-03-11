/* Module-------->In JavaScript, when using modules, you can export functions, objects, or values from one module to be imported into another module. There are two types of exports: default exports and named exports.1) import and Export2) Export    --> Named Export    --> Default Export    1) Named Export A named export allows you to export multiple values from a single module by explicitly specifying their names.  syntax:    export:export function add(a, b) {    return a + b;}export const PI = 3.14159;import:
import { add, PI } from './module.js';
console.log(add(2, 3)); // Output: 5
console.log(PI); // Output: 3.14159


    2) Default Export
Default Export: The default export is used to export a single value from a module. Unlike named exports, there can only be one default export per module. It is marked with the export default syntax.


  default export are used to export single value like array,
 abject, function etc


 during import we can use any name

syntax:
export:

const greeting = 'Hello, world!';
export default greeting;



Import:
import greeting from './module.js';
console.log(greeting); // Output: Hello, world!


 */

// syntax
// import {  } from "module";

// export Statement
/**
 export let myName = 'Dhanush';
export let myAddress = 'Pollachi';
export let myEmail = 'dhanushkumar@gmail.com';
 */

// named export

import {
  myName,
  myAddress,
  myEmail,
  myName1,
  myAddress1,
  myEmail1,
} from './module.js';

// 1 => individual item export
console.log(myName);
console.log(myAddress);
console.log(myEmail);

// 2 => Group item export
console.log(myName1);
console.log(myAddress1);
console.log(myEmail1);

// default export
/*
import userData from './module.js';

// using array
console.log(userData);

console.log(userData[1]);

console.log(userData.push('sanjay'));

userData.forEach((e) => {
  console.log(e);
});

*/

import obj from './module.js';

console.log(obj);
