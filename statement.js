// for in loop//////////////////////////////////////// for in loop are used to get the each value in the object//////////////////////////////////////////
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
