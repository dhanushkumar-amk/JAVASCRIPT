// this is a  reference variable
// which refers to the current variable

// without creating object you use the this keyword it returns the window  object

// const myName = "Dhanush"

/// this function using function

function nameFunc(myName, myAddress) {
  this.myName = myName;
  this.myAddress = myAddress;
  console.log(this.myName);
  console.log(this.myAddress);
}

let object = new nameFunc('Hello', 'amk');

const person = {
  name: 'Dhanush',
  age: 27,
  Role: 'Developer',
  getInfo() {
    console.log(this);
  },
};

person.getInfo();

// {
//   name: 'Dhanush',
//   age: 27,
//   Role: 'Developer',
//   getInfo: [Function: getInfo]
// }

// console.log(person);
