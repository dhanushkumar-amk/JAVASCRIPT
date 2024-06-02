/** Arrays.prototype.entries() */ /** Returns an iterable of key, value pairs for every entry in the array */
const fruits = ['apple', 'orange', 'mongo', 'banana'];
const fruit = fruits.entries();

console.log(fruit);

// for (const eachFruit of fruit) {
//   console.log(eachFruit[0]); // it give the key value means index
//   console.log(eachFruit[1]); // it gives value of that particular key
//   console.log(eachFruit);
// }

// additional information

console.log(fruit.next().done);

// next method is used only for one iteration the balance iteration will be stopped
//  { value: [ 0, 'apple' ], done: false }
