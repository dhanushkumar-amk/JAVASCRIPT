/** Arrays.prototype.flatMap() *//** Calls a defined callback function on each element of an array. Then, flattens the result into a new array. This is identical to a map followed by flat with depth 1. */

const arr = [1, 2, 3];

const result = arr.flatMap((num) => {
  return num === 2 ? [22, 222] : 0;
});

console.log(result);

/** [ 0, 22, 222, 0 ] */
