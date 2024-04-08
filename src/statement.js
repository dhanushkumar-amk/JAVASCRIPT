// for in loop//////////////////////
///
///
//
//
//
//
//
// forin loop are used to get the each value in the object//////////////////////////////////////////
//
//
//
//
//

var decoration = {
  color: 'Red',
  Radius: 10,
};

for (var prop in decoration) {
  console.log(decoration[prop]); //  to get value in the object
}
/* output
color
Radius
*/

// decoration['color'];

//  using for loop in array

var Arr = ['hello', 1, 'Javascript', Boolean];

for (var x in Arr) {
  console.log(Arr[x]);
}
/**
 *
 * hello statement
 statement.
Javascript
 */

// if Statement

// syntax \
/*

if(Condition){
  statement block // true block statement
}


*/

// ex:
let studentName = 10;

if (studentName >= 7) {
  console.log('the age is ok' + ' ' + studentName);
}

// let studentName = undefined;
// let studentName = null;

// && || !  =>  logical operator

// if else
// switch

// ternary operator

let a = 45;
let b = 200;
let c = 300;

if (a > b && a > c) {
  console.log(a + ' ' + 'a is Greatest');
} else if (b > c) {
  console.log(b + ' ' + 'b is Greatest');
} else {
  console.log(c + ' ' + 'c is Greatest');
}

// console.log(Result);
