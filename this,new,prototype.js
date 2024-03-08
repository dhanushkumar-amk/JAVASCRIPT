// ! this keyword// used to get the value in the object to transfer to the function// function creteCharacter(name) {//   return {//     name,//     greet: function () {//       console.log(`${this.name} say hello`);//     },//   };// }// const character = creteCharacter('dhanush');// character.greet();// output:// dhanush say hello// const obj = {//   name: 'John',//   greet: function () {//     console.log('Hello, ' + this.name);//   },// };// obj.greet(); // Hello, John// var person = {//   name: 'dhanush',//   hello: function () {
//     console.log('Hello' + ' ' + this.name);
//   },
// };

// person.hello();

//this keyword refers to the function that executes within the object to access the other property inside the object through function using this keyword

//! new keyword
//In JavaScript, the new keyword is used to create an instance of a user-defined object type or a built-in object type that has a constructor function. When you create an object using the new keyword, you're essentially invoking a constructor function to initialize properties and methods for that object.

// function character(name) {
//   this.name = name;
// }

// const character = new character('DhanushKumar');

// to creating the object using class with new keyword

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHello = function () {
//     console.log(
//       'Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   };
// }

// var person1 = new Person('Alice', 30);
// var person2 = new Person('Bob', 25);

//! prototype

// used to merge the two object  so used to connect the two different object

//  __proto__: object name

const warrior = {
  attack: function () {
    console.log('Smash!');
  },
};

const fighter = {
  name: 'hulk',
  __proto__: warrior,
};

fighter.attack();

const avengers = {
  assemble: function () {
    console.log(`${this.name} assemble`);
  },
};

const name = {
  name: 'hulk',
  __proto__: avengers, // __proto__ is keyword or method
};

name.assemble();

// recall

//? 1 => this keyword
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

// // function

// function Share(avengers_assemble) {
//   this.marvel = avengers_assemble;
//   console.log(this);
// }
// const shareVariable = new Share('hulk');

// ?================================

// this is a reference  variable,
// which refers the current object

// 2 => new keyword  === constructor

// new keyword is used to create a object from function, the new keyword automatically creates a empty object
// it means function to object

// 3 => prototype
