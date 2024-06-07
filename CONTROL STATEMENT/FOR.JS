// The JavaScript for loop is used to execute a block of code repeteatedly, until a specified condition evaluates to false. It can be used for iteration if the number of iteration is fixed and known.


// Initialization − The loop initialization expression is where we initialize our counter to a starting value. The initialization statement is executed before the loop begins.

// Condition − The condition expression which will test if a given condition is true or not. If the condition is true, then the code given inside the loop will be executed. Otherwise, the control will come out of the loop.

// Iteration − The iteration expression is where you can increase or decrease your counter.



// SYNTAX :

// for (initialization; condition; iteration) {
    // Statement(s) to be executed if condition is true
// }


// EX :

let count;
for (let count = 0; count < 10; count++) {
   console.log(count);
}

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8



// for In loop   => object

// The for...in loop in JavaScript is used to loop through an object's properties. The JavaScript for...in loop is a variant of the for loop. The for loop can't be used to traverse through the object properties. So, the for...in loop is introduced to traverse through all object properties.

// syntax 

// for (variableName in object) {
//     statement or block to execute
//  }

// ex :

let car = {
    brand: "OD",
    model: "Q7",
    color: "Black",
 }
 for (key in car) {
    console.log(key);
 }

//  brand
//  model
//  color



 for of 