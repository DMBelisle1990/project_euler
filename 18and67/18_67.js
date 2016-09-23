var fs = require('fs');

fs.readFile('triangle.txt', function(error, data) {
	findLongestPath(data.toString().split('\n'));
});

function findLongestPath(triangle) {
	triangle = triangle.map((row) => row.split(' ').map(Number));
	for(var i = triangle.length - 2; i >= 0; i--) {
		for(var j = 0; j < triangle[i].length; j++) {
			triangle[i][j] += Math.max(triangle[i+1][j], triangle[i+1][j+1]);
		}
	}
	console.log(triangle[0][0]);
}
