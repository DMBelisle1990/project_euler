var pandigital;
var products = [];
for(var i = 2, str_i; i < 99; i++) {
	str_i = i+"";
	if(str_i[0] == str_i[1]) {
		i++;
		continue;
	}

	for(var j = 123, str_j, product; j < 10000; j++) {
		str_j = j+"";
		product = i*j;

		// Set j to 4 digits if i is only 1
		if(i < 10 && j < 1234) {
			j = 1234;
			continue;
		}

		// Break if i*j has 5 digits
		if(i * j > 9876) break;

		// Continue if j contains i
		if(str_j[0] == i) {
			j+=1000;
			continue;
		} else if(str_j[1] == i) {
			j+=100;
			continue;
		} else if(str_j[2] == i) {
			j+=10;
			continue;
		} else if(str_j[3] == i) {
			j++;
			continue;
		}

		// This is where we test for pandigital
		pandigital = (str_j + str_i + product).split("");
		if(pandigital.length == 9) { 
			var add = true;
			for(var k = 1; k < 10; k++) {
				if(pandigital.indexOf(k+"") == -1) {
					add = false;
					break;
				}
			}
			if(add) {
				if(products.indexOf(product) == -1)
					products.push(product);
			}
		}
	}
}

var ans = 0;
for(var i = 0; i < products.length; i++)
	ans += products[i];

console.log(ans);



