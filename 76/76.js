var ans = 0;

// maxPart is the largest integer in the sum, it also MUST be present(This is where I have been messing up)
function sumTo(num, maxPart) {

	var remainder = num - maxPart;
	if(remainder <= maxPart) ans++;
	if(maxPart <= 0) return;

	if(remainder > maxPart) 
		sumTo(remainder, maxPart);
	else
		sumTo(remainder, remainder - 1);

	sumTo(num, maxPart - 1);
}


var goal = 100;
sumTo(goal, goal-1);

console.log(ans);