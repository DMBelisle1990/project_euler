var fs = require("fs");
var content;
var triangle = [];

fs.readFile("triangle.txt", function(error, data) {
	content = data.toString().split("\n");
	findLongestPath();
});

function findLongestPath() {
	for(var i = 0; i < content.length; i++)
		triangle.push(content[i].split(" "));

	for(var i = 0; i < triangle.length; i++) 
		for(var j = 0; j < triangle[i].length; j++) 
			triangle[i][j] *= 1;

	
	for(var i = triangle.length - 2; i >= 0; i--) 
		for(var j = 0; j < triangle[i].length; j++) 
			triangle[i][j] += Math.max(triangle[i+1][j], triangle[i+1][j+1]);
		


	console.log(triangle[0][0]);

}




