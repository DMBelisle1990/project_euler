function isPent(num) {
	return ((((Math.sqrt(24*num + 1)) + 1)/6) % 1) == 0;
}

var pentNums = [];

for(var i = 1; i < 100000; i++)
	pentNums.push(i*(3*i - 1)/2);

var notFound = true;
var current = 1,
	answer;
while(notFound) {
	for(var j = current - 1; j >= 0; j--) {
		if(isPent(pentNums[current] - pentNums[j]) && isPent(pentNums[current] + pentNums[j])) {
			answer = pentNums[current] - pentNums[j];
			notFound = false;
			break;
		}
	}
	current++
}

console.log(answer);