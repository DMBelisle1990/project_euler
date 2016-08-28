function isPrime(num) {
	if(num % 2 == 0 && num != 2) return false;
	for(var j = 3; j <= Math.floor(Math.sqrt(num)); j+=2) 
		if(num % j == 0) return false;
	return true;
}

var primes = ['2', '3', '5'];
for(var i = 7; i < 1000000; i+=2) 
	if(isPrime(i) && !(i+"").match(/[024568]/)) 
		primes.push(i+"");

var answer = 0;
for(var i = 0, temp, add = true; i < primes.length; i++, add = true) {
	temp = primes[i].split("");
	for(var j = 0; j < temp.length - 1; j++) {
		temp.unshift(temp.pop());
		if(primes.indexOf(temp.join("")) == -1) {
			add = false;
			break;
		}
	}
	if(add) answer++;
}

console.log(answer);

