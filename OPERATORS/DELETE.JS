// The JavaScript delete operator  removes a property from an object.
// It removes the property as well as value of the property from the object.

// It works only with the objects not with the variables or functions.

// syntax :
// delete obj.property;
//  OR
// delete obj["property"];

// ex :

const person = {
  name: 'dhanush',
  age: 45,
  salary: 100000,
};
console.log();
delete person.age;
console.log(person);
