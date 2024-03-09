// ?! ======================= function =========================================////////////////
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

//? 1 => function ?

// features of function
// used to read and understand easily
//reusability

// syntax
//  function name(){
// function : keyword
//    code
//  }

//example
// var person = {
//   name: 'dhanush', // global object
//   age: 20,
// };

// function printName() {
//   console.log(person.age);
// }

// printName();

// ? 2 => parameter

// syntax
// function printName(passing parameter){
// code
// }

// printName(passing parameters)

// example

// function printName(name) {
//   console.log(name);
// }
// printName('aswin');

// output: aswin

// another example
// var person = {
//   name: 'dhanush', // global object
//   age: 20,
// };

// function printName(name) {
//   console.log(name);
// }
// printName(person.name);
//  output:   dhanush

// * we can use any number of parameters in the function *//

//? 3 => arguments:

function printName(name) {
  console.log(name);
}
printName('aswin'); // passing the values in the function is called Arguments

// output: aswin

// another example
var person = {
  name: 'dhanush', // global object
  age: 20,
};

function printName(name) {
  console.log(name);
}
printName(person.name); // person.name  is arguments passed in a function

// another example to pass the object in the function

var person = {
  name: 'dhanush', // global object
  age: 20,
};
function printName(person) {
  // passing the object in array  => person is a object name
  console.log(person.name);
  console.log(person.age);
}
printName(person);

// manually passing the object
printName({name: 'aswin', age: 25});

//? 4 => default parameters

// syntax:
function Print(person = {name: 'sanjay', age: 0}) {
  // here  (person = {name: 'sanjay', age: 0}) is a default parameter  used to set default values to the
  console.log(person.age);
  console.log(person.name);
}

// Print(); //  the user did not give the value then default parameter executes

// output:
//  sanjay
// 0

// otherwise
// Print(person);
// output:
// 20
// dhanush

// ? 5 => Rest parameter

function dhanush(...args) {
  // used to pass many parameters using rest operator or rest parameters
  console.log(args);
}

dhanush(dhanush.name, 'sanjay');
//output:

// [ 'dhanush', 'sanjay' ]

// ? 6 => returning the values from the function

// return keyword is used to return the value

var place = {
  name: 'dhanush',
  place: 'pollachi',

  place1: function (place) {
    console.log('hello' + ' ' + this.name);
  },
};

place.place1();

// arrow function

// syntax :

var name1 = () => {
  console.log('hello world !');
};

name1();
