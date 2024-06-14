// factory function



function createFunction(name, interest){
    return {
        name ,
        interest ,
        greeting(){
            let msg = `my name is ${this.name}, i love ${this.interest}`;
            console.log(msg);
        }
    }
}

let person = createFunction("Dhanush", "Coding");

// incase we want to add some another person we can add through 
person.greeting();
// console.log(person);


