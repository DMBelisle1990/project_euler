
var temp = 0;
var ans = 0;
var min = 1000000000;
for(var i = 1; i < 1000; i++) {
	for(var j = 1; j < 1000; j++) {
		temp = (i*(i+1)*j*(j+1)) / 4;
		if(Math.abs(2000000 - temp) <= min) {
			ans = i*j;
			min = Math.abs(2000000 - temp);
			console.log("i: " + i + " j: " + j);
			console.log(temp);
		}
	}
}

console.log(ans);