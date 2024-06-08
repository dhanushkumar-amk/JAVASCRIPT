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
        MultiplePara("sanjay", 20, 100000);
        
        
        // default value
        
        
        function DefaultValue({name = "dhanush"}){
            console.log(name);
        }
        DefaultValue(''); // dhanush
        
        
        
        // Rest parameters
        // using rest parameter we can pass any number of arguments in function
        
        function RestPara(...name){
            console.log(name);
        }
        RestPara("dhanush", "sanjay", "ashwin", "ram")
        
        
        
        // return the value
        
        function  valueReturn(firstName, lastName){
            const name = firstName + ' ' + lastName;
            return  // using empty return statement that stops the code below the code
            console.log(name);
        }
        valueReturn('dhanush', 'kumar');
        
        
        function 
        
        
        
        