//////////////////////// DOM  =>  Document Object Model// html tag  => html document// dom Manipulation// adding the element through js// const body = document.body;// body.append('Hello world');
// body.innerHTML = '<h1>Hello dhanush</h1>';

// innerHTML  is used to write dynamically adding file in website

//
//  addEventListener
// const btnSubmit = document.querySelector('#btn-submit');
// const btnClose = document.querySelector('#btn-close');

// btnSubmit.addEventListener('click', () => {
//   let input = document.getElementById('username').value;

//   //   alert(input);
// });

// object

// const person = {
//   name: 'Dhanushkumar',
//   age: 20,
//   place: 'Pollachi',
//   objectFunction() {
//     // return "hello World my name is " + this.name ;
//     return `my name is ${this.name} and my age is ${this.age} from ${this.place}`;
//   },
// };

//  dynamically get name and  age from the user
// const userInput = prompt('What is your name', 'type something');
// console.log(userInput);
// person.name = userInput;

// const person1 = person.objectFunction();
// console.log(person1);

// print  to document
// document.write(person1);
// document.body.innerHTML = `<h1> ${person1} </h1>`;

//

document.addEventListener('DOMContentLoaded', () => {
  alert('Allowed');
});
