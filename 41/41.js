var primes = [2];

// Since 8 and 9 digit pandigitals are divisible by 3 we only have to check up to 1000000
for(var i = 3; i < 7654321; i+=2) {
	for(var j = 0, add = true; primes[j] <= Math.floor(Math.sqrt(i)); j++) 
		if(i % primes[j] == 0) {
			add = false;
			break;
		}
	if(add) primes.push(i);
}

for(var i = primes.length, found = true, temp; i > 0; i--, found = true) {
	temp = primes[i]+"";
	temp = temp.split("");
	for(var j = 1; j <= temp.length; j++) {
		if(temp.indexOf(j+"") == -1) {
			found = false;
			break;
		}
	}
	if(found) {
		console.log(temp.join(""));
		break;
	}
	temp.length = 0;
}



