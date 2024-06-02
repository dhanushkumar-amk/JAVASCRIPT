/* Array.prototype.tolocaleString() */// Converts a date and time to a string by using the current or specified locale.

const myDate = new Date('23 aug 1998 14:10:00 UTC');

console.log(myDate);
//1998-08-23T14:10:00.000Z

const date = myDate.toLocaleString('hi-IN', {});
console.log(date);

//23/8/1998, 7:40:00 pm
