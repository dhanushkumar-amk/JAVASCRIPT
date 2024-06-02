/* ! Array.prototype.sort();*/ const fruits = [
  'apple',
  'orange',
  'mongo',
  'banana',
];
// [ 'apple', 'banana', 'mongo', 'orange' ]
const result = fruits.sort();
console.log(result);

const number = [98, 54, 5, 89, 43, 789, 43];
const result1 = number.sort();
console.log(result1);

const descendingOrder = number.sort((a, b) => b - a);
console.log(descendingOrder.toString());

// 789,98,89,54,43,43,5
