const message = 'my name is \n "dhanushkumar"'
console.log(message);

// template literals are used to set the string values dynamically

// String : "", '',
//  template literals : ` `;


// we nod't need any escape notations
const message1 = `my name is 
"dhanushkumar"`
console.log(message1);

// we can use any type of formate

const email = `hello my name is someName
 from someCity, thankyou for coming,
            
            your faithfully,
            G.dhanushkumar
`  
console.log(email);

// it accepts the white space


// dynamically using template literals

const name = "ram";
const city = "Chennai";

const printName = `My name is ${name} and coming from  {}`