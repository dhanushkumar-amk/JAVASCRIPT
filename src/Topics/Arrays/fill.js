/** Array.prototype.fill() */
/** (method) Array<number>.fill(value: number, start?: number | undefined, end?: number | undefined): number[]
Changes all array elements from start to end index to a static value and returns the modified array */

const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 3, 4];
const array3 = [1, 2, 3, 4];

console.log(array1.fill(0, 2, 4)); // [ 1, 2, 0, 0 ]
console.log(array2.fill(4, 3)); // [ 1, 2, 3, 4 ]
console.log(array2.fill(4)); // [ 4, 4, 4, 4 ]
