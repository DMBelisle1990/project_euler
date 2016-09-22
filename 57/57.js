function reduce(numerator, denominator) {
	let gcd = function gcd(a, b) {
		return b ? gcd(b, a%b) : a;
	};
	gcd = gcd(numerator, denominator);
	return [numerator/gcd, denominator/gcd];
}



// let ans = 0;
// for(let i = 0; i < 1000; i++) {

// 	let n1 = 2, n2 = 1, d1 = 1, d2 = 2;
// 	for(let j = 0; j < i; j++) {

// 		d1 = d2; // Find obvious common denominator
// 		n1 = 2 * d1;

// 		n2 += n1; // Add the fractions and store it in n2/d2

// 		[d2, n2] = reduce(n2, d2); // Reduce it and invert the fraction

// 	}

// 	n2 += d2; // Add 1
// 	[n2, d2] = reduce(n2, d2);

// 	if( (n2+'').length > (d2+'').length ) {
// 		ans++;
// 	}
// }


// console.log(ans);

var nk = 3, dk = 2, ans = 0;

for(var i = 0; i < 1000; i++) {
	nk += 2*dk;
	dk = nk - dk;
	[nk, dk] = reduce(nk, dk);
	if( (nk+'').length > (dk+'').length ) {
		ans++;
	}
}

console.log(ans);
