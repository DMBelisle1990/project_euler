searching = true;
var tri = 40755, pent = 40755, hex = 40755;
var i = 285, j = 165, k = 143;

while(searching) {

	k++;
	hex = k*(2*k - 1);
	while(pent < hex) {
		j++;
		pent = (j*(3*j - 1))/2;
		if(pent == hex) {
			// Don't have to include this loop since all hexagonal numbers are triangular as well
			while(tri < pent) {
				i++;
				tri = (i*(i+1))/2;
				if(tri == pent) {
					console.log(i);
					searching = false;
				}
			}
		}
	}

}