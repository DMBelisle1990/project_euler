var fs = require("fs");
fs.readFile("words.txt", function(error, data) {
	content = data.toString().split(",");
	findTriangleWords(content);
});

var toInt = {
	A: 1,
	B: 2,
	C: 3,
	D: 4,
	E: 5,
	F: 6,
	G: 7,
	H: 8,
	I: 9,
	J: 10,
	K: 11,
	L: 12,
	M: 13,
	N: 14,
	O: 15,
	P: 16, 
	Q: 17,
	R: 18, 
	S: 19,
	T: 20,
	U: 21,
	V: 22,
	W: 23,
	X: 24,
	Y: 25,
	Z: 26
};

function findTriangleWords(wordArray) {
	var sum = 0;
	var numTriangleWords = 0;
	var word = [];

	for(var i = 0; i < wordArray.length; i++) {
		word = content[i].split("");
		for(var j = 0; j < word.length; j++) 
			sum += toInt[word[j]];
		
		if(Math.floor(Math.sqrt(2*sum)) * Math.ceil(Math.sqrt(2*sum)) == 2*sum && Math.floor(Math.sqrt(2*sum)) != Math.ceil(Math.sqrt(2*sum))) {
			numTriangleWords++;
			console.log(sum);
		}

		sum = 0;
		word = [];
	}

	console.log(numTriangleWords);
}






