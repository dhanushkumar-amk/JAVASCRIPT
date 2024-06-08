 // syntax :
 
//  function functionName(parameters){
    
//  }



// ex : 

const person = {
    name : "Dhanush",
    age : 20,
}

        function printName1(){
            console.log(person.name);
        } 
        printName1();
        
      
        
        // parameters : 
        
        function printName(name){
            console.log(name);
        } 
        printName("ram");
        
        
        // Arguments
        
        function ArgumentsPerson(name){ // parameters
            console.log(name);
        }
        ArgumentsPerson("sam") // arguments
        
        
        // we can also pass multiple parameter
        
        function MultiplePara(name, age,salary){
            console.log(name);
            console.log(age);
            console.log(salary);
        }
        MultiplePara("sanjay")