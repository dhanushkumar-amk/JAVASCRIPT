// var fruits = ['apple', 'banana', 'graphs', 'orange', 'berry'];//  array in java script/* Array is a data structure that allows you to store and organize multiple values  *//* array [] *///array literals/* array constructor *//* var fruits1 = new Array('pineapple ', 'etc'); *//*console.log(fruits.length);*/// used to calculate the length of the array// console.log(fruits);//Reading an array/*console.log(fruits[1]);*/// accessing an array using index value// fruits[8] = 'Eigth fruits';// Array(9) [ "apple", "banana", "graphs", "orange", "berry", <3 empty slots>, "Eigth fruits" ]// ​// 0: "apple"// ​// 1: "banana"// ​// 2: "graphs"// ​// 3: "orange"// ​// 4: "berry"// ​// 8: "Eigth fruits"// fruits.forEach((fruit) => {//   console.log(fruit);// });// apple// banana// graphs// orange// berry// console.log(fruits, toString());// console.log(fruits);// var user = [//   {//     id: 1,//     name: 'dhanushkumar',//     status: false,//   },//   {//     id: 2,//     name: 'sanjay',//     status: true,
//   },
// ];

// console.log(user[0]);
// console.log(user[1].name);

//pushing/updating to the existing array
// fruits.push('mango');

// Array(6) [ "apple", "banana", "graphs", "orange", "berry", "mango" ]
// ​
// 0: "apple"
// ​
// 1: "banana"
// ​
// 2: "graphs"
// ​
// 3: "orange"
// ​
// 4: "berry"
// ​
// 5: "mango"

// fruits.push('mango', 'waterApple');
// unshift are used to insert the element to the array in index 0

// fruits.unshift('orange2');
//! adding a element
// Push()
// unshift()

// to removes the last element in the array using pop method()
// fruits.pop();
// Array(4) [ "apple", "banana", "graphs", "orange" ]

// shift()  used to remove the first element in the array

// fruits.shift();
// Array(3) [ "banana", "graphs", "orange" ]

//! remove a element

// shift()
// pop()
// ==========================================================================================
// slice method
// const my = fruits.slice(1, 3);
// console.log(my);
// Array [ "banana", "graphs" ]

//splice

// var myFruits = fruits.splice(1, 4); 1 is index number and 4 is a count
// console.log(myFruits);
// Array [ "apple" ]

// at Method()
// fruits.at(1);

// console.log(fruits.at(2));

// graphs

//arrayCopywithin()
// copyWithin(target: number, start: number, end?: number | undefined): string[]
// If start is negative, it is treated as length+start. If end is negative, it is treated as length+end.

// Returns the this object after copying a section of the array identified by start and end to the same array starting at position target

// fruits.copyWithin(0, 1, 2);
// Array(5) [ "banana", "banana", "graphs", "orange", "berry" ]

// console.log(fruits);

// !---------------------------------------------------------------

//Merging  the arrays
//concat
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// var breakfast = ['idly', 'dosa', 'juice'];
// var launch = ['sapadu', 'rasam', 'chicken'];
// var dinner = ['briyani', 'fries', 'milk'];

// var listOfFood = breakfast.concat(launch, dinner);

// [...] is a  spread operator syntax is ...
// var listOfFood = [...breakfast, ...launch, ...dinner, "juice 1"];

// console.log(listOfFood);
// Array(9) [ "idly", "dosa", "juice", "sapadu", "rasam", "chicken", "briyani", "fries", "milk" ]

// console.log(listOfFood);

// Array(9) [ "idly", "dosa", "juice", "sapadu", "rasam", "chicken", "briyani", "fries", "milk" ]

// ? array destructuring

const numbers = [70, 80, 90];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

let firstNumber = numbers[0];
let SecondNumber = numbers[1];
let ThirdNumber = numbers[2];

console.log(firstNumber);

// destructuring

// ! simple array destructuring method
const [fNumber, lastNumber, middleNumber] = [70, 80, 90];

// ! handling undefined element
const [fnumber, lNumber, mNumber] = [70, 80];
console.log(fnumber, lNumber, mNumber);

// output:
// 70 80 undefined

// ! skipping elements
// simple whitespace => coma
const [commerce, , Accounts] = [99, 95, 96];
console.log(commerce, Accounts);

// output
// 99,96  => 95 will be automatically skipped

// ! Discarding extra elements

const [Tamil, English, Hindi] = [100, 50, 25];
console.log(Tamil, English);
// javaScript automatically ignore unwanted values

// ! Default Values
const [name] = ['Aswin'];
console.log(name);
// output :
// Aswin

const [names = 'Dhanushkumar'] = [];
console.log(names);
// if the user does not give the values it takes the default values
// output:
// Dhanushkumar
// it takes dhanushkumar as a default value and assigned to names variable

const [Name = 'Dhanushkumar', age = 40] = ['aswin'];
console.log(Name, age);

// !rest Syntax ;
// rest parameter are used to get the values in same values
const [one, two, ...remaininNnumbers] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1 => one
// 2 => two
// 3,4,5,6,7,8,9,10  => are stored in remainingNumbers variables
console.log(one, two, remaininNnumbers);

// ! swapping of variables
let a = 20;
let b = 40;
[a, b] = [b, a];

console.log(a, b);
// output
// 40, 20

// ! nested array destructuring
const [a1, b1, c, [d, e], f, g] = ['A', 'B', 'C', ['D', 'E'], 'F', 'G'];
// nested array destructuring
// [d,e] is a nested array

console.log(a1, b1, c, d, e, f, g);
// output :
// A B C D E F

// array destructuring in function

function getFullname() {
  return ['Dhanush', 'Kumar'];
}
// const fullname = getFullname();
// console.log(fullname);
// output will be array

const [firstName, LastName] = getFullname();
console.log(firstName, LastName);

// output :
// dhanush kumar

//Destructuring on loops

const myTeam = [
  ['Sanjay', 'aswin', 'Ram'], // nested array
  ['Hari', 'jagat', 'Sam'],
];
// console.log(myTeam);

for (let [Name1, Name2, Name3] of myTeam) {
  console.log(Name1, Name2, Name3);
}
