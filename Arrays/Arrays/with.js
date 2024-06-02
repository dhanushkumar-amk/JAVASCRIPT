/* Array.prototype.with() */const number = [1, 2, 3, 4, 5, 6];

console.log(number.with(2, 'three'));
// [ 1, 2, 'three', 4, 5, 6 ]

// it is used to replace the value of the particular index

// number[2] = "four";  ===  number.with(2, 'three')
