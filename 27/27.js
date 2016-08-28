function isPrime(num) {
	if(num < 0) num *= -1;
	if(num % 2 == 0 && num != 2) return false;
	for(var j = 3; j <= Math.floor(Math.sqrt(num)); j+=2) 
		if(num % j == 0) return false;
	
	return true;
}

var bValues = [2, -2];
	aValues = [1,-1];
for(var i = 3; i < 1000; i+=2) {
	aValues.push(i);
	aValues.push(-1*i);
	if(isPrime(i)) {
		bValues.push(i);
		bValues.push(-1*i);
	}
}

var max = 40;
var answer
for(var i = 0; i < bValues.length; i++) {
	for(var j = 0; j < aValues.length; j++) {
		for(var n = 0, temp = 0; ; n++) 
			if(isPrime(n*n + n*aValues[j] + bValues[i])) 	
				temp++
			else
				break;

		if(temp > max) {
			max = temp;
			answer = aValues[j] * bValues[i]
		}
	}
}

console.log(answer);