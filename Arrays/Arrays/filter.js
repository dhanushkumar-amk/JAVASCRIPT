/** Arrays.prototype.filter() */

/** Returns the elements of an array that meet the condition specified in a callback function.
 A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. */

const fruits = ['apple', 'orange', 'mongo', 'banana'];

const result = fruits.filter((fruit) => fruit.length > 5);

console.log(result);

/** filter prime number in array */
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

const users = [
  {
    name: 'dhanushkumar',
    id: 1,
    active: true,
  },
  {
    name: 'Sanjay kumar',
    id: 2,
    active: true,
  },
  {
    name: 'ashwin',
    id: 3,
    active: false,
  },
];

console.log(users.filter((user) => user.active === true));

// { name: 'dhanushkumar', id: 1, active: true },
// { name: 'Sanjay kumar', id: 2, active: true }
