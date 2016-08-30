var temp, answer = 0, one = [], eightyNine = [];

for(var i = 1, next; i < 568; i++) {
	next = i;
	while(next != 1 && next != 89) {
		temp = (next+"").split("");
		next = 0;
		for(var j = 0; j < temp.length; j++)
			next += (temp[j]*temp[j]);
	}

	next == 89 ? eightyNine.push(i) : one.push(i);
}

for(var i = 1, sum; i < 10000000; i++) {
	temp = (i+"").split("");
	sum = 0;
	for(var j = 0; j < temp.length; j++) 
		sum += (temp[j]*temp[j]);

	if(one.indexOf(sum) == -1)
		answer++;
}

console.log(eightyNine.length);

