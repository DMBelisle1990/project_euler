var length = 0,
	max = 0,
	temp,
	answer = 0;

for(var i = 2; i < 1000000; i++) {
	temp = i;
	length = 0;
	while(i != 1) {
		i % 2 ? i = 3*i + 1 : i /= 2;
		length++;
	}

	if(length > max) {
		answer = temp;
		max = length;
	}
	i = temp;
}

console.log(answer)