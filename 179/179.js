/**
 * Shameless bruteforce to reach 100 problems solved
 * Optimizations definitely need to be made
 * Also the factorLookup runs into memory problems and breaks
 * */

// var Euler = require('../euler.js');
//
// function mergeObjects(obj1, obj2) {
//   for(e in obj2) {
//     e in obj1 ? obj1[e] += obj2[e] : obj1[e] = obj2[e];
//   }
//   return obj1;
// }
//
// var factorLookup = [];
// // Dynamically stores factorizations to prevent repeat work
// function factorization(num) {
// 	var max = Math.sqrt(num);
//   var primes = arguments[1] || Euler.getPrimesTo(max + 1);
// 	var result = arguments[2] || {};
// 	var rootFound = false;
// 	for(var i = 0; primes[i] <= max; i++) {
// 		if(num % primes[i] === 0) {
// 			rootFound = true;
// 			break;
// 		}
// 	}
//
// 	if(rootFound) {
// 		primes[i] in result ? result[primes[i]]++ : result[primes[i]] = 1;
//     var temp = factorLookup[num / primes[i]];
//     if(temp) {
//       return mergeObjects(result, temp);
//     }
// 		return factorization(num / primes[i], primes, result);
// 	} else {
// 		num in result ? result[num]++ : result[num] = 1;
// 		return result;
// 	}
// }
//
//
// var ans = 0;
// var prevDiv = 2;
//
// for(var i = 3; i < 1000000; i++) {
//   var factors = factorization(i);
//   factorLookup[i] = factors;
//   var currentDiv = 1;
//   for(prime in factors) {
//     currentDiv *= (factors[prime] + 1);
//   }
//   if(currentDiv === prevDiv) {
//     ans++;
//   }
//   prevDiv = currentDiv;
// }
//
// console.log(ans);


/**
 * Non stupid version
 * */

var ans = 0;
var numDivisors = []; // This includes divisors of 0
for(var i = 0; i <= 10000000; i++) {
  numDivisors.push(1);
}

for(var i = 2; i <= 10000000; i++) {
  for(var j = 0; j < numDivisors.length; j += i) {
    numDivisors[j]++;
  }
}

for(var i = 1; i < numDivisors.length; i++) {
  if(numDivisors[i] === numDivisors[i - 1]) {
    ans++;
  }
}

console.log(ans);
