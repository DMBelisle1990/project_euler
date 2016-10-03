// Dirty brute force since it was obvious it wouldnt take long

function primesTo(max) {
  var primes = [2, 3, 5];
  for(var i = 7; i < MAX; i+=2) {
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

var MAX = Math.sqrt(50000000);
var primes = primesTo(MAX);
var squares = [], cubes = [], quads = [];
var ans = new Set();

for(var i = 0; i < primes.length; i++) {
  var n = primes[i] * primes[i];
  squares.push(n);
  n *= primes[i];
  if(n < 50000000) {
    cubes.push(Math.pow(primes[i], 3));
  }
  n *= primes[i];
  if(n < 50000000) {
    quads.push(Math.pow(primes[i], 4));
  }
}

for(var i = 0; i < squares.length; i++) {
  for(var j = 0; j < cubes.length; j++) {
    for(var k = 0; k < quads.length; k++) {
      var num = squares[i] + cubes[j] + quads[k];
      if(num < 50000000) {
        ans.add(num);
      }
    }
  }
}

console.log(ans.size);
