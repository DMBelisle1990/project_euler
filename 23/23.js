var abundantNums = [],
	expressable  = [];
var temp;

for(var i = 12, sum = 1; i < 28123; i++, sum = 1) {
	for(var j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
		if(i % j == 0) sum += (j + (i/j));
		temp = j;
	}
	if(temp * temp == i) sum -= temp;
	if(sum > i) abundantNums.push(i);
}

var answer = 0;
for(var i = 0; i <= abundantNums.length; i++) 
	for(var j = 0; j < abundantNums.length; j++) 
		if(abundantNums[i] + abundantNums[j] < 28123) expressable[abundantNums[i] + abundantNums[j]] = true;

for(var i = 0; i < 28123; i++)
	if(!expressable[i]) answer += i;

console.log(answer);