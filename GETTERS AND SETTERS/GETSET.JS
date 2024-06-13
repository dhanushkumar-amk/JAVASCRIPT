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

person.fullName();



// to change the value in object 
// person.FirstName = "sanjay";

// getters >>> is used to get the data
// setters >>> is used to set the data 


console.log(person);
// console.log(person.name);



//  getter using get keyword 

const person1 = {
    firstName: "Dhanush",
    lastName: "Kumar",
    language: "english",
    get lang() {
      return this.language;
    }
  };
  console.log(person1.lang);
  
  // setter using set keyword
  
  