//JAVASCRIPT PROGRAM to check if a number is prime or not
let number=13;
let flag = true;

// check if number is equal to 1
if (number === 1) {
	console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

		for (let i = 2; i < number; i++) {
		if (number % i == 0) {
			flag = false;
			break;
		}
	}

	if (flag) {
		console.log(`PRIME`);
	} else {
		console.log(`NOT A PRIME NUMBER`);
	}
}

// check if number is less than 1
else {
	console.log("NOT A PRIME");
}
