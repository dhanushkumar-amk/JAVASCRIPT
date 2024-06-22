


// closures

// Closure is a future where an inner function has access to the outer function's variables even after the outer function has executed

// inner function access the outer function scope 



const myName = "Dhanushkumar"; // global scope
function outerFunction(){
    console.log("Accessing the global scope", myName);
    
    function innerFunction(){
        console.log("Can i access the function scope ");
    }
}


outerFunction()

 