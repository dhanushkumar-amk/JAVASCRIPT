// LOGICAL AND   => &&
// LOGICAL OR    => ||
// LOGICAL NOT   => !



// LOGICAL AND   => &&

// both condition is true then return true else return false

true && true; // returns true
true && false;// returns false
false && true; // returns false
false && false; // returns false


console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// The logical OR (||) operator

// The logical OR (||) operator also evaluates the operands from left to right. If the first operand can be converted to true, it will return the value of first operand, otherwise it will return the value of the second operand.


true || true; // returns true
true || false; // returns true
false || true; // returns true
false || false; // returns false

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// if any one condition is true then return true else if the both condition is false return false



// Logical NOT (!) Operator

// The logical NOT (!) Operator is a unary operator. It returns false if the operand can be converted to true, otherwise it returns true.


// Logical Operators Precedence

// Logical NOT (!)
// Logical AND (&&)
// Logical OR (||)