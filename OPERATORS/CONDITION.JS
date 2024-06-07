// the conditional operator in JavaScript first evaluates an expression for a true or false value and then executes one of the two given statements depending upon the result of the evaluation. The conditional operator is also known as the ternary operator.



// syntax :
// var variable = condition ? exp1 : exp2;

// condition − It is a conditional statement. 

// exp1 − If the conditional statement evaluates truthy, control flow executes the exp1 expression.

// exp2 − If the conditional statement evaluates falsy, control flow executes the exp2 expression.


var num1 = 25;
var num2 = 20;
var res = num1 > num2 ? "Num1 is greatest" : "Num2 is greatest";
console.log(res);
// num1 is greatest


// Handling null values

const user = "";
const name = user? user : "stranger";
console.log(name);