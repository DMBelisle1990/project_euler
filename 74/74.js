var factorials = [1,1,2,6,24,120,720,5040,40320,362880];
// Looping numbers every chain will eventually reach
var stops = {1: 1, 2: 1, 145: 1, 169: 3, 363601: 3, 1454: 3, 871: 2, 40585: 1, 45361: 2, 872: 2, 45362: 2};
var ans = 0;

for(var i = 1; i < 1000000; i++) {

	var temp = i + '';
	var length = 0;

	while(!(temp in stops)) {
		// Sum the digits
		var sum = 0;
		for(var j = 0; j < temp.length; j++) {
			sum += factorials[temp[j]];
		}

		temp = sum + '';
		length++;
	}

	length += stops[temp];
	if(length === 60) {
		ans++;
	}

}

console.log(ans);
