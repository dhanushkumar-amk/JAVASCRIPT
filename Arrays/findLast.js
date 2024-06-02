/** Arrays.prototype.findLast() */
const number = [5, 10, 20, 4, 78, 49];

const result = number.findLast((num, index, arr) => {
  console.log(index, arr);
  return num > 50;
});

console.log(result);

// it always see the last to front order
// from right to left
