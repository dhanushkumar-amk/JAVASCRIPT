
// class is collection of fields and methods

// best practice is always keep firstLetter caps  

// syntax for class

// class Employee{
// fields => variables 
// a=10;

// and also add functions
// }


class Person {
    name = "Dhanushkumar"
}

// calling the class
let person = new Person();


console.log(person.name); // dhanushkumar


// updating the value in class
person.name = "SanjayKumar";
console.log(person.name);// SanjayKumar



// creating the function in class 

class User{
    name = "ashwin";
    print(){
        console.log(this.name);
    }
}
let user = new User();
user.print(); // ashwin


// we can access the variable inside the function sing this keyword

// incase we can access the variable inside the class that not available then it automatically create

// ex:
class Some{
    name = "Sam";
    
    namePrint(){
        console.log(`my name is dhanushkumar ${this.name} ${this.age}`);
    }
}

let some = new Some();
some.age= 29; // my name is dhanushkumar Sam 29
some.namePrint();


// passing the parameter function in class

class A{
    printA(name){
    this.name = name;
        console.log(name); // dhanush
    }
}

let a = new A();
a.printA("Dhanush")


//setter and getter
class Setter{
    // set function is used to add the values to the function
    set Employee(name){
        this.name = name;
    }
    
    greet(){
        console.log(name);
    }
}

let setter = new Setter();
setter.Employee = "raj"
// setter.greet();



// getter function is used to get the values


// it both setter and getter act as function inside the class but normal act as 