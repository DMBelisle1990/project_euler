var bigInt = require("big-integer");

var num = bigInt(1);
for(var i = 100; i > 1; i--)
	num = num.multiply(i);

num = num.value.reverse().join("");

console.log(num);
var sum = 0;
num = num.split("");
for(var i = 0; i < num.length; i++) {
	sum += num[i]*1;
}
console.log(sum);

