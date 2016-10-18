var primes = [2];
for(var i = 3; i < 50002; i+=2) {
	if(i % 5 === 0) {
		continue;
	}
	var add = true;
	for(var j = 1; primes[j] <= Math.sqrt(i); j++) {
		if(i % primes[j] === 0) {
			add = false;
			break;
		}
	}
	if(add) {
		primes.push(i);
	}
}

console.log('primes done');

var n = 2;
var sum = 0;
while(n <= 100000000) {
	sum += n;
	for(var i = 1; i < Math.sqrt(n); i++) {
		if(n % i !== 0) {
			continue;
		} else {
			if(primes.indexOf(i + n / i) > -1) {
				continue;
			} else {
				sum -= n;
				break;
			}
		}
	}
	n += (n % 10 === 0 ? 12 : 8);
	console.log(n);
}

console.log(sum);
