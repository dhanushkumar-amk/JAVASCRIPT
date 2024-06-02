/** Array.prototype.every() */
const marks = [100, 99, 20, 45, 100];

// console.log(marks.every());

const result = marks.every((mark) => {
  return mark > 20;
  /** the all condition will be satisfied then only it return true else return false */
});
/* false*/

console.log(result);
