/* ! this keyword */ //////// [];///////////////

//

//
//
//
// [];
//
//
///
//
//

//

//

//

//

//
//
// [];
//
//
///
//
//

//

//

//

//

//
//
// [];
//
//
///
//
//

//

//

//

//

var avengers = 10;

/* used to get the value in the object to transfer to the function*/
//
//  function creteCharacter(name){
//   return {
//name,
//     greet: function () {
//       console.log(`${this.name} say hello`);
//     },
//   };
// }
// const character = creteCharacter('dhanush');
// character.greet();
// output:
// dhanush say hello
// const obj = {
//   name: 'John',
//   greet: function () {
//     console.log('Hello, ' + this.name);
//   },
// };

// obj.greet();
// Hello, John// var person = {
//   name: 'dhanush',//   hello: function () {
//     console.log('Hello' + ' ' + this.name);
//   },// };
// person.hello();
//this keyword refers to the function that executes within the object to access the other property inside the object through function using this keyword
//! new keyword
//In JavaScript, the new keyword is used to create an instance of a user-defined object type or a built-in object type that has a constructor function. When you create an object using the new keyword, you're essentially invoking a constructor function to initialize properties and methods for that object.// function character(name)
//   this.name = name;// }
// const character = new character('DhanushKumar');
// to creating the object using class with new keyword
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHello = function () {
//     console.log(
//       'Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.'//     );
//   };// }
// var person1 = new Person('Alice', 30);
// var person2 = new Person('Bob', 25);
//! prototype
// used to merge the two object  so used to connect the two different object
//  __proto__: object name
// const warrior = {
//   attack: function () {
//     console.log('Smash!');
//   },
// };
// const fighter = {
//   name: 'hulk',
//   __proto__: warrior,
// };

// fighter.attack();

// const avengers = {
//   assemble: function () {
//     console.log(`${this.name} assemble`);
//   },
// };

// const name = {
//   name: 'hulk',
//   __proto__: avengers, // __proto__ is keyword or method
// };

// name.assemble();

// recall

//? 1 => this keyword

// this is a reference  variable,
// which refers the current object

// is used in object oriented language

// within objectla function create panna athu object ah denote pannum
// method => obj

// traditional la object create panna global la denote pannum
// function => global

// this refers to the current object

// ex:

// object
// const channel = {
//   title: 'dhanush',
//   languages: ['tamil', 'malayalam', 'telugu'],
//   subscribe: function () {
//     console.log(this.title);
//   },
//   showVideo: function () {
//     this.languages.forEach(function (lan) {
//       console.log(this.title + ' = ' + lan.toUpperCase());
//     }, this);
//   },
// };

// channel.subscribe();
// channel.showVideo();

// function

// function Share(avengers_assemble) {
//   this.marvel = avengers_assemble;
//   console.log(this);
// }
// const shareVariable = new Share('hulk');

// ?================================

// this is a reference  variable,
// which refers the current object

// current

// var myName = 'dhanush';

// function myFunction() {
//   console.log(myName); // global this => window option
// }

// let myInfo = {
//   name: 'dhanush',
//   role: 'developer',
//   address: 'salem',

//   getInfo: function () {
//     console.log(this.name);
//     console.log(this.role);
//     console.log(this.address);
//   },
// };
// myInfo.getInfo();
// myFunction();

// ? 2 => new keyword  === constructor

// function Person(first, last) {
//   (this.firstName = first),
//     (this.LastName = last),
//     (this.getFullName = function () {
//       return this.firstName + ' ' + this.LastName;
//     });
// }
// object constructor  new operator

// object
// var   person = {
//   firstName: 'Elon',
//   LastName: 'Mask',
// };

//constructor function is similar as a  regular function but it is good practice to Capitalize the first letter of your constructor function

// function
// function Person(first, last) {
//   this.firstName = first;
//   this.LastName = last;
// }

// const person1 = new Person('elon', 'musk'); // new refers ro the new object
// const person2 = new Person();

// to add the property to the function
// person1.age = 52;

// console.log(person1);
// console.log(person1.age);

// to add function in the object

// person1.functionTrail = function () {
//   console.log('hello World');
// };
// person1.functionTrail();

//How to add one function in the constructor function:

// function Person(first, last) {
//   (this.first = first),
//     (this.last = last),
//     (this.fullName = function () {
//       return this.first + ' ' + this.last;
//     });
// }

// var person1 = new Person('dhanush', 'Kumar');

// console.log(person1.fullName());

// const person1 = new Person('elon', 'musk'); // new refers ro the new object
// const person2 = new Person('elon', 'musk'); // new refers ro the new object

// new keyword is used to create a object from function, the new keyword automatically creates a empty object
// it means function to object

// ? 3 => prototype

// var person = {
//   name: 'dhanush',
// };
// console.log(person);

// we can use the prototype to add properties and methods to a constructor function

// and object inherit the property and method form   prototype

// to add the properties to the  single single function
// function Person(first, last) {
//   this.firstName = first;
//   this.LastName = last;
// }

// const person1 = new Person('elon', 'musk'); // new refers ro the new object
// const person2 = new Person();

// to add the property to the function
// person1.age = 52;

// console.log(person1);

// var Person = function (name, address) {
//   (this.name = name),
//  (this.address = address);
// };

// to add a property to the constructor function using prototype method

// Person.prototype.age = 25;

// var person1 = new Person('dhanush', 'india');
// var person2 = new Person('aswin', 'america');

// console.log(Person1);

// var Person = function (first, last) {
//   (this.first = first), (this.last = last);
// };

// Person.prototype.age = 52;

// var person1 = new Person('dhanush', 'kumar');

// console.log(person1.age);

///----------------------------- ***************** ---------------------------------------///
