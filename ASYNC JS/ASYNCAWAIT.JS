const users = () => {
    const response = awa fetch("https://jsonplaceholder.typicode.com/users")
    const userData  = response.json();
    console.log(userData);
    return userData; 
}