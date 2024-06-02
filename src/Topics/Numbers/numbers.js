/* numbers = int, float*/ /**===================================================================================== */ let score = 100; /* this is normal way to define number */ /***===================================================================================== */ // to declare or use number in more precise waylet number = new Number(100);// now as strings this gives us more control over numbersconsole.log(number.toFixed(2));//this property gives us 100.00 in 2 decimal pointsconsole.log(number.toString());
// this gives us string to numbers

/**===================================================================================== */
let preNumber = new Number(100.36);
//number to be precise

console.log(preNumber.toPrecision(3));
// this method gives you numbers like how many digits you want from number however
// the above argument should now be less than 3 as it should be at least number of digi
