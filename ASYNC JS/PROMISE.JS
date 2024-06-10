// promises

/* 
 
3 stage
 
 1=> pending
 2=> fulfilled
 3 => Rejected 

*/

// crating the promise

const myPromise = new Promise((resolve, rejected) => {
    const error = false;
    if(!error){
        resolve("yes ! resolved the promise")
    }
    else {
        rejected("No rejected the promise")
    }
})
