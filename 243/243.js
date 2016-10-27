/* SOLUTION JUSTIFICATION
*
* Mostly guess and check
* Each distinct prime that is found in the prime factorization reduces the numbers that are less than it and coprime
* Numbers not containing all primes up to 23 as factors wont pass 83% so I used that as a starting point and used the
* smallest multiple of it that fulfilled the necessary condition
* */

var count = 0;
var SIZE = 2*3*5*7*11*13*17*19*23*4;
for(var i = 2; i < SIZE; i++) {
  if(i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0
      || i % 11 === 0 || i % 13 === 0 || i % 17 === 0 || i % 19 === 0
      || i % 23 === 0) count++;
}

console.log((1 - count / (SIZE-1)) < (15499/94744));
console.log(SIZE);
