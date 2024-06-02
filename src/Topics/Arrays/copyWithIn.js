/** array.prototype,copyWithin() */ /**

Returns the this object after copying a section of the array identified by start and end to the same array starting at position target */

const fruits = ['apple', 'orange', 'mongo', 'banana'];

console.log(fruits.copyWithin(0, 3));

// ! here 0 is a value  of index that can be changed 3 is a index that the value can be replaced with index 0

// ex: 0 has apple and  3 has banana so orange was replaced by banana
// output : [ 'banana', 'orange', 'mongo', 'banana' ]

// copyWithin(target: number, start: number, end?: number | undefined): string[]
// If target is negative, it is treated as length+target where length is the length of the array.
