var fs = require("fs"),
	numerals = [],
	romanValues = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000},
	subtractions = {IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900},
	oldTotal = 0,
	newTotal = 0;

fs.readFile("roman.txt", function(error, data) {
	numerals = data.toString().split("\n");
	start();
});

function start() {
	for(var i = 0, num = 0, temp; i < numerals.length; i++, num = 0) {
		temp = numerals[i];
		oldTotal += temp.split("").length;
		for(pair in subtractions) {
			temp = temp.split(pair);
			num += (subtractions[pair] * (temp.length - 1));
			temp = temp.join("");
		}
		temp = temp.split("");
		for(var j = 0; j < temp.length; j++)
			num += romanValues[temp[j]];

		temp = romanize(num);
		newTotal += temp.split("").length;
	}
	console.log(oldTotal - newTotal);
}

function romanize(num) {
	var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
		roman = '';
    for (i in lookup) {
    	while ( num >= lookup[i] ) {
      		roman += i;
      		num -= lookup[i];
    	}
  	}
  	return roman;
}