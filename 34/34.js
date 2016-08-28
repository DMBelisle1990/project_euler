function factorial(num) {
	if(num == 0) return 1;
	var soln = 1;
	for(var i = num; i > 1; i--)
		soln *= i;

	return soln;
}



var nums = [], temp, digit_factorials = [];
for(var i = 0; i < 10; i++)
	digit_factorials[i] = factorial(i);

for(var i = 10; i < 2540160; i++) {
	temp = (i+"").split("");
	for(var j = 0, sum = 0; j < temp.length; j++) 
		sum += digit_factorials[temp[j]*1];

	if(sum == i) nums.push(i);
}

var ans = 0
for(var i = 0; i < nums.length; i++)
	ans += nums[i];

console.log(ans);