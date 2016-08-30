var op = ['+', '-', '*', '/'];
var exp = [
		  	'a + op[i] + b + op[j] + c + op[k] + d',
		  	'a + op[i] + b + op[j] + c + op[k] + d',
		  	'a + op[i] + b + op[j] + c + op[k] + d',
		  	'a + op[i] + b + op[j] + c + op[k] + d',
		  	'a + op[i] + b + op[j] + c + op[k] + d',
		  	'a + op[i] + b + op[j] + c + op[k] + d',
		  	'a + op[i] + b + op[j] + c + op[k] + d',
		  	'a + op[i] + b + op[j] + c + op[k] + d',
		  	'a + op[i] + b + op[j] + c + op[k] + d',
		  	'a + op[i] + b + op[j] + c + op[k] + d',
		  	'a + op[i] + b + op[j] + c + op[k] + d',
		  ]

// var operators = {
//   '+': function(a, b) { return a + b },
//   '-': function(a, b) { return a - b },
//   '*': function(a, b) { return a * b },
//   '/': function(a, b) { return a / b },
// };

// Iterate through non repeated digits
for(var a = 4; a < 10; a++) {
  for(var b = 3; b < a; b++) {
	for(var c = 2; c < b; c++) {
	  for(var d = 1; d < c; d++) {


		// Iterate through all 4 operations
	  	for(var i = 0; i < op.length; i++) {
	  	  for(var j = 0; j < op.length; j++) {
	  		for(var k = 0; k < op.length; k++) {
			  

			  // exp = a + op[i] + b + op[j] + c + op[k] + d;
			  // console.log(eval(exp));


	  		
	  		    		
	  		}	
	  	  }	
	  	}
	  	


	  }
	}
  }	
}

exp = '1 + op[1] + ( + 2 + op[1] + 3) + op[2] + 4';
console.log(eval(exp));



