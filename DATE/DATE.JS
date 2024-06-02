/** Date() */ // const date = Date().toString(); default string method// Sun Jun 02 2024 22:32:59 GMT+0530 (India Standard Time)// console.log(date);const date = new Date();console.log(date);// 2024-06-02T17:04:04.694Z
const now = Date.now();
console.log(now);
// 1717347961605
// The Date.now() static method returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.

// Date.prototype.getDate()
// The getDate() method of Date instances returns the day of the month for this date according to local time.

const birthday = new Date('August 19, 1975 23:15:30');
const date1 = birthday.getDate();
console.log(date1);
