// syntax :

//  function functionName(parameters){

//  }

// ex :

// function expression

const message = function hello() {
  console.log('hello world');
};

message();

// function declaration

const person = {
  name: 'Dhanush',
  age: 20,
};

function printName1() {
  console.log(person.name);
}
printName1();

// parameters :

function printName(name) {
  console.log(name);
}
printName('ram');

// Arguments

function ArgumentsPerson(name) {
  // parameters
  console.log(name);
}
ArgumentsPerson('sam'); // arguments

// we can also pass multiple parameter

function MultiplePara(name, age, salary) {
  console.log(name);
  console.log(age);
  console.log(salary);
}
MultiplePara('sanjay', 20, 100000);

// default value

function DefaultValue({name = 'dhanush'}) {
  console.log(name);
}
DefaultValue(''); // dhanush

// Rest parameters
// using rest parameter we can pass any number of arguments in function

function RestPara(...name) {
  console.log(name.toString());
}
RestPara('dhanush', 'sanjay', 'ashwin', 'ram');

// return the value

function valueReturn(firstName, lastName) {
  const name = firstName + ' ' + lastName;
  return; // using empty return statement that stops the code below the code
  console.log(name);
}
valueReturn('dhanush', 'kumar');

function secondReturn(firstName1, lastName2) {
  let name1 = firstName1 + ' ' + lastName2;
  return name1;
}
let fullName = secondReturn('dhanush', 'kumar');
console.log(fullName);

// we can return any values in function

// Arrow function

// Arrow function is also know as fat arrow function

const greet = () => {
  console.log('Arrow Function');
};
greet();

// arrow function with single arguments

const square = (x) => {
  return x * x;
};
const result = square(20);
console.log(result);

// arrow function with multiple arguments

const sum = (a, b) => {
  return a + b;
};
// also written as
//  const sum = (a, b) => a + b;

const res = sum(10, 10);
console.log(res);

// arrow function in objects

const human = {
  name: 'Dhanushkumar',
  initial: 'G',
  getFullName: () => {
    // arrow function we can't add any this method in the object using arrow function
    //    return this.name + " "  + this.initial
    return human.name + ' ' + human.initial;
  },
};
console.log(human.getFullName());


// Arrow function as callback functions 

const numbers = [1,2,3,5,6,8];

const squareNumbers = numbers.map((num) => {
return num * num;
})
console.log(squareNumbers);



// Returning object literals in arrow function 

const mobileInfo = () => {
    return 
}

