// Getters and setters allow you to define Object Accessors 




let person = {
    FirstName : "Dhanush",
    lastName  : "Kumar",
    age : 19,
  Role : "Developer",
    
  fullName(){
       console.log(person.FirstName + " " + person.lastName); 
    }
  
}

person.



// to change the value in object 
// person.FirstName = "sanjay";

// getters >>> is used to get the data
// setters >>> is used to set the data 


console.log(person);
// console.log(person.name);





const person1 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    }
  };