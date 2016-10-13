// This solution simply computes the sum of totient(n) for n in [2,10^6]
// It uses a prime array to speed up the computations

var _ = require('underscore');

function getPrimesTo(max) {
	var primes = [2, 3, 5];
	for(var i = 7; i <= max; i+=2) {
		if(i % 5 === 0) {
			continue;
		}
		var isPrime = true;
		var maxPrime = Math.floor(Math.sqrt(i));
		for(var j = 0; primes[j] <= maxPrime; j++) {
			if(i % primes[j] === 0) {
				isPrime = false;
				break;
			}
		}
		if(isPrime) {
			primes.push(i);
		}
	}
	return primes;
}

function factorization(num) {
	var max = Math.sqrt(num);
	var result = arguments[1] || [];
	var rootFound = false;
	for(var i = 0; primes[i] <= max; i++) {
		if(num % primes[i] === 0) {
			rootFound = true;
			break;
		}
	}

	if(rootFound) {
		result.push(primes[i]);
		return factorization(num / primes[i], result);
	} else {
		result.push(num);
		return result;
	}
}

function totient(num) {
	var uniqFactors = _.uniq(factorization(num));
	var result = num;
	for(var i = 0; i < uniqFactors.length; i++) {
		result *= (1 - (1/uniqFactors[i]));
	}
	return Math.round(result);
}


var primes = getPrimesTo(500000);
var ans = 0;
for(var i = 1000000; i > 1; i--) {
	ans += totient(i);
}

console.log(ans);






