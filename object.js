// object contains the key : values,// syntax:// var person: {//     id: number;//// name: string;//     age: number;//     status: boolean;// avengers: () => void;// }// var person = {//   id: 1,//   name: 'dhanushkumar',//   age: 17,//   status: true,// };// another method// old method// used only on the passing the variable inside the object// var person1 = Object.create({//   id: 1,//   name: 'dhanushkumar',//   age: 17,//   status: true,// });// person.name;//first method// console.log(person.name);// dhanushkumar// second method// console.log(person['name']);// dhanushkumar// console.log(person.address);// undefined// ---------------------------------------------------------------------------//to change the values inside the object// person.id = 10;// ----------------------------------------------------------------------------------// to remove the property inside the object  using delete method// syntax// delete person.id;// Object { name: "dhanushkumar", age: 17, status: true }// in operator// to check the value inside the object if object is present return true else return false

// var person = {
//   id: 1,
//   name: 'dhanushkumar',
//   age: 17,
//   status: true,
// };

// console.log('name' in person);
// true

// otherwise
// console.log('address' in person);
// false

// var person = {
//   id: 1,
//   name: 'dhanushkumar',
//   age: 17,
//   status: true,
// };

// values method
//used to get values inside the object with out key property

// var value = Object.values(person);
// console.log(value);

//key method
//used to get the values inside the object with out key property
// Returns the names of the enumerable string properties and methods of an object.
// var value = Object.keys(person);
// console.log(value);

//entries method
//Returns an array of key/values of the enumerable properties of an object
// it is used to covert the object to arrays
// it will arrange the array in accenting order
// var person = {
//   id: 1,
//   name: 'dhanushkumar', // key : value,
//   age: 17,
//   status: true,
// };
// var entries = Object.entries(person);

// console.log(entries);
//output:
// Array(4) [ (2) […], (2) […], (2) […], (2) […] ]
// ​
// 0: Array [ "id", 1 ]
// ​
// 1: Array [ "name", "dhanushkumar" ]
// ​
// 2: Array [ "age", 17 ]
// ​
// 3: Array [ "status", true ]

// freeze method
//Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
// so we don't add any values inside the object

// var person = {
//   id: 1,
//   name: 'dhanushkumar', // key : value,
//   age: 17,
//   status: true,
// };

// Object.freeze(person);
// person.id = 4;

// seal method
//prevents the modification of attributes of existing properties, and prevents the addition of new propertie
// var person = {
//   id: 1,
//   name: 'dhanushkumar', // key : value,
//   age: 17,
//   status: true,
// };

// Object.seal(person);

/*!======================================= */

// var person = {
//   id: 1,
//   name: 'dhanushkumar', // key : value,
//   age: 19,
//   status: true,
//   // fullname: function () {
//   //   // this.name + ' ' + this.id;
//   //   // return `${this.name} ${this.id}`;
//   //   console.log(this.name);
//   // },

//   // fullname() {
//   //   console.log(this.name);
//   // },
// };

// accessing the method in the object
// person.fullname(); // calling the function()
// dhanushkumar

//object merging
// merging the array using assign method

// var personMethod = {
//   yearOfBirth() {
//     // console.log(10 -4);
//     console.log(new Date().getFullYear() - this.age);
//   }, // new date() is a function to returns the current date
// };

// //object cloning
// var personCloning = Object.assign({}, person);
// console.log(personCloning);
// console.log(person.yearOfBirth());

// console.log(person);
// accessing the object in two ways

// 1. [ . ](dot) notation
// 2.

// object constructor
// const objectName = new object()

//object literals
// const object = new object{};

//accessing the property in an object
// variableName.property

// spread operator  ued to, merge the two or  more object
// just copy the array
// var person1 = {
//   id: 1,
//   name: 'dhanushkumar', // key : value,
//   age: 19,
//   status: true,
// };
// var person2 = {
//   id: 2,
//   name: 'sanjay kumar',
//   age: 18,
//   status: false,
// };

// var SpreadOperator = {...person1, ...person2};
// console.log(SpreadOperator);

// delete

// delete person2.age;

// to add the property to the object
// var person1 = {
//   id: 1,
//   name: 'dhanushkumar', // key : value,
//   age: 19,
//   status: true,
// };

// person1.rollno = 10;
// console.log(person1);
