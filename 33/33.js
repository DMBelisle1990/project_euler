var ans_num = 1, ans_den = 1;;
var divisor, noob_divisor, str_num, str_den;
for(var num = 10; num < 100; num++) {
	for(var den = num + 1; den < 100; den++) {
		if(num%10 == 0 && den%10 == 0) continue;

		divisor = num / den;
		str_num = num+"";
		str_den = den+"";

		if(str_num[0] == str_den[0]) noob_divisor = str_num[1] / str_den[1];
		else if(str_num[0] == str_den[1]) noob_divisor = str_num[1] / str_den[0];
		else if(str_num[1] == str_den[0]) noob_divisor = str_num[0] / str_den[1];
		else if(str_num[1] == str_den[1]) noob_divisor = str_num[0] / str_den[0];
		else continue;

		if(divisor == noob_divisor) {
			ans_num *= num;
			ans_den *= den;
		}
	}
}

console.log(ans_num / ans_den);