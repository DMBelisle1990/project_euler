var matrix = [];
var MAX = 5;
var tileSize = 2;

for(var i = 0; i * tileSize < MAX; i++) {

	var sum = i * tileSize;
	matrix[i] = [sum];
	while(sum <= MAX) {
		matrix[i].push(++sum);
	}

}

console.log(matrix);