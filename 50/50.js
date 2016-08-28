function isPrime(num) {
	if(num % 2 == 0 && num != 2) return false;
	for(var j = 3; j <= Math.floor(Math.sqrt(num)); j+=2) 
		if(num % j == 0) return false;
	
	return true;
}

var primes = [2];
for(var i = 3; i < 50000; i+=2) 
	if(isPrime(i)) primes.push(i);

var max = 0, answer;
for(var i = 0; i < primes.length; i++) {
	for(var j = i, count = 0, sum = 0; j < primes.length; j++, count++) {
		sum += primes[j];
		if(sum > 1000000) break;
		if(isPrime(sum) && count > max) {
			max = count;
			answer = sum;
		}
	}
}

console.log(answer);


