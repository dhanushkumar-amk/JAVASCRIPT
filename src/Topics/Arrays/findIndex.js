/** Arrays.prototype.findindex() *//** Returns the index of the first element in the array where predicate is true, and -1 otherwise. */

const number = [5, 10, 20, 4, 78, 49];

const result = number.findIndex((num) => {
  return num > 50;
});

console.log(result);
// output : 4 because 78 meets the4 index

/** it return index value of the particular condition meets the value  */
