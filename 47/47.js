function addPrimes(addUpTo) {
	for(var i = 3, add; i <= addUpTo; i+=2) {
		add = true;
		for(var j = 0; primes[j] <= Math.floor(Math.sqrt(i)); j++) 
			if(i % primes[j] == 0) add = false;

		if(add) primes.push(i);
	}
}

// Populate an array of primes to use for finding prime factorizations
var primes = [2];
addPrimes(100000);


function getNumUniqFactors(num) {
	var factors = 0;
	for(var i = 0; primes[i] <= num; i++) 
		if(num % primes[i] == 0) factors++;
		

	return factors;
}


for(var i = 647, notAnswered = true; notAnswered; i++) {
	if((getNumUniqFactors(i) >= 4 && getNumUniqFactors(i+1) >= 4) && (getNumUniqFactors(i+2) >= 4 && getNumUniqFactors(i+3) >= 4)) {
		console.log(i);
		notAnswered = false;
	}
}
