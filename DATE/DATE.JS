/** Date()  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
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

//=============================================================================

const date = Date().toString(); // default string method// Sun Jun 02 2024 22:32:59 GMT+0530 (India Standard Time)//
console.log(date); //  const date = new Date();console.log(date);// 2024-06-02T17:04:04.694Z
const now = Date.now();
console.log(now);
// 1717347961605

// to get date
const birthday = new Date('August 19, 1975 23:15:30');
const date1 = birthday.getDate();
console.log(date1);
// 19

// to get day
const birthday1 = new Date('August 19, 1975 23:15:30');
const day1 = birthday1.getDay();
// Sunday - Saturday : 0 - 6
console.log(day1);

// get full year to get specific year
const moonLanding = new Date('July 20, 69 00:20:18');
console.log(moonLanding.getFullYear());
// 1969

// get hours to get specific hour
const birth = new Date('March 13, 08 14:20');
console.log(birth.getHours());
// 14

// ate.prototype.getMilliseconds() to get specific millisecond
const moon = new Date('July 20, 69 00:20:18');
moonLanding.setMilliseconds(123);
console.log(moon.getMilliseconds());

// 0

// to get the minutes
const minute = new Date('March 13, 08 04:20');
console.log(minute.getMinutes());
// Expected output: 20

// getMonth() used to get the month
const month = new Date('July 20, 69 00:20:18');
console.log(month.getMonth()); // (January gives 0)
// Expected output: 6

// getSeconds() to get specific second
const second = new Date('July 20, 69 00:20:18');
console.log(second.getSeconds());
// Expected output: 18

// The toLocaleDateString() method of Date instances returns a string with a language-sensitive representation of the date portion of this date in the local timezone. In implementations with Intl.DateTimeFormat API support, this method simply calls Intl.DateTimeFormat.

const event1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

console.log(event1.toLocaleDateString('de-DE', options));
// Expected output (varies according to local timezone): Donnerstag, 20. Dezember 2012

// toLocaleString convert the local string

const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(event.toLocaleString('en-GB', {timeZone: 'UTC'}));
// Expected output: "20/12/2012, 03:00:00"

// Korean uses year-month-day order and 12-hour time with AM/PM
console.log(event.toLocaleString('ko-KR', {timeZone: 'UTC'}));
// Expected output: "2012. 12. 20. 오전 3:00:00"
