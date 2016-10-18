// Ugly solution but very fast
// I compute the prime factorization of each element in the triangle using stored factorizations then check for duplicates
// This takes advantage of the fact that no element will have a prime factor larger than it's row number

var Euler = require('../euler.js');
var _ = require('underscore');

const MAX_ROW = 51;

// Store prime factorizations for every num up to largest we will encounter
var factorizations = [0];
for(var i = 1; i < MAX_ROW; i++) {
  factorizations.push(Euler.factorization(i));
}

var ans = 0;
var squarefreeNums = [1];
for(var n = 0; n < MAX_ROW; n++) {
  for(var k = 0; k <= n; k++) {

    var num = [];
    var den = [];
    if(k === 0 || k === n) {
      continue;
    } else {
      // Compute prime factorization for numerator and denominator
      for(var i = n; i > n - k; i--) {
        num.push(factorizations[i]);
      }
      for(var i = 1; i <= k; i++) {
        den.push(factorizations[i]);
      }

      num = _.flatten(num);
      den = _.flatten(den);

      // Cancel the fraction
      for(var i = 0; i < den.length; i++) {
        var idx = num.indexOf(den[i]);
        if(idx !== -1) {
          num.splice(idx, 1);
        }
      }
      num = num.sort((a,b) => a - b);

      // If a repeat is found it must contain a square of a prime
      var squarefree = true;
      for(var i = 1; i < num.length; i++) {
        if(num[i] === num[i-1]) {
          squarefree = false;
          break;
        }
      }
      if(squarefree) {
        var temp = Euler.combination(n,k);
        if(squarefreeNums.indexOf(temp) === -1) {
          squarefreeNums.push(temp);
        }
      }
    }

  }
}
console.log(squarefreeNums.reduce((sum, n) => sum += n));
