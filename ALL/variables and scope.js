// ! ======= ===== ===== ==== ==== variables ==== ==== ==== ==== ==== ===== */////////////////////
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// ? variables is like a container we use to store the value

// var
// let
// const

// var  is not used  now

// ? let variable is used to change the value in dynamically

let x = 10;
x = 20;
console.log(x);

// output : 20;

// ? const

// ? const means the value can't be changed

const y = 20;
// y = 40;
console.log(y);

// output :  invalid assignment to const 'y'

// ! using const we create object  we can change th variable
// ex:
const person = {
  name: 'Dhanushkumar',
  age: 10,
};
console.log(person);

// output :
// Object { name: "Dhanushkumar", age: 10 }

person.name = 'sanjay Kumar';
console.log(person);
// output :
// Object { name: "sanjay Kumar", age: 10 }

// ! same as array
const avengers = ['ironMan', 'captainAmerica', 'Hulk'];
console.log(avengers);

// output :
// Array(3) [ "ironMan", "captainAmerica", "Hulk" ]

avengers.push('Thor');
console.log(avengers);

// output :
// Array(4) [ "ironMan", "captainAmerica", "Hulk", "Thor" ]

//! ======= ===== ===== ==== ==== Hoisting ==== ==== ==== ==== ==== ===== */
// a will be declared
// let a ;
// function hoisting() {
// a = 10;
// let b = 20;
//   console.log(a + b);
// }
// hoisting();

// console.log(a);
// console.log(b);

// b is undefined because b is a local scope

//! ======= ===== ===== ==== ==== Scope of a variable ==== ==== ==== ==== ==== ===== */

// scope pf a  variable
// 1 =>  Global Scope
// 1 =>  local Scope
// 1 =>  block Scope

let a = 10;
function sum() {
  let b = 20;
  if (true) {
    let c = a + b;
    console.log(c); // c is a block scope
  }
  console.log(a + b);

  console.log(c); // output :  c is undefined because c is a block scope
}

// here a is global scope
// b is a functional scope or local scope
sum();
