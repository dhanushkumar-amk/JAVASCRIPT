/**
 * async & await | javascript
 * 
 */

// async function ca/t 

// promise 

let promise =  new Promise((resolve,reject) => {
    let user ={
        name : "Dhanush",
        address : "India",
    } 
    if(Object.keys(user) != 0){
        resolve(user);
    }else{
        reject(user)
    }
}) 


async function getData(){
//    console.log("async");
}
getData();