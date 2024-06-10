//json// java Script object notation
// text formate
// to send and receive data in many language

var Person = {
  firstName: 'Dhanush',
  lastName: 'kumar',
  Gender: 'M',
  Role: ['Freelancer', 'Frontend Developer', 'UI Designer'],
  fullName: function () {
    console.log('hello' + ' ' + this.firstName + this.lastName);
  },
};

console.log(Person);
Person.fullName();

// To change the object to the json

// ! stringify
//? it convert the object to json formate

// it convert object into string

// Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

// @param value — A JavaScript value, usually an object or array, to be converted.

var sendJson = JSON.stringify(Person);

console.log(sendJson);

// output:
/* {"firstName":"Dhanush",
  "lastName":"kumar",
  "Gender":"M",
  "Role":["Freelancer","Frontend Developer","UI Designer"]
  } 
  */

// ?function can't taken json formate

//? it only take properties and value not function

// parse  => Converts a JavaScript Object Notation (JSON) string into an object.

var receiveJson = JSON.parse(sendJson);

console.log(receiveJson);

// output:

// Object { firstName: "Dhanush", lastName: "kumar", Gender: "M", Role: (3) […] }

// console.log(typeof receiveJson);


// it support all language 
// it support all browser

// stringify()
// parse()

// data types in json

 // 6 types of data types in json 
 
//  1 => Number
//  2 => String
// 3 => Booalean 
// 4 => Arry
// 5 => Object
// 6 => null


// json with array

const names = [
  {
     "name": "John Doe",
     "age": 30,
     "occupation": "Software Engineer"
  },
  {
     "name": "Jane Doe",
     "age": 25,
     "occupation": "Doctor"
  }
]

// accessing the json data 

console.log(names[1].age);


// JSON Methods

	
// JSON.parse()

// It parses a JSON string and creates a JavaScript object.

	
// JSON.stringify()

// It converts a JavaScript object to JSON string.

const jsonString = JSON.stringify(names);
console.log(jsonString);

// [{"name":"John Doe","age":30,"occupation":"Software Engineer"},{"name":"Jane Doe","age":25,"occupation":"Doctor"}]

const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

// [
//   { name: 'John Doe', age: 30, occupation: 'Software Engineer' },
//   { name: 'Jane Doe', age: 25, occupation: 'Doctor' }
// ]



