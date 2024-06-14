// factory function

function createFunction(name, interest){
    return {
        name : name,
        interest ,
        greeting(){
            let msg = `my name is ${this.name}, i love ${this.interest}`;
            console.log(msg);
        }
    }
}

let person = createFunction("Dhanush", "Coding");
person.greeting();
// console.log(person);