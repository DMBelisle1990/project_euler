String.prototype.reverse = function() {
	return this.split("").reverse().join("");
}

var sum = 0;
for(var i = 0; i < 1000000; i++) 
	if(i == (i+"").reverse() && i.toString(2) == i.toString(2).reverse()) 
		sum += (i*1);

console.log(sum);