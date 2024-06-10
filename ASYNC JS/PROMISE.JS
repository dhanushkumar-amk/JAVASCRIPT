// promises

/* 
 
3 stage
 
 1=> pending
 2=> fulfilled
 3 => Rejected 

*/

/* syntax : 
let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
//   function(error) { /* code if some error */ }
);
*/

// crating the promise

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if(!error){
        resolve("yes ! resolved the promise")
    }
    else {
        reject("No rejected the promise")
    }
})


console.log(myPromise);