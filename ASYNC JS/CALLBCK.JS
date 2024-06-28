// CALLBACK function

// simple definition is function with another function

// callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action

// simple example for callback hell
setTimeout(() =>{
    console.log("One Second");
    setTimeout(() =>{
        console.log("Two Seconds");
        setTimeout(() =>{
            console.log("Three Seconds");
            setTimeout(() =>{
                console.log("Four Seconds");
                setTimeout(() =>{
                    console.log("Five Seconds");
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000) //1000 = 1s

// setInterval
// setTime Out



setTimeout(() => {
    console.log("Callback function");
},6000)




// callback function in real time example


// callback is mainly used to execute the element that function can be executed in every time
// we can use multiple element can get each element

// callback function == each iteration that function will be called
const numbers = [1,2,3,4,5,6];

numbers.forEach((num) => {
    console.log(num);
})







