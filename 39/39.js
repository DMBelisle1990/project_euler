var max = 3, ans;

console.time("concatenation");

for(var p = 5, count = 0; p <= 1000; p++, count = 0) {
	for(var a = 1, b, c; a < Math.floor(p/2); a++) {
		b = (p*p - 2*a*p) / (2*(p-a));
		c = Math.sqrt(a*a + b*b);
		if(b === parseInt(b) && c === parseInt(c)) count++;
	}
	if(count > max) {
		max = count;
		ans = p;
	}
}

console.timeEnd("concatenation");

console.log(ans);