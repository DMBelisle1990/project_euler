var ans = 0;
for(var i = 2, n = 2, n_fact = 2; i < 100000000; i++) {

	// Determine factorial here
	n = 2;
	n_fact = 2;
	while(n_fact % i != 0) {
		n_fact *= ++n;
		console.log(n_fact);
	}

	ans += n;
}

console.log(ans);