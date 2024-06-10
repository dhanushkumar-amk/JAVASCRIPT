/**
 * async & await | javascript
 * 
 */

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


function getData(){
    alert("")
}
getData();