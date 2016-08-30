var nums = [], temp;
for(var i = 10; i < 354294; i++) {
	temp = (i+"").split("");
	for(var j = 0, sum = 0; j < temp.length; j++) 
		sum += Math.pow(temp[j]*1, 5);

	if(sum == i) nums.push(i);
}

var ans = 0
for(var i = 0; i < nums.length; i++)
	ans += nums[i];

console.log(ans);