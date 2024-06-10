/**
 * async & await | javascript
 * 
 */

// async function can't wait for anything it works immediately 

// promise 

let promise =  new Promise((resolve,reject) => {
    setTimeout(() => {
        let user ={
            name : "Dhanush",
            address : "India",
        } 
        if(Object.keys(user) != 0){
            resolve(user);
        }else{
            reject(user)
        }
    },3000) 
  })
   


async function getData(){
//    console.log("async");
let userInfo  = promise.user;
console.log(userInfo);
}
getData();