// pure and inPure says how to declare the function 


// pure function

// pure function are functions that always return the same output for the same input and do not hav any side effects

function add(a,b){
    return a + b;
}
const result1 = add(4,5);
const result2 = add(5,5);
console.log(result1);
console.log(result2);