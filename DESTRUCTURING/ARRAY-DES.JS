
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
// to skip the elements using comas in between 
const [telugu, ,kannada] = [10,30,55]

console.log(telugu);
console.log(kannada);

//default values
// if the value those not exit not it take default values
const [Hindi, Urdu=20] = [10];
console.log(Hindi); // 10
console.log(Urdu); // 20

// rest syntax

const [JavaScript, Python, ...BalanceLanguage] = [100,90,80,70,60,50,40]
console.log(JavaScript,Python,BalanceLanguage); // 100 90 [ 80, 70, 60, 50, 40 ]

//swapping variables
// const [one,two,three] =[1,2,3];

let a = 20;
let b = 30;
// nor,al swapping
// let c = a;
// a = b;
// b = c
// console.log(a, b);

// swap using destructuring 
[a , b] = [b, a];
console.log(a,b);


// nesting array destructing
const [] =  [1,2,[3,4,5],6,8,9 ]



