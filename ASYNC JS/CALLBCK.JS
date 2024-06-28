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





