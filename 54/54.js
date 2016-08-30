var valueOf = {2:1, 3:2, 4:3, 5:4, 6:5, 7:6, 8:7, 9:8, T:9, J:10, Q:11, K:12, A:13,
			   pair:15, twopair:30, triple:45, straight:60, flush:75, house:90,
			   quad: 105};

var fs = require("fs"),
	content;

fs.readFile("poker.txt", function(error, data) {
	content = data.toString().split("\n");
	start();
});

function start() {

	var hand1 = [], hand2 = [];
	for(var i = 0, temp; i < content.length; i++, hand1.length = 0, hand2.length = 0) {

		temp = content[i].split(" ");
		for(var j = 0; j < 5; j++) {
			hand1.push(temp[j]);
			hand2.push(temp[j+5]);
		}

		console.log(hand1);
		console.log(hand2);
		break;

		// evaluateHand(hand1);
		// evaluateHand(hand2);
	}

}

// Returns an array with the value first followed by the kicker values
function evaluateHand(hand) {

	var ranks = {}, suits = {}, kickers = [];
	for(var j = 0, temp; j < hand.length; j++) {
		temp = hand[j].split("");
		temp[0] in ranks ? ranks[valueOf[temp[0]]]++ : ranks[valueOf[temp[0]]] = 1;
		suits[temp[1]] = 1;
	}


	switch(Object.keys(ranks).length) {

		// var temp = 0;
		case 5:
			// Check for flush NEEDS KICKERS
			if(Object.keys(suits).length == 1) 
				temp += valueOf['flush'];
			
			// Check for straight

			return temp;
			break;

		// Check for pair NEEDS KICKERS
		case 4:
			for(rank in ranks) 
				if(ranks[rank] == 2) 
					return valueOf['pair'] + valueOf[rank];

			break;
			
		// Check for 3OK or two pair
		case 3:
			for(rank in ranks) 
				// No kicker needed
				if(ranks[rank] == 3) 
					return valueOf['triple'] + valueOf[rank];
				
				// TODO: 2 pair NEEDS KICKERS
			break;

		// Check for full house or 4OK
		case 2:
			// No kickers needed here
			for(rank in ranks) {
				if(ranks[rank] == 3) 
					return valueOf['house'] + valueOf[rank];
				if(ranks[rank] == 4) 
					return valueOf['quad'] + valueOf[rank];
			}

			break;	

		default:
			console.log("uh oh");

	}
	
}





