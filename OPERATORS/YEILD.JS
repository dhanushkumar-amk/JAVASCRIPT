// YIELD OPERATOR

// The yield operator in JavaScript is used to pause and resume the generator function asynchronously. In JavaScript, generator functions are the special functions that you can pause or resume while executing. The generator functions are defined with the 'function*' syntax. The yield keyword can only be used within the generator function that contains it.

// SYNTAX : 
// yield expression;

// yield operator in generator function

function* test() {
    yield 20;
    yield [1,2,3];
    yield "Hello World";
}
let res = test();
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());


// { value: 20, done: false }
// { value: [ 1, 2, 3 ], done: false }
// { value: 'Hello World', done: false }
// { value: undefined, done: true }


// 'function*' is used to create a generator function named test, and the yield keyword is used to return 'expression' from the function.