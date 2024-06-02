/* Hoisting */
// function declaration
// function declaration always go up

function add() {
  console.log('adding function in declaration');
}
add();

// function expression

// functionExpression(); reference error

let functionExpression = function () {
  console.log('adding function in function expression');
};

functionExpression();

// function expression can't be called before the function expression declaration
