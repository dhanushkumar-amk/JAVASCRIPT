const user = {
    name : "Dhanush",
    greet() {
        console.log(`My name is ${this.name}`);
    }
}
// prototype is a unbuild function in object

console.log(Object.prototype.toString());