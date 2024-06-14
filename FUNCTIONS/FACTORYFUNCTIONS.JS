// factory function

function createFunction(name){
    return {
        name : name,
        greeting(){
            let msg = `my name is ${this.name}, i love ${this.interest}`;
            console.log(msg);
        }
    }
}

let person = createFunction("Dhanush");
person.greeting();
// console.log(person);