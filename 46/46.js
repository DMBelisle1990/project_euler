function isPrime(num) {
	for(var j = 3; j <= Math.floor(Math.sqrt(num)); j+=2) 
		if(num % j == 0) return false;
	
	return true;
}

var primes = [2, 3, 5, 7];
for(var i = 11, num = 9, notSolved = true; notSolved; i+=2) {
	if(isPrime(i)) {
		primes.push(i);
	} else {
		num = i;
		for(var j = primes.length - 1, next = false; j >= 0; j--) {
			for(var n = 1; ; n++) {
				if(primes[j] + 2*n*n < num) 
					continue;
				else if(primes[j] + 2*n*n == num) 
					next = true;
				else if(j == 0 && primes[j] + 2*n*n > num) 
					notSolved = false;
				break;
			}
			if(next) break;
		}
	}
	console.log(i);
}