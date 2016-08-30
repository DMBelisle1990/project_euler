var answer = 0;
var temp;
var bigNum = 100000000;
String.prototype.reverse=function(){return this.split("").reverse().join("");}

var temp2;

for(var i = 0; i < 100; i++) {
	temp = String(i);
	temp2 = temp.reverse()*1;
	console.log(temp + "+" + temp2 + "=" + (temp*1 + temp.reverse()*1));
}

// var start = new Date().getTime();
// for(var i = 12; i < bigNum; i+=2) {
// 	temp = String(i);
// 	if(i % 10 == 0) i+=12;
// 	else if(i % 2 == temp.charAt(0)) continue;
// 	else {
// 		answer++;
// 		temp = temp*1 + temp.reverse()*1;
// 		for(var j = 0; j < temp.length; j++) {
// 			if(temp.charAt(j) % 2 == 0) {
// 				answer--;
// 				break;
// 			}
// 		}
// 	}
// }

// for(var i = 21; i < bigNum; i+=2) {
// 	temp = String(i);
// 	if(i % 10 == 0) i+=10;
// 	else if(i % 2 == temp.charAt(0)) continue;
// 	else {
// 		answer++;
// 		temp = temp*1 + temp.reverse()*1;
// 		for(var j = 0; j < temp.length; j++) {
// 			if(temp.charAt(j) % 2 == 0) {
// 				answer--;
// 				break;
// 			}
// 		}
// 	}
// }

// var end = new Date().getTime();
// var time = end - start;
// console.log('Execution time: ' + time);

// console.log(answer);