const users = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const userData  = await response.json();
    console.log(userData);
    return userData; 
}


// await  is used to wait the value in the function 
// simply if youuse the await 