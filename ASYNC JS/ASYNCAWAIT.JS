const users = () => {
    const response =  fetch("https://jsonplaceholder.typicode.com/users")
    const userData  = response.json();
    console.log(userData);
    return userData; 
}