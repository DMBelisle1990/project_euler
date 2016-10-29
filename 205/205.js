/**
 * Ugly but fast solution
 * */

var Euler = require('../euler.js');

// Start by creating 2 arrays of combinations of all possible dice rolls for Pete and Colin
// Note that order does matter for this problem in terms of calculating the final answer
var pete = [];
var colin = [];
for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    for (var k = 0; k < 10; k++) {
      for (var l = 0; l < 10; l++) {
        if(i + j + k + l === 9) {
          pete.push([i,j,k,l]);
        }
        for (var m = 0; m < 7; m++) {
          for (var n = 0; n < 7; n++) {
            if(i + j + k + l + m + n ===6) {
              colin.push([i,j,k,l,m,n]);
            }
          }
        }
      }
    }
  }
}

// For each distribution in the array, find what it sums
// to and then find all orderings that produce that sum
//
// Example: If we have [1,0,0,8] that means Pete rolled 1 1 and 8 4s
// The possible ways this can happen is C(9,1)*C(8,0)*C(8,0)*C(8,8)
function sums(array, sumTo) {
  var result = [];
  for(var j = 0; j < 37; j++) {
    result.push(0);
  }
  array.forEach(dist => {
    var n = sumTo;
    var totalSums = 1;
    var rollSum = 0;
    var i = 1;
    dist.forEach(k => {
      totalSums *= Euler.combination(n, k);
      n -= k;
      rollSum += (k * i++);
    });
    result[rollSum] += totalSums;
  });
  return result;
}

var waysForPetesSum = sums(pete, 9);
var waysForColinsSum = sums(colin, 6);

// Obtain total ways Colin rolls at most i
for(var i = 1; i < waysForColinsSum.length; i++) {
  waysForColinsSum[i] += waysForColinsSum[i - 1];
}

var possiblePeteRolls = Math.pow(4, 9);
var possibleColinRolls = Math.pow(6, 6);

// Final answer is P(Pete rolls n) * P(Colin rolls at most n-1) over all valid n
var ans = 0;
for(var i = 1; i < waysForPetesSum.length; i++) {
  ans += ((waysForPetesSum[i] / possiblePeteRolls) * (waysForColinsSum[i-1] / possibleColinRolls));
}

console.log(ans);
