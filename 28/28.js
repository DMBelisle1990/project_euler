var sum = 1;
var total = 1;
for(var i = 1; i < 501; i++) 
	for(var j = 1; j < 5; j++) {
		sum += 2*i;
		total += sum;
	}
	
console.log(total);