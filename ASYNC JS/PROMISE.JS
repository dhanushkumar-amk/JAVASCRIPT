// promises

/* 
 
3 stage
 
 1=> pending
 2=> fulfilled
 3 => Rejected 

 While a Promise object is "pending" (working), the result is undefined.

When a Promise object is "fulfilled", the result is a value.

When a Promise object is "rejected", the result is an error object.
*/

// ! syntax :

// let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
//       myResolve(); // when successful
//       myReject();  // when error
//     });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    // myPromise.then(
    //   function(value) { /* code if successful */ },
    //   function(error) { /* code if some error */ }
    // );

    
    
// crating the promise

const myPromise = new Promise((resolve, reject) => {
    const error = true;
    if(!error){
        resolve("yes ! resolved the promise")
    }
    else {
        reject("No rejected the promise")
    }
})


console.log(myPromise);

// Promise.then() takes two arguments, a callback for success and another for failure.

// Both are optional, so you can add a callback for success or failure only.


myPromise
.then(value => {
 return   value
     // yes ! resolved the promise
})
.then(newValue =>console.log(newValue))  
.catch(err => {
    console.log(err);
})

// .then only used when the promise become fulfilled 


const nextPromise = new Promise((resolve, rejected) => {
    setTimeout(() => {
        
    }, );
})