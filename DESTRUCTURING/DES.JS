
// object destructuring

const person = {
    name : "Dhanush",
    age : 19,
    isLive : true,
    
Skills : {
    frontend : "javaScript",
    backend : "Javascript",
    database : "Mongo db",
},
hobby : ["coding", "sleeping"]
}

console.log(person);

// accessing object property

console.log(person.name); // dhanush
console.log(person.age); // 19

// another easy way to access the object using destructuring

// syntax :
// const {key values, key values} = variableName

const {name, age,isLive} = person;

console.log(name);// dhanush
console.log(age);// age



// to assign the default value in destructuring
const user= {
    firstName : "Dhanush",
    lastName : "Kumar"
}

const {firstName, lastName, defaultValue = 20} = user;

console.log(firstName);
console.log(firstName);