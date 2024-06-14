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

// incase we want to add some liine of code
person.greeting();
// console.log(person);


