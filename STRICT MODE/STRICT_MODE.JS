// The 'use strict' literal expression is used to add the strict mode in the JavaScript code. It removes the silent errors from the code, such as you can't use the variable without declaration, you can't modify the readable property of the object,


// syntax :
// 'use strict';

// global scope
// When you add the 'use strict' at the top of the JavaScript code; it uses the strict mode for the whole code.


// with strict mode
"use strict";
let y = 50; // This is valid
console.log(y);
x = 100; // This is not valid
console.log(x);  // x is not defined


// without strict mode

let y1 = 100;
x1 = 200;
console.log(y1);
console.log(x1);