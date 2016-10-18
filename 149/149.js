var _ = require('underscore');

function maxSum(nums) {
  var result = [0];
  var sgn = (nums[0] < 0 ? -1 : 1);
  for(var i = 0; i < nums.length; i++) {
    var l = result.length - 1;
    while(nums[i] * sgn < 0) {
      result[l] += nums[i++];
    }
    sgn *= -1;
    result.push(nums[i]);
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

});

console.log(maxSum([-1,0,2,2,-2,-3,5]));
