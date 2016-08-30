var fs = require("fs"),
	content,
	remainder = 0,
	sum = [],
	finalNum = [];

fs.readFile("sum.txt", function(error, data) {
	content = data.toString().split("\n");
	computeSum();
});

function computeSum() {
	for(var i = 0; i < content.length; i++) 
		sum.push(content[i].split(""));

	for(var i = sum[0].length - 1; i >= 0; i--) {
		for(var j = 0; j < sum.length; j++) 
			remainder += (sum[j][i] * 1);

		i == 0 ? finalNum.push(remainder) : finalNum.push(remainder % 10);
		remainder = Math.floor(remainder / 10);
	}
	console.log(finalNum.reverse().join(""));
}