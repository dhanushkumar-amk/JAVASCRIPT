// Getters and setters allow you to define Object Accessors 




let person = {
    FirstName : "Dhanush",
    lastName  : "Kumar",
    age : 19,
    Role : "Developer",
    
    fullName :function(){
       console.log(person.FirstName + " " + person.lastName); 
    }
    
}

console.log(person.name);

