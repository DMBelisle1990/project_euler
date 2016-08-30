var fs = require("fs"),
	coords,
	answer = 0;

fs.readFile("triangle.txt", function(error, data) {
	coords = data.toString().split("\n");
	start();
});

function start() {
	var x = [], y = [], temp;
	for(var i = 0, count = 0; i < coords.length; i++, count = 0) {
		temp = coords[i].split(",");
		for(var k = 0; k < temp.length; k++) temp[k] *= 1;
		x[0] = temp[0]; y[0] = temp[1];
		x[1] = temp[2]; y[1] = temp[3];
		x[2] = temp[4]; y[2] = temp[5];
		if(crossPositiveX(x[0], y[0], x[1], y[1])) count++;
		if(crossPositiveX(x[0], y[0], x[2], y[2])) count++;
		if(crossPositiveX(x[1], y[1], x[2], y[2])) count++;
		if(count == 1) answer++;
	}
	console.log(answer);
}

function crossPositiveX(x1, y1, x2, y2) {
	if(y2 == y1) return;
	var x = ((y1 * ((x1-x2)/(y2-y1))) + x1);
	if(x >= 0 && ((x >= x1 && x <= x2) || (x >= x2 && x <= x1))) return true;
}