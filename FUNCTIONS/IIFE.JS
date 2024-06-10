// Self Invoking Functions

// The self-invoking functions are JavaScript functions that execute immediately as they are defined.


// a self-invoking function is also called immediately invoked function expression (IIFE).



// Syntax :
/*
(function () {
    function body
 })();
 
 */

 // simple  Example
 
 
//  (function(){
//     console.log("Hello");
//  })()
 
 // function with Parameter and arguments
 
(function(name, age){
    console.log(name);
    console.log(age);
})("dhanush", 19)