var fs = require('fs');
var matrix = [];

/*
 * Helper Functions */

var Node = function(value) {
	this.value = +value; // value of all edges coming into the vertex
	this.weight = Infinity;
	this.visited = false;
}

var valid_coords = function(x, y) {
	return x >= 0 && x < matrix.length && y >= 0 && y < matrix.length;
}

var adjust_weight = function(x, y, _x, _y) {
	if(valid_coords(x, y)) {
		var node = matrix[x][y];
		if(!node.visited) {
			node.weight = Math.min(node.weight, matrix[_x][_y].weight + node.value);
		}
	}
}


/*
 * Implimentation */

fs.readFile('matrix.txt', function(error, data) {
	// Prepare the data for computation
	var content = data.toString().split('\n');
	for(var i = 0; i < content.length; i++) {
		matrix.push(content[i].split(','));
		for(var j = 0; j < matrix[i].length; j++) {
			matrix[i][j] = new Node(matrix[i][j]);
		}
	}

	matrix[0][0].weight = matrix[0][0].value;
	findShortestPath();
});

function findShortestPath() {
	var length = matrix.length - 1;
	var x = 0;
	var y = 0;

	while(!matrix[length][length].visited) {
		matrix[x][y].visited = true;

		adjust_weight(x + 1, y, x, y); // move up
		adjust_weight(x, y + 1, x, y); // move right
		adjust_weight(x - 1, y, x, y); // move down

		var min = Infinity;
		// Slower than actual for loops but much more readable
		matrix.forEach((row, i) => {
			row.forEach((node, j) => {
				if(!node.visited && node.weight < min) {
					min = node.weight;
					x = i;
					y = j;
				}
			});
		});

	}
	console.log(matrix[length][length].weight);
}
