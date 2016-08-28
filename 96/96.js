const readline = require('readline');
const fs = require('fs');	
var input = [], board = [], row = [], col = [], sq = [];
var lineCounter = 0;
 
const rl = readline.createInterface({
	input: fs.createReadStream('sudoku.txt')
});

// For testing only reading a single puzzle
rl.on('line', function (line) {
	if(lineCounter < 9) {
		line = line.split("");
		row.push(line);
		for(var i = 0; i < line.length; i++) {
			input.push(line[i]);
			if(!col[i]) {
				col[i] = [];
			}
			col[i].push(line[i]);
		}
		lineCounter++;
	} else if(lineCounter === 9) {
		lineCounter++;
		init();
	}
});


function init() {

	for(var i = 0; i < input.length; i++) {
		if(input[i] != '0') {
			board.push(Object.freeze({
				value: input[i],
				immutable: true
			}));
		} else {
			board.push({
				value: '',
				index: i,
				immutable: false,
				row: 1,
				col: 1,
				sq: 1,
				remaining: []
			})
		}
	}
	console.log(row);
	console.log(col);

}













