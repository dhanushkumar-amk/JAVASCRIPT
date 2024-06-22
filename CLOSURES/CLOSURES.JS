


// closures

// Closure is a future where an inner function has access to the outer function's variables even after the outer function has executed

// inner function access the outer function scope 



// const myName = "Dhanushkumar"; // global scope
function outerFunction(outsideData){
    
    const user = outsideData;
    console.log("Accessing the global scope", user);
    
    function innerFunction(){
        console.log("inner function is worked");
    }
    innerFunction();
}

// console.log(user); 
 // user can't be access outside the function


outerFunction("outside outside")

 


// example for closure

function points(){
    const totalPoints = 0;
    
    const  addPoints = () => {}
    const  removePoints = () => {}
    const  getTotalPoints = () => {}
}