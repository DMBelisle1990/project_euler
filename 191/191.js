var Euler = require('../euler.js');

// Factorials too large for vanilla JS
var n = 0;
for(var i = 2; i < 31; i++) {
	n += (Euler.combination(30,i) + Math.pow(2, 30 - i));
}

for(var i = 1; i < 27; i++) {
	n += (28 * 27 * Euler.combination(26,i));
}

for(var i = 1; i < 28; i++) {
	n += (28 * Euler.combination(27,i));
}
console.log(n);