var valueOf = {2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, T:10, J:11, Q:12, K:13, A:14,
			   pair:15, twopair:30, triple:45, straight:60, flush:75, house:90,
			   quad: 105};

var fs = require('fs');
var	content;
var player1wins = 0; // Only care about player1 wins

fs.readFile('poker.txt', function(error, data) {
	content = data.toString().split('\n');
	start();
});

function start() {
	var hand1 = [];
	var hand2 = [];
	const HAND_SIZE = 5;

	for(var i = 0; i < content.length; i++) {
		hand1.length = hand2.length = 0; 
		var temp = content[i].split(' ');	
		for(var j = 0; j < HAND_SIZE; j++) {
			hand1.push(temp[j]);
			hand2.push(temp[j + HAND_SIZE]);
		}
		compareHands(hand1, hand2);
	}
	console.log(player1wins); 
}

function compareHands(hand1, hand2) {
	score1 = evaluateHand(hand1);
	score2 = evaluateHand(hand2);
	// console.log(temp1);
	if(score1.val > score2.val) {
		player1wins++;
	} else if(score1.val == score2.val) {
		var temp1 = Object.keys(score1.kickers).reverse(); // This implimentation is not perfect but works for this problem
		var temp2 = Object.keys(score2.kickers).reverse();
		for(var i = 0; i < temp1.length; i++) {
			if(+temp1[i] > +temp2[i]) {
				player1wins++;
				break;
			} else if(+temp1[i] < +temp2[i]) {
				break;
			}
		}
	}
}

function evaluateHand(hand) {
	var ranks = {};
	var suits = {};

	for(var i = 0, temp; i < hand.length; i++) {
		temp = hand[i].split('');
		valueOf[temp[0]] in ranks ? ranks[valueOf[temp[0]]]++ : ranks[valueOf[temp[0]]] = 1;
		suits[temp[1]] = 1;
	}

	var evaluated = {
		val: 0,
		kickers: {}
	};

	switch(Object.keys(ranks).length) {

		// Check for flush and/or straight 
		// If neither set highcard
		case 5:
			var prevRank;
			var isStraight = true;
			for(rank in ranks) {
				if(prevRank && rank - prevRank !== 1) {
					isStraight = false;
					break;
				}
				prevRank = rank;
			}
			if(isStraight) {
				evaluated.val += (valueOf['straight'] + +prevRank);
			}

			if(Object.keys(suits).length === 1) {
				evaluated.val += valueOf['flush'];
			} 

			evaluated.kickers = ranks; // Used if flush or highcard tie
			return evaluated;

		// Check for pair
		case 4:
			for(rank in ranks) {
				if(ranks[rank] == 2) {
					evaluated.val = valueOf['pair'] + +rank;
					delete ranks[rank];
					evaluated.kickers = ranks;
					return evaluated;
				} 
			}
			
		// Check for 3OK or two pair
		case 3:
			for(rank in ranks) {
				if(ranks[rank] == 3) {
					evaluated.val = valueOf['triple'] + +rank;
					return evaluated;
				}
			}
				
			for(rank in ranks) {
				if(ranks[rank] == 2) {
					evaluated.val = valueOf['twopair'] + +rank;
					delete ranks[rank];
					evaluated.kickers = ranks;
					return evaluated;
				}
			}

		// Check for full house or 4OK
		case 2:
			for(rank in ranks) {
				if(ranks[rank] == 3) {
					evaluated.val = valueOf['house'] + +rank;
					return evaluated;
				} else if(ranks[rank] == 4) {
					evaluated.val = valueOf['quad'] + +rank;
					return evaluated;
				}
			}

		default:
			console.log('uh oh');

	}
	
}





