var sums = {};
var num = 0, den = 0;
for(var a = 1; a < 5; a++)
  for(var b = 1; b < 5; b++)
  	for(var c = 1; c < 5; c++)
  	  for(var d = 1; d < 5; d++)
  	  	for(var e = 1; e < 5; e++)
  	  	  for(var f = 1; f < 5; f++)
  	  	  	for(var g = 1; g < 5; g++)
  	  	  	  for(var h = 1; h < 5; h++)
  	  	  	  	for(var i = 1, sum; i < 5; i++) {
  	  	  	  		sum = a+b+c+d+e+f+g+h+i;
  	  	  	  		den++;
  	  	  	  		if(sum > 20) num++;
  	  	  	  		sum in sums ? sums[sum]++ : sums[sum] = 1;
  	  	  	  	}


var sums2 = {};  	  	  	  	
var num2 = 0, den2 = 0;

for(var a = 1; a < 7; a++)
  for(var b = 1; b < 7; b++)
  	for(var c = 1; c < 7; c++)
  	  for(var d = 1; d < 7; d++)
  	  	for(var e = 1; e < 7; e++)
  	  	  for(var f = 1, sum; f < 7; f++) {
  	  	  	  sum = a+b+c+d+e+f;
  	  	  	  den2++;
  	  		  if(sum < 1) num2++;
  	  		  sum in sums2 ? sums2[sum]++ : sums2[sum] = 1;
  	  	  }

var ans = 0;
for(var i = 9, total1 = den, total2 = 0; i < 37; i++) {
	total1 -= sums[i];
	if(i > 9) total2 += sums2[i-1];
	console.log("total1: " + total1);
	console.log("total2: " + total2);
	ans += (total1/den)*(total2/den2);
}

console.log(ans);