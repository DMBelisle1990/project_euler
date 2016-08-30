// This is a horrible sloppy implimentation of dijkstras algorithm
// Javascript is a very poor choice and this answer is not very scalable


var fs = require("fs");
var matrix = [];

fs.readFile("matrix.txt", function(error, data) {
	// Prepare the data for computation
	content = data.toString().split("\n");
	for(var i = 0; i < content.length; i++) {
		matrix.push(content[i].split(","));
		for(var j = 0; j < matrix[i].length; j++)
			matrix[i][j] = new Node(matrix[i][j]*1, Infinity, false);
	}

	matrix[0][0].weight = matrix[0][0].value;
	findShortestPath();
});

var Node = function(value, weight, visited) {
	// value will represent the value of all edges coming into the vertex
	this.value = value;
	this.weight = weight;
	this.visited = visited;
}

var valid_coords = function(x, y) {
	if(x < 0 || y < 0) return false;
	if(x >= matrix.length || y >= matrix.length) return false;
	return true;
}

function findShortestPath() {
	var length = matrix.length - 1;
	var x = 0;
	var y = 0;
	var node;
	var min;

	while(!matrix[length][length].visited) {
		matrix[x][y].visited = true;

		// Still may need to check for out of bound errors
		if(valid_coords(x+1, y)) {
			node = matrix[x+1][y];
			if(!node.visited) 
				node.weight = Math.min(node.weight, matrix[x][y].weight + node.value);
		}

		if(valid_coords(x, y+1)) {
			node = matrix[x][y+1];
			if(!node.visited) 
				node.weight = Math.min(node.weight, matrix[x][y].weight + node.value);
		}

		if(valid_coords(x-1, y)) {
			node = matrix[x-1][y];
			if(!node.visited) 
				node.weight = Math.min(node.weight, matrix[x][y].weight + node.value);
		}

		if(valid_coords(x, y-1)) {
			node = matrix[x][y-1];
			if(!node.visited) 
				node.weight = Math.min(node.weight, matrix[x][y].weight + node.value);
		}

		min = Infinity;
		for(var i = 0; i < matrix.length; i++) {
			for(var j = 0; j < matrix[i].length; j++) {
				if(!matrix[i][j].visited && matrix[i][j].weight < min) {
					min = matrix[i][j].weight;
					x = i;
					y = j;
				}
			}
		}

	}

	console.log(matrix[length][length].weight);

}








