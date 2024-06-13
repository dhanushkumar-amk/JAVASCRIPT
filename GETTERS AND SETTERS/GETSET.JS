// Getters and setters allow you to define Object Accessors 




let person = {
    FirstName : "Dhanush",
    lastName  : "Kumar",
    age : 19,
  Role : "Developer",
    
  get fullName(){
       console.log(person.FirstName + " " + person.lastName); 
    }  ,
   Set fullName(value){
        // change the role value
      let values =  value.split( ' ');
        console.log(values);
    }
}

person.Role = "Gamer"


// to change the value in object 
// person.FirstName = "sanjay";

// getters >>> is used to get the data
// setters >>> is used to set the data 


person.fullName;
// console.log(person.name);

