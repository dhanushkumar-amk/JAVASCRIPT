/* two types of export 1 => individual item export2 => Group item export

*/

// 1 => individual item export

// named export
// A named export allows you to export multiple values from a single module by explicitly specifying their names.

export let myName = 'Dhanushkumar';
export let myAddress = 'Pollachi';
export let myEmail = 'dhanushkumar@gmail.com';

// 2 => Group item export

let myName1 = 'Sanjay Kumar';
let myAddress1 = 'Coimbatore';
let myEmail1 = 'Sanjaykumar@gmail.com';

export {myName1, myAddress1, myEmail1};

// default export are used to export single value like array,
//object, function etc

// using array
let user = ['dhanush', 12, 'student', 'pollachi'];

// export default user;

// using  object

var obj = {
  userName: 'dhanush',
  userAge: 18,
};

export default obj;
