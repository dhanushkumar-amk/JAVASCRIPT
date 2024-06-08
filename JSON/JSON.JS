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

