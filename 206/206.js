var start = Math.floor(Math.sqrt(1020304050607080900));
var stop  = Math.floor(Math.sqrt(1929394959697989999));

for(var i = start; i < stop; i+=100) {
	var temp = ('' + (i * i)).split('');
	for(var j = 1; j < temp.length; j++) {
		temp.splice(j,1);
	}
	if(temp.join('') == '1234567890') {
		console.log(i);
		break;
	}
}




