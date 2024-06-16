
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

console.log(person.name);
console.log(person.age);

// another easy way to access the object using destructuring

// syntax :
// const {key values, key values} = variableName

const {name, age,isLive} = person;

console.log(person);