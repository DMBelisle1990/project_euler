var fs = require("fs");
var content,
	max = 0,
	temp,
	grid = [];

fs.readFile("grid.txt", function(error, data) {
	content = data.toString().split("\n");
	computeProduct();
});


function computeProduct() {
	for(var i = 0; i < content.length; i++) 
		grid.push(content[i].split(" "));

	checkHorizontal();
	checkVertical();
	checkDiagonal();
	console.log(max);
}

function checkHorizontal() {
	for(var i = 0; i < grid.length; i++) {
		for(var j = 0; j < grid[i].length - 4; j++) {
			temp = grid[i][j] * grid[i][j+1] * grid[i][j+2] * grid[i][j+3];
			if(temp > max) max = temp; 
		}
	}
}

function checkVertical() {
	for(var i = 0; i < grid.length - 4; i++) {
		for(var j = 0; j < grid[i].length; j++) {
			temp = grid[i][j] * grid[i+1][j] * grid[i+2][j] * grid[i+3][j];
			if(temp > max) max = temp; 
		}
	}
}

function checkDiagonal() {
	for(var i = 0; i < grid.length - 4; i++) {
		for(var j = 0; j < grid[i].length - 4; j++) {
			temp = grid[i][j] * grid[i+1][j+1] * grid[i+2][j+2] * grid[i+3][j+3];
			if(temp > max) max = temp; 
		}
	}

	for(var i = 3; i < grid.length - 4; i++) {
		for(var j = 3; j < grid[i].length - 4; j++) {
			temp = grid[i][j] * grid[i+1][j-1] * grid[i+2][j-2] * grid[i+3][j-3];
			if(temp > max) max = temp; 
		}
	}
}

	






