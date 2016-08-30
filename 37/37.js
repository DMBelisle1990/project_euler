var truncPrimes = [],
	stringNum = "23",
	last,
	forward,
	reverse,
	add,
	next = { "1": "3", "3": "7", "7": "9" },
	firstNext = { "1": "2", "2": "3", "3": "5", "5": "7" };

String.prototype.replaceAt = function(idx, char) {
    return this.substr(0, idx) + char + this.substr(idx + char.length);
}

function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) 
        if (number % start++ < 1) return false;
    return number > 1;
}

while(truncPrimes.length < 11) {
	// Just need to test stringNum and stringNum.reverse() at each removed digit for primality
	forward = stringNum;
	reverse = stringNum;
	add = true;
	for(var i = 0, j = stringNum.length-1; i < stringNum.length; i++, j--) {
		if(!(isPrime(forward*1) && isPrime(reverse*1))) {
			add = false;
			break;
		} else {
			forward = forward.slice(1);
			reverse = reverse.slice(0, -1);
		}
	}

	if(add) truncPrimes.push(stringNum*1);

	// Determine next prime to test
	last = stringNum.length - 1;
	if(stringNum.charAt(last) == "3") {
		stringNum = stringNum.replaceAt(last, "7");
		continue;
	}

	for(var i = last - 1; i >= 0; i--) {
		if(stringNum.charAt(i) == "9") 
			continue;
		else if(i != 0) 
			stringNum = stringNum.replaceAt(i, next[stringNum.charAt(i++)]);
		else if(stringNum.charAt(0) != "7")
			stringNum = stringNum.replaceAt(i, firstNext[stringNum.charAt(i++)]);
		else {
			stringNum = "2" + stringNum;
			last++;
			i++;
		}
		while(i < last) stringNum = stringNum.replaceAt(i++, "1");
		stringNum = stringNum.replaceAt(last, "3");
		break;
	}
}

console.log(truncPrimes);

var sum = 0;
for(var i = 0; i < truncPrimes.length; i++) sum += truncPrimes[i];
console.log(sum);


