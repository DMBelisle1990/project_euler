var values = [200, 100, 50, 20, 10, 5, 2, 1],
    answer = 0;


function make200(total, idx) {
	while(total < 200) {
		if(idx < values.length) make200(total, idx+1);
		total += values[idx];
	}
	if(total == 200) answer++;
}

make200(0, 0);
console.log(answer);