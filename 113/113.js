/* SOLUTION EXPLANATION
 *
 * If a number is increasing and ends in n then there 10 - n possible numbers that may follow
 * Similar logic applies to a decreasing number
 *
 * If we start with an array of 1's and continuosly stepSum it for increasing and decreasing cases
 * and remove the double count of nums consisting of only a single digit we will get the answer
 * */

function stepSum(array) {
 for(var i = 1; i < array.length; i++) {
   array[i] += array[i - 1];
 }
 return array;
}

var start = [1,1,1,1,1,1,1,1,1];
var ans = 9;

for(var i = 1; i < 100; i++) {
  start = stepSum(start);
  // Subtract last element since you can not increase into 0 
  ans += 2 * dec.reduce((sum, n) => sum += n) - 10 - dec[dec.length - 1];
}

console.log(ans);
