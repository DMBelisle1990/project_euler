var op = ['+', '-', '*', '/'];
var operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
};

function solve(n1, op1, n2, op2, n3, op3, n4) {
	return operators[op3]( operators[op2]( operators[op1](n1, n2), n3 ), n4 );
}

function getResults(a, b, c, d) {
	var results = [];
	// Loop over operators here
	for(var i = 0; i < op.length; i++) {
		for(var j = 0; j < op.length; j++) {
			for(var k = 0; k < op.length; k++) {
				
				// 6 computations should happen here
				results[solve(a, op[i], b, op[j], c, op[k], d)] = true;
				results[solve(a, op[j], b, op[i], c, op[k], d)] = true;
				results[solve(a, op[k], b, op[i], c, op[j], d)] = true;
				results[solve(a, op[k], b, op[j], c, op[i], d)] = true;
				results[solve(a, op[i], b, op[k], c, op[j], d)] = true;
				results[solve(a, op[j], b, op[k], c, op[i], d)] = true;

			}
		}	
	}
	return results;
}

var max = 0;
var ans = '';

for(var d = 1; d < 10; d++) {
  for(var c = 1; c < 10; c++) {
		for(var b = 1; b < 10; b++) {
	  	for(var a = 1; a < 10; a++) {

				var results = getResults(a, b, c, d);  // Array of booleans where each index will represent a discovered result

				var idx = 1;
				var count = 0;
				while(results[idx++]) {
					count++;
				}
				if(count > max) {
					max = count;
					ans = a + '' + b + '' + c + '' + d;
				}

	  	}
		}
  }	
}

console.log(ans, max);





