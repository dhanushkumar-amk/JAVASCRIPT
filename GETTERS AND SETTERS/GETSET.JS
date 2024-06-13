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

// to chnah=ge 
person.FirstName = "sanjay";

person.fullName();
// console.log(person.name);

