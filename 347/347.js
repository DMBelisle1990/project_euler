var primes = [2, 3, 5];
var max = 10000000;

for(var i = 7; i < max/2; i+=2) {
  var isPrime = true;
  if(i % 5 === 0) {
    continue;
  }
  for(var j = 1; primes[j] <= Math.sqrt(i); j++) {
    if(i % primes[j] === 0) {
      isPrime = false;
      break;
    }
  }
  if(isPrime) {
    primes.push(i);
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~
// Implimentation
// ~~~~~~~~~~~~~~~~~~~~~~~~

var ans = 0;
for(var p = 0; p < primes.length; p++) {

  var pMax = Math.log(max) / Math.log(primes[p])
  for(var q = p + 1; q < primes.length; q++) {
    if(primes[p] * primes[q] > max) {
      break;
    }

    var qMax = Math.log(max) / Math.log(primes[q]);
    var best = 0;
    for(var i = 1; i < pMax; i++) {
      for(var j = 1; j < qMax; j++) {
        var product = Math.pow(primes[p], i) * Math.pow(primes[q], j);
        if(product <= max && product > best) {
          best = product;
        }
      }
    }

    ans += best;
  }
}
console.log(ans);
