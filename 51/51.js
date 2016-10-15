var Euler = require('../euler.js');

// An 8 digit family must replace 3n digits
// This is assuming a solution exists below 1 million
var primes = Euler.getPrimesTo(1000000).filter(prime => {
  if(prime <= 10000) {
    return false;
  };
  prime += '';
  prime = prime.substring(0, prime.length - 1);
  // A family of 8 will contain a 0, 1, or 2 as it's smallest repeated digit
  if(prime.split('0').length > 3 ||
     prime.split('1').length > 3 ||
     prime.split('2').length > 3) {
    return true;
  } else {
    return false;
  }
});

console.log(primes);
