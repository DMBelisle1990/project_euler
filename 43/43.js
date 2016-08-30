var sum = 0;
var d6 = 5;
var temp, add;
for(var d1 = 1; d1 < 10; d1++) {
  for(var d2 = 0; d2 < 10; d2++) {
  	for(var d3 = 0; d3 < 10; d3++) {
  	  for(var d4 = 0; d4 <= 8; d4+=2) {
  	  	for(var d5 = 0; d5 < 10; d5++) {
  	  	  if((d3 + d4 + d5)%3 != 0) continue;
	  	  	for(var d7 = 0; d7 < 10; d7++) {
	  	  	  if((100*d5 + 10*d6 + 1*d7)%7 != 0) continue;
	  	  	  for(var d8 = 0; d8 < 10; d8++) {
	  	  	  	if((d6 - d7 + d8)%11 != 0) continue;
	  	  	  	for(var d9 = 0; d9 < 10; d9++) {
	  	  	  	  if((100*d7 + 10*d8 + d9)%13 != 0) continue;
	  	  	  	  for(var d0 = 0; d0 < 10; d0++) {
	  	  	  	  	if((100*d8 + 10*d9 + d0)%17 != 0)
	  	  	  	  		continue;
	  	  	  	  	else {
	  	  	  	  		temp = d1+""+d2+""+d3+""+d4+""+d5+""+d6+""+d7+""+d8+""+d9+""+d0;
	  	  	  	  		temp = temp.split("");
	  	  	  	  		add = true;
	  	  	  	  		for(var i = 0; i < 10; i++) {
	  	  	  	  			if(temp.indexOf(i+"") > -1) {}
	  	  	  	  			else add = false;
	  	  	  	  		}
	  	  	  	  		if(add) sum += (d0 + d9*10 + d8*100 + d7*1000 + d6*10000 + d5*100000 + d4*1000000 + d3*10000000 + d2*100000000 + d1*1000000000);
	  	  	  	  	}
	  	  	  	  }
	  	  	  	}
	  	  	  }
	  	  	}
  	  	}
  	  }
  	}
  }
}

console.log(sum);