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


// to change the value in object 
// person.FirstName = "sanjay";

// getters >>> is used to get the data
// setters >>> is used to set 


person.fullName();
// console.log(person.name);

