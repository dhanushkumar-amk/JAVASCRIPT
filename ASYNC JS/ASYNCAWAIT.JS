
// await  is used to wait the value in the function 
// simply if you use the await the code block is waiting for the data 


// async makes a function return a Promise
// await makes a function wait for a Promise

const users = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const userData  = await response.json();
    console.log(userData);
    return userData; 
}

const anotherFunction  =async() => {
    const data = await users();
    // console.log(data);
}

//  users()
anotherFunction();

