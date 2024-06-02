/** Arrays.prototype.flat() */
/**Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. */

// ?  convert matrix into one dimensional array

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/** one way */
const flat = [].concat(...matrix);
console.log(flat);

/** another way matrix.flat */

const result = matrix.flat();
console.log(result);
