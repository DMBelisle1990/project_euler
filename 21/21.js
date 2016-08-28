var sum1 = 1;
var sum2 = 1;
var amicableSum = 0;

for(var i = 2; i < 10000; i++) {
	// Calculate the sum of the proper divisors of i
	for(var j = 2; j <= Math.floor(Math.sqrt(i)); j++) 
		if(i%j == 0) sum1 += j + (i/j);	

	if(i == sum1) continue;

	// Calculate the sum of the proper divisors of the first sum
	for(var j = 2; j <= Math.floor(Math.sqrt(sum1)); j++) 
		if(sum1%j == 0) sum2 += j + (sum1/j);

	if(i == sum2) amicableSum += sum1;

	sum1 = 1;
	sum2 = 1;
}

console.log(amicableSum);
