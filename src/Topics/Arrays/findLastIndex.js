/** Arrays.prototype.findLastindex() */
const number = [5, 10, 20, 4, 78, 49, 85, 20, 28];

const result = number.findLastIndex((num) => {
  return num > 50;
});

console.log(result);

/**it same as the findLast method  like right to left */
