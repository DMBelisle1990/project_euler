var primes = [2], isPrime;

for(var i = 3; i < 100000000; i+=2) {
  isPrime = true;
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

var validPrimes = primes.slice(0);
for(var i = 1; i < validPrimes.length; i++) {
   if(validPrimes[i] % 10 === 7 || Math.floor((validPrimes[i] / 10) % 10) % 2 === 0) {
     validPrimes.slice(i,1);
     i--;
     continue;
   }
   if(primes.indexOf(((validPrimes[i]-1)/2) + 2) === -1) {
     validPrimes.slice(i,1);
     i--;
     continue;
   }
}

console.log(validPrimes.length);
