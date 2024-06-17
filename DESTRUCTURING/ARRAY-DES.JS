
// array destructuring



const SubMarks = [70,80,90];
console.log(SubMarks);  // [ 70, 80, 90 ]
console.log("Science : " + SubMarks[0]);
console.log("Physics : " + SubMarks[1]);
console.log("Biology : " + SubMarks[2]);



// let Science = SubMarks[0]
// let Physics = SubMarks[1]
// let Biology = SubMarks[2];



// basic array destructuring :-

const [Physics, Science, Biology] = [70,80,90];
console.log("Phy = " , Physics);
console.log("SC = " , Science);
console.log("Bio = ", Biology);


// handling undefined values
const [Tamil, English ] = [100];
console.log(Tamil); //100
console.log(English); // undefined


// skipping elements
// to skip the elements using comas inbeteween 
const [telugu, ,kannada] = [10,30,55]

console.log(telugu);
console.log(kannada);





