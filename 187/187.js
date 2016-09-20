var primes = [2, 3, 5];
var max = 100000000;

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

var ans = 0;
for(var i = 0; i < primes.length; i++) {
  for(var j = i; j < primes.length; j++) {
    if(primes[i] * primes[j] >= max) break;
    ans++;
  }
}

console.log(ans);
