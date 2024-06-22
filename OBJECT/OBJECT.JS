// object

// creating the object

// 1 => object constructor
const objectName = new Object()


// 2 => object literals
const objectName2 = {} // it automatically convert into object constructor

// object consists key and values

const person = {
    firstName : "Dhanush",
     lastName : "Kumar",
     age : 19,
     isAlive : true,
     fullName(){ // function within the object is called methods
        console.log(`my name is ${this.firstName}${this.lastName}`);
     },
}

// getting object values

person.fullName();
console.log(person.firstName);
console.log(person.lastName);


// merging the objects
const person1 = {
    yearOfBirth(){
        const currentData = new Date();
        const age = 19;
        const result = currentData.getFullYear() - age;
        console.log(result);
    }
}

person1.yearOfBirth();

// assign keyword is used to  merge the two objects it took two params one is target person another is another object

Object.assign(person, person1);
console.log(person);


// objects cloning
Object.assign({}, person);
log