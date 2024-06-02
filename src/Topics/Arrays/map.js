/* arrays.prototype.map()// Calls a defined callback function on each element of an array, and returns an array that contains the results.*/ const fruits =
  ['apple', 'mongo', 'banana'];

fruits.map((fruit) => {
  //   console.log(fruit);
  return console.log(fruit.toUpperCase());
});

const numbers = [1, 2, 3, 4, 5, 6];

const doubleNumber = numbers.map((number) => {
  return number * 2;
});

console.log(doubleNumber);
