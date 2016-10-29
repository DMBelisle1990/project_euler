/*
 * This is a library of helpful commonly used functions
 * Whenever speed improvements can be made they will first be made here
 */

 // How to read in files
 // var fs = require('fs');
 //
 // fs.readFile('filename.txt', function(error, data) {
 //
 // });

 var _ = require('underscore');

 /**
  * @param {int} max
  * @returns {Array} primes
  * */
function getPrimesTo(max) {
	var primes = [2, 3, 5];
	for(var i = 7; i <= max; i+=2) {
		if(i % 5 === 0) {
			continue;
		}
		var isPrime = true;
		var maxPrime = Math.floor(Math.sqrt(i));
		for(var j = 0; primes[j] <= maxPrime; j++) {
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

function factorial(x) {
  return (x === 0 ? 1 : x * factorial(x - 1));
}

function combination(x, y) {
  return factorial(x) / (factorial(y) * factorial(x - y));
}

/**
 * @param {int} num
 * @returns {Array} result
 * */
function factorization(num) {
	var max = Math.sqrt(num);
  primes = arguments[1] || getPrimesTo(max + 1);
	var result = arguments[2] || [];
	var rootFound = false;
	for(var i = 0; primes[i] <= max; i++) {
		if(num % primes[i] === 0) {
			rootFound = true;
			break;
		}
	}

	if(rootFound) {
		result.push(primes[i]);
		return factorization(num / primes[i], primes, result);
	} else {
		result.push(num);
		return result;
	}
}

/**
 * @param {int} num
 * @returns {int} result
 * */
function totient(num) {
	var uniqFactors = _.uniq(factorization(num));
	var result = num;
	for(var i = 0; i < uniqFactors.length; i++) {
		result *= (1 - (1/uniqFactors[i]));
	}
	return Math.round(result);
}

/**
 * @param {int} a
 * @param {int} b
 * @returns {int}
 * */
function gcd(a,b) {
  return b === 0 ? a : gcd(b, a % b);
}

// Exports
module.exports.getPrimesTo = getPrimesTo;
module.exports.factorization = factorization;
module.exports.totient = totient;
module.exports.gcd = gcd;
module.exports.combination = combination;
