const user = {
    name : "Dhanush",
    greet() {
        console.log(`My name is ${this.name}`);
    }
}
console.log(user.greet);