var product = [2];

for(var i = 0; i < 999; i++) {
	for(var j = 0; j < product.length; j++) 
		product[j] *= 2;

	for(var j = 0; j < product.length; j++) {
		if(Math.floor(product[j]/10)) {
			if(product[j+1] > -1) {
				product[j+1] += Math.floor(product[j]/10);
				product[j] %= 10;
			} else {
				product.push(Math.floor(product[j]/10));
				product[j] %= 10;
			}
		}
	}
	
}



console.log(product.reduce( (prev, curr) => prev + curr ));

