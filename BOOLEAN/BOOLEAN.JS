// boolean in js

// A JavaScript Boolean represents one of two values: true or false

// / Boolean Values
// Very often, in programming, you will need a data type that can only have one of two values, like

// YES / NO
// ON / OFF
// TRUE / FALSE

// boolean as function

const res = Boolean(10 > 7);
console.log(res); // true

// also use as 
const res2 = (10 > 8)
console.log(res2); // true

// ? ! Everything With a "Value" is True

// The Boolean value of 0 (zero) is false:
let x = 0;
console.log(Boolean(x)); // false

// The Boolean value of -0 (minus zero) is false:
let y = -0;
console.log(Boolean(y)); // false


// The Boolean value of "" (empty string) is false:
let empStr = "";
console.log(Boolean(empStr)); // false

let empStr1 = " "
console.log(Boolean(empStr1)); // true

// The Boolean value of undefined is false:
let z ;
console.log(Boolean(z)); // false

// same as  null, false,NAN


//  booleans can also be defined as objects with the keyword new:
const Bool = new Boolean();


let x1 = false;
let y1 = new Boolean(false);

console.log( typeof x1); // boolean
console.log( typeof y1); // object

console.log(x1 == y1); // true




