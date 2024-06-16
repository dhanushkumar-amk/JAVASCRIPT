// object destructuring

const person = {
  name: 'Dhanush',
  age: 19,
  isLive: true,

  Skills: {
    frontend: 'javaScript',
    backend: 'Javascript',
    database: 'Mongo db',
  },
  hobby: ['coding', 'sleeping'],
};

console.log(person);

// accessing object property

console.log(person.name); // dhanush
console.log(person.age); // 19

// another easy way to access the object using destructuring

// syntax :
// const {key values, key values} = variableName

const {name, age, isLive} = person;

console.log(name); // dhanush
console.log(age); // age

// to assign the default value in destructuring
const user = {
  firstName: 'Dhanush',
  lastName: 'Kumar',
};
const {firstName, lastName, defaultValue = 20} = user;
console.log(firstName); // Dhanush
console.log(lastName); // Kumar
console.log(defaultValue); // 20

// to rename the existing object in an destructuring
const user1 = {
  fName: 'Dhanush',
  lName: 'G',
};

const {fName: myFirstName, lName} = user;
console.log(myFirstName); // Dhanush
console.log(lName); // Kumar
