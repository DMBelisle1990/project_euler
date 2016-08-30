var fs = require("fs");
var matrix = [];

fs.readFile("matrix.txt", function(error, data) {
	// Prepare the data for computation
	content = data.toString().split("\n");
	for(var i = 0; i < content.length; i++) 
		matrix.push(content[i].split(","));

	for(var i = 0; i < matrix.length; i++)
		for(var j = 0; j < matrix[i].length; j++)
			matrix[i][j] *= 1;
	
	findShortestPath();
});

function findShortestPath() {
	var temp;
	var length = matrix.length - 1;
	for(var i = 0; i < length; i++) {
		temp = i;
		for(var j = 0; j <= temp; j++, i--) {
			if(i == 0 && j == 0) 
				continue;
			else if(i == 0)
				matrix[i][j] += matrix[i][j-1];
			else if(j == 0) 
				matrix[i][j] += matrix[i-1][j];
			else
				matrix[i][j] += Math.min(matrix[i][j-1], matrix[i-1][j])
		}
		i = temp;
	}

	for(var j = 0; j <= length; j++) {
		temp = j;
		for(var i = length; i >= temp; i--, j++) {
			if(i == length && j == 0) 
				matrix[i][j] += matrix[i-1][j];
			else if(i == 0 && j == length)
				matrix[i][j] += matrix[i][j-1];
			else
				matrix[i][j] += Math.min(matrix[i][j-1], matrix[i-1][j])
		}
		j = temp;
	}
	console.log(matrix[length][length]);
}