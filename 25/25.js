var fn_2 = [1];
var fn_1 = [1];
var fn = [];
var idx = 2;
var sum;
var remainder = 0;

while(true) {
	for(var i = fn_1.length - 1; i >= 0; i--) {
		while(fn_2.length < fn_1.length) fn_2.unshift(0);

		sum = fn_1[i] + fn_2[i] + remainder;
		if(sum < 10) {
			fn.unshift(sum);
			remainder = 0;
		} else {
			fn.unshift(sum % 10);
			remainder = 1;
		}
	}

	if(remainder) fn.unshift(1);
	remainder = 0;

	idx++;
	if(fn.length == 1000) 
		break;

	fn_2 = fn_1.slice();
	fn_1 = fn.slice();
	fn = [];
}

console.log(idx);