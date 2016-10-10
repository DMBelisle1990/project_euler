function primesTo(max) {
  var primes = [2, 3, 5];
  for(var i = 7; i < max; i+=2) {
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
  return primes;
}

var primes = primesTo(1000000).filter(prime => prime > 56003);
console.log(primes.length);
