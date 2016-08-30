var i = 1, noAnswer = true, ans;
while(noAnswer) {

	for(var x = 50*i, temp; x <= 166*i && noAnswer; x++) {
		temp = ((x*2)+"").split("").sort().toString();
		for(var j = 3, temp2; j < 7; j++) {
			temp2 = ((x*j)+"").split("").sort().toString();
			if(temp != temp2) 
				break;
			else if(j == 6) {
				noAnswer = false;
				ans = x;
			}
		}
	}

	i *= 10;
}

console.log(ans);