// object

// creating the object

// 1 => object constructor
const objectName = new Object()


// 2 => object literals
const objectName2 = {} // it automatically convert into object constructor

// object consists key and values

const person = {
    firstName : "Dhanush",
     lastName : "Kumar",
     age : 19,
     isAlive : true,
     fullName(){ // function within the object is called methods
        console.log('my name is {this.}');
     }
}