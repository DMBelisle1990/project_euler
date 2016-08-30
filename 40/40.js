var ans = 1;

for(var i = 2, start, idx; i < 7; i++) {
	start = Math.pow(10, i);
	for(var j = 1; j < i; j++) 
		start -= (9*Math.pow(10, j-1)*j);

	start = Math.floor(start/i);
	idx = Math.pow(10, i) - (start*i);
	for(var j = i-1; j > -1; j--)
		idx -= (j*9*Math.pow(10,j-1));

	ans *= ((start+Math.pow(10,i-1))+"")[idx - 1]*1;
}

console.log(ans);