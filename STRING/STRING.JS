// primitive string 

let firstName = 'Dhanush';
let lastName = 'kumar';
let fullName = `DhanushKumar`

// another way to create the string
// object
const name = new String("Ram")
console.log(name);


// property

// length
// to check the length of the values or string
console.log(firstName.length);// 7


// methods

// charAt()
// to check the specif character in a string using charAt() by default value is index of 0 
console.log(firstName.charAt()); // D
console.log(firstName.charAt(1)); // h


// charCodeAt()
// it return the ascii  value of the particular index
console.log(firstName.charCodeAt(0));
console.log(firstName.charCodeAt(1));


// at() 
// it return the character at the specific index 
console.log(firstName.at(1)); // h

// Now you can use myString.at(-2) instead of charAt(myString.length-2).

// JavaScript String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).

console.log(fullName.slice(7)); // kumar

let text = "Apple, Banana, Kiwi";
let part = text.slice(7); // start index from forward
let part1= text.slice(-12); // start index from backward
 
console.log(part); // Banana, kiwi
console.log(part1); // Banana, kiwi

// substring()
// substring is similar to slice
console.log(fullName.substring(7,12));// kumar

//substr()
// it is also similar to slice
console.log(fullName.substr(7,11)); // kumar

// toUpperCase()
// it transforms string to uppercase
console.log(fullName.toUpperCase()); //DHANUSHKUMAR


// tolowercase()
// it transforms string to lowercase
console.log(fullName.toLowerCase()); // dhanushkumar

// concat()
// concat() joins two or more strings
console.log(firstName.concat(lastName)); // Dhanushkumar
// The concat() method can be used instead of the plus operator