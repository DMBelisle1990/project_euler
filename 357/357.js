var Euler = require('../euler.js');
var isPrime = [];

console.time('357');
var primes = Euler.getPrimesTo(100000000);
while(primes.length > 0) {
	isPrime[primes.pop()] = true;
}

console.log('primes generated');

var ans = 1 + 2 + 6 + 10;
var n = 18;

var inc = [4, 8, 8]; // incrimenter to avoid evens ending in 4 and 6
var idx = 0;
while(n <= 100000000) {
	if(isPrime[n + 1]) {
		var sqrt = Math.sqrt(n);
		var add = true;
		for(var i = 1; i < sqrt; i++) {
			if( n % i === 0 && isPrime[i + (n / i)] === undefined) {
				add = false;
				break;
			}
		}
		if(add) {
			ans += n;
		}
	}
	if(n % 1000 === 0) console.log(n);
	n += inc[idx];
	idx = (++idx) % 3;
}

console.log(ans);
console.timeEnd('357');
