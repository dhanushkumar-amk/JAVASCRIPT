
// function expressions

// function expression are functions which are created inside an expression or inside the another syntax constructors



// function declaration
function game(){
    console.log("Function declaration");
}
game();

//-----------------------------------------------------------

// function expression function name id optional

// ex :

let game1 = function functionName(){
    console.log("Function declaration with function name ");
}
game1();



let games = function(){
    console.log("function expression");
}
games();
// but we don't call the function by function name we only call be variables



// another way to call the function expression

let games2 = function(){
    console.log("another way to call the function");
}
let anotherWayToCall = games2;
anotherWayToCall(); 


// one of the disadvantage of the function expression is 