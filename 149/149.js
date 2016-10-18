var _ = require('underscore');

function maxSum(nums) {
  var result = [nums[0]];
  // Collapse the positives and negatives
  var sgn = (nums[0] < 0 ? -1 : 1);
  for(var i = 1; i < nums.length; i++) {
    var l = result.length - 1;
    while(nums[i] * sgn >= 0) {
      result[l] += nums[i++];
    }
    sgn *= -1;
    result.push(nums[i]);
  }

  // Trim negative array ends
  if(result[0] <= 0) {
    result.splice(0, 1);
  }
  if(result[result.length-1] <= 0) {
    result.splice(result.length-1, 1);
  }

  var max = result[0];
  for(var i = 0; i < result.length; i++) {

  }
  return(result);
}

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

grid.forEach(row => {
  console.log(maxSum(row));
});
