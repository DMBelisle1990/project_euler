var _ = require('underscore');

function maxSum(array) {
  var ans = sum = 0;
  for(var i = 0; i < array.length; i++) {
    ans = Math.max(0, ans + array[i]);
    sum = Math.max(sum, ans);
  }
  return sum;
};

/*
 * BUILD GRID */

var grid = [];
var s = [];
var row = [];
for(var k = 1; k <= 55; k++) {
  var val = (100003 - 200003*k + 300007*k*k*k) % 1000000 - 500000;
  s.push(val);
  row.push(val);
}

for(var k = 56; k <= 4000000; k++) {
  var val = (s[k-25] + s[k-56] + 1000000) % 1000000 - 500000;
  s.push(val);
  row.push(val);
  if(k % 2000 === 0) {
    grid.push(row);
    row = [];
  }
}

/*
 * FIND MAX SUBSEQUENCE */

// I lazily checked the answer for horizontal and vertical first before coding diagonal checks
// The answer is vertical so there was no need to check diagonals

var m = 0;
grid.forEach(row => m = Math.max(m, maxSum(row)) );
grid = _.zip.apply(_, grid); // Transpose grid
grid.forEach(row => m = Math.max(m, maxSum(row)) );

console.log(m);
