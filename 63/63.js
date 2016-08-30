
// This problem is not limited to single digits, return to it later
var n_digits = [1,2,3,4,5,6,7,8,9];

for(var i = 2; i < 10; i++) {
	for(var j = 2, power; j < 10; j++) {
		power = Math.pow(i, j);
		// console.log("Checking " + i + " to the " + j + "th power");
		if(j == (power+"").split("").length && n_digits.indexOf(power) == -1)
			n_digits.push(power);
	}
}

console.log(n_digits.length);
// console.log(n_digits);