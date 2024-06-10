const users = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const userData  = aresponse.json();
    console.log(userData);
    return userData; 
}


// await  is used to wait the value in the funvtion