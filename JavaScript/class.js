// class are used to create object easily//// class isa collection of fields and methods///////////////////////////////////// /// //// //////////////////////////
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
/*class Employee {
  a = 100; // a is a field
  //   add() {
  // add is a method
  // console.log(this.a);
}


// calling the class method using object

var employee = new Employee();
*/
// console.log(employee.add());

// creating a function inside  a class

class Person {
  firstName = 'dhanush';
  lastName = 'kumar';

  fullName() {
    console.log(this.firstName + this.lastName);
  }
}

// fullName(); error   fullName is not defined
var person = new Person();
person.fullName();

// ? instance = object

// Getters and Setters
// Getters and Setters are the properties

// advantages of getter and setter

// setter
// keyword set
// setter must contains the parameter and arguments

class Avengers {
  set avengersName(name) {
    this.name = name;
    console.log(this.name + ' ' + 'Smash!');
  }
}

var avengers = new Avengers();
avengers.avengersName = 'Hulk';

// output :
// Hulk Smash

//getter

// get keyword
// get is used to get the element

class Avengers1 {
  #name = 'Iron Man';

  get Assemble() {
    console.log('I am' + ' ' + this.#name);
  }
}
var avengers = new Avengers1('');
// avengers.Assemble();
avengers.Assemble;
// I am Iron Man
// output  :
// Iron Man

// # property is known as private

//! constructor

//classes are one of the features introduced in the Es6 version of java Script

class ClassName {
  constructor(name, age) {
    // we  function always have the constructor name inside the class

    this.name = name;
    this.age = age;
  }
  greet() {
    return 'Hello' + ' ' + this.name;
    // Hello dhanushkumar
  }
  changeName(newName) {
    this.name = newName;
  }
}
var className = new ClassName('dhanushkumar', 19);
// var className1 = new ClassName('sanjaykumar', 45);
console.log(className.greet());
// console.log(className1);

className.changeName('SanjayKumar');
console.log(className.name);

// ClassName().value;

// java Script Expression

// A class expression provides  you alternative way  t0o define a new class

// its  is similar to a function expression, bu it uses the class keyword instead of the function keyword

// class expressions can be named or unnamed.

let Person5 = class {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log('hello' + ' ' + this.name);
  }
};

// var person = new Person5('Hari');

// console.log(person);

class Student extends Person5 {
  constructor(name) {
    //
    // javaScript Super
    super(name);
  }
}

var student1 = new Student('Jack');

student1.greet();

// output:
// hello Jack
