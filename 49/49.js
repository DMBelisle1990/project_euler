function isPrime(num) {
	if(num % 2 == 0 && num != 2) return false;
	for(var j = 3; j <= Math.floor(Math.sqrt(num)); j+=2) 
		if(num % j == 0) return false;
	
	return true;
}

function eqSet(as, bs) {
    if (as.size !== bs.size) return false;
    for (var a of as) if (!bs.has(a)) return false;
    return true;
}

var primes = [];
for(var i = 1001; i < 10000; i+=2) 
	if(isPrime(i)) primes.push(i);


var anagram_primes = [];
for(var i = 0; i < primes.length; i++) {
	anagram_primes.length = 0;
	anagram_primes.push(primes[i]);
	for(var j = i+1, set1, set2; j < primes.length; j++) {
		set1 = new Set((primes[i]+"").split(""));
		set2 = new Set((primes[j]+"").split(""));
		if(eqSet(set1, set2))
			anagram_primes.push(primes[j]);
	}

	for(var m = 0; m < anagram_primes.length; m++) {
		for(var n = m+1, diff; n < anagram_primes.length; n++) {
			diff = anagram_primes[n] - anagram_primes[m];
			if(anagram_primes.indexOf(anagram_primes[n] + diff) > -1) 
				console.log("Found it! " + anagram_primes[m] +" "+ anagram_primes[n] +" "+ (anagram_primes[n] + diff));
		
		}
	}
}





