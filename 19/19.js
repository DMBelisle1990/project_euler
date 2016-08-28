var months = [31,28,31,30,31,30,31,31,30,31,30,31];

var numSundays = 0;
var day = 6;
var currentMonth = 0;

year = 1901;
while(year < 2001) {

	day+=7;

	if(day > months[currentMonth]) {
		day -= months[currentMonth];
		if(currentMonth == 11) {
			currentMonth = 0;
			year++;
			if(year % 4 == 0) {
				if(year % 400 == 0) months[1] = 29;
				else if(year % 100 == 0){
					months[1] = 28;
				} 
				else {
					months[1] = 29;
				}
			} else {
				months[1] = 28;
			}
		} else {
			currentMonth++;
		}
	}
	if(day == 1 && year < 2001) numSundays++;
}

console.log(numSundays);





