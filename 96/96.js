const readline = require('readline');
const _ = require('underscore');
const fs = require('fs');	
var board = [], row = [], col = [], sq = [];
var base = ['1','2','3','4','5','6','7','8','9'];
var lineCounter = 0;
 
const rl = readline.createInterface({
	input: fs.createReadStream('sudoku.txt')
});

// For testing only reading a single puzzle atm
rl.on('line', function (line) {
	if(lineCounter < 9) {
		row[lineCounter] = line.split("");
		lineCounter++;
	} else if(lineCounter === 9) {
		lineCounter++;
		col = _.zip.apply(_, row); // transpose row to build col

		for(var i = 0; i < 7; i+=3) { // construct the square array
			for(var j = 0; j < 7; j+=3) {
				var temp = [];
				temp.push(row[i].slice(j, j+3));
				temp.push(row[i+1].slice(j, j+3));
				temp.push(row[i+2].slice(j, j+3));
				sq.push(_.flatten(temp));
				temp.length = 0;
			}
		}
		init();
	}
});


function init() {

	var sqIdx = 0, idx = 0;
	for(var i = 0; i < row.length; i++) {

		if(i < 3) sqIdx = 0;
		else if(i < 6) sqIdx = 3;
		else if(i < 9) sqIdx = 6;

		for(var j = 0; j < row[0].length; j++, idx++) {

			var node = row[i][j];
			if(node != '0') {
				board.push(Object.freeze({
					value: node,
					immutable: true
				}));
			} else {
				board.push({
					value: '',
					index: idx,
					immutable: false,
					rowIdx: i,
					coIdx: j,
					sqIdx: sqIdx,
					remaining: _.difference(base, _.union(row[i], col[j], sq[sqIdx]))
				});
				console.log(_.difference(base, _.union(row[i], col[j], sq[sqIdx])));
			}

			if(j % 3 === 0 && j > 0) sqIdx++;

		}

	}


}













