const readline = require('readline');
const _ = require('underscore');
const fs = require('fs');
var board = [], row = [], col = [];
var tempLine;
var base = ['1','2','3','4','5','6','7','8','9'];
var lineCounter = 0;
const rl = readline.createInterface({
	input: fs.createReadStream('sudoku.txt')
});

// For testing only reading a single puzzle atm
rl.on('line', function (line) {
	if(lineCounter < 9) {
		if(!!tempLine) {
			row[lineCounter++] = tempLine;
			tempLine = null;
		}
		row[lineCounter] = line.split('');
		lineCounter++;
	} else if(lineCounter === 9) {
		lineCounter = 10;
		col = _.zip.apply(_, row); // transpose row to build col
		init();
		tempLine = line.split('');
	}
});


function init() {
  	// k tracks the square number
	var k = 0, idx = 0;
	board.length = 0;
	for(var i = 0; i < row.length; i++) {

    	k = Math.floor(i / 3) * 3; // round down to closest multiple of 3
		for(var j = 0; j < row[0].length; j++, idx++) {
		    if(j % 3 === 0 && j > 0) {
		        k++;
		    }

		    // Build the board
			if(row[i][j] !== '0') {
				board.push(Object.freeze({
					value: row[i][j],
					mutable: false
				}));
			} else {
				board.push({
					value: '',
					index: idx,
					mutable: true,
					rowIdx: i,
					colIdx: j,
					sqIdx: k,
					remaining: _.difference(base, _.union(row[i], col[j], getSquare(k)))
				});
			}
		}

	}
    solve();
}

function solve() {
	var progressMade = true;
	while(progressMade) {
		progressMade = false;
	    for(var i = 0; i < board.length; i++) {

	    	// Checks if any given spot has only one remaining solution
	    	if(board[i].mutable) {

	    		board[i].remaining = _.difference(base, _.union(row[board[i].rowIdx], col[board[i].colIdx], getSquare(board[i].sqIdx)));
		    	if(board[i].remaining.length === 1) {
		    		progressMade = true;
		        	fillSlot(i);
		    	}
		    	
	    	}

	  	} 
  	} 
}


// HELPER
// FUNCTIONS

function getSquare(n) {
    var i = Math.floor(n / 3) * 3;
    var j = 3 * (n % 3);
    var square = [];
    square.push(row[i].slice(j, j+3), 
    			row[i+1].slice(j, j+3), 
    			row[i+2].slice(j, j+3));
    return _.flatten(square);
}

function fillSlot(i) {
	board[i].value = board[i].remaining[0] + '';
	board[i].remaining = [];
	board[i].mutable = false;
	row[board[i].rowIdx][board[i].colIdx] = board[i].value;
	col[board[i].colIdx][board[i].rowIdx] = board[i].value;
}

function bruteForce() {

}






