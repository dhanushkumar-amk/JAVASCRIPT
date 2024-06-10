/**
 * async & await | javascript
 * 
 */

// async function can't wait for anything it works immediately 

// promise 

let promise =  new Promise((resolve,reject) => {
    setTimeout(() => {})
   


async function getData(){
//    console.log("async");
let userInfo  = promise;
console.log(userInfo);
}
getData();