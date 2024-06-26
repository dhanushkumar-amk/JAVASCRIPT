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
console.log( person);  // { name: 'dhanush', age: 45, salary: 100000 }
delete person.age;
console.log( person); // { name: 'dhanush', salary: 100000 }



// Deleting Array element

const arr = [10, 20, 30, 40, 50, 60];
   delete arr[1];
   console.log(arr);  // [ 10, <1 empty item>, 30, 40, 50, 60 ]
   
   // if we delete the array element  it became empty but the position is same and length of the array is same 