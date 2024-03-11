// date function//// /// /////
///
//
//
//
///
//
//
//
//
//
///
///
//
//
//
//
////
//////////

var date = new Date();
console.log(date);

// get date
console.log(date.getDate());
// get day

console.log(date.getDay());
// console.log(date);
/* 
0 => sunday,
1 => Monday,
2 => Tuesday,
3 => Wednesday,
4 => Thursday,
5 => friday,
6 => Saturday

*/
var Days = [
  'sunday',
  'Monday',
  'Tuesday',
  ' Wednesday',
  'Thursday',
  'friday',
  ' Saturday',
];
// var daysList = Days;

// var getDay = daysList;

// console.log(daysList.getDay());

// current year
//
console.log(date.getFullYear());

// 2024

console.log(date.getHours());
// current minutes
console.log(date.getMinutes());
// current second
console.log(date.getSeconds());

// current millisecond

// 1000ms => 1s
console.log(date.getMilliseconds());

// current month
console.log(date.getMonth());
/*
 0 => january
 2 => feb,
 .
 . 
 . 
 11 => december
 */

var date = new Date('07 July 2004');

console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());

var now = new Date();

// used to get local date and time
// en => english
// IN => india
console.log(now.toLocaleString('en-IN'));
console.log(now.toLocaleString('en-US'));

//
