// spread operator (…)

// spread operator (…) allows us to spread out elements of an iterable such as an array. The spread operator is represented with three dots (…)

// simple example for spread operator

let x = ["Dhanush", "kumar"];
console.log(x);  // [ 'Dhanush', 'kumar' ] =>  it return as a object
console.log(...x); // Dhanush kumar => it convert the object into the string


// spread operator is also  used to concat the two arrays 

const nums1 = [10, 20, 30];
const nums2 = [40, 50, 60];
const res = [...nums1, ...nums2];

console.log(res); // [ 10, 20, 30, 40, 50, 60 ]



// to clone the object
const car = {
    gears: 6,
    color: "Black"
 }
 
 console.log(car);
 
 const person = {
    name : "ram",
    age : 25,
    ...car
 }
 console.log(per);