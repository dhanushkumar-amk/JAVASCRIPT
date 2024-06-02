// ? try Catch Method// it handle errors in js and the program can't stop//////////////
//
//
//
//
//
//
//
//
//
//
//
//

function add(a, b) {
  return a + b;
}

// with error its execute else skip
try {
  var result = add(10, 2);
  // Uncaught ReferenceError: add is not defined

  console.log(result);
} catch (e) {
  console.log({name: e.name, message: e.message});
}

console.log('bye');

// try catch finally method

var result = 0;
function sub(a, b) {
  return a * b;
}
try {
  result = sub(10, 2);
  // Uncaught ReferenceError: add is not defined

  console.log(result);
} catch (e) {
  console.log({name: e.name, message: e.message});
} finally {
  //finally is must declare if the try catch execute or else
  console.log({result});
}

console.log('bye');

/* output:
  Object { name: "ReferenceError", message: "sub is not defined" }
  statement
  Object { result: 0 }
  statement
  bye
  
  
  no error
  
  Object { result: 20 }
  statement
  bye
  */

// types of error

(' use Strict');

// reference error
// syntax error
// type error

/* js error handle by 
  
try 

 write the code inside the try  

catch

used to catch the error

finally

it execute always

  */

try {
  const name = 'dhaussh';
  name = 'avengers';
} catch (e) {
  console.table({name: e.name, message: e.message});
}

// table
//error
