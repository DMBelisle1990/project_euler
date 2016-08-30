function isPrime(num) {
	if((num % 2 == 0 && num != 2) || num == 1) return false;
	for(var j = 3; j <= Math.floor(Math.sqrt(num)); j+=2) 
		if(num % j == 0) return false;
	
	return true;
}

var side_length = 1, square = [1], num_primes = 0;

do {
	for(var i = 0, j = square[square.length-1] + (side_length+1); i < 4; i++, j += (side_length+1)) {
		square.push(j);
		if(isPrime(j)) num_primes++;
	}

	side_length += 2;
} while(num_primes/square.length > .1);

console.log(side_length);