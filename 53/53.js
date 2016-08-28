function factorial(n) {
	if(n == 0) return 1;
	else return n*factorial(n-1);
}

function C(n,r) {
	return factorial(n)/(factorial(r)*factorial(n-r));
}

ans = 0;
for(var i = 23; i < 101; i++) {
	for(var j = 0; j <= i; j++) { 
		if(C(i,j) > 1000000) {
			// Uses symmetry of Pascals triangle to solve
			ans += ((i+1) - (j*2));
			break;
		}
	}
}

console.log(ans);
