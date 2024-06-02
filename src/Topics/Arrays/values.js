/*Arrays.prototype.value()*/
/**values() method returns only value of an array */

const fruits = ['apple', 'orange', 'mongo', 'banana'];
const fruitValue = fruits.values();

console.log(fruitValue);

for (const value of fruitValue) {
  console.log(value);
  //   console.table(value);
}

// apple
// orange
// mongo
// banana
