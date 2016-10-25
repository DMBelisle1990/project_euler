var _ = require('underscore');
var nonBouncys = [1,2,3,4,5,6,7,8,9];
var prev = []; // Used to build the next set of non bouncy numbers
for(var i = 10; i < 100; i++) {
  nonBouncys.push(i+'');
  prev.push(i+'');
}

var deg = 2;

while(nonBouncys.length / Math.pow(10, deg) > .01) {
  var temp = prev.slice();
  prev.length = 0;

  var last = temp[0].length - 1;
  temp.forEach(function(n) {
    if(+n[0] > +n[last]) {
      for(var i = +n[last]; i >= 0; i--) {
        prev.push(n + i)
        nonBouncys.push(n + i);
      }
    } else if(+n[0] < +n[last]) {
      for(var i = +n[last]; i < 10; i++) {
        prev.push(n + i);
        nonBouncys.push(n + i);
      }
    } else {
      for(var i = +n[last] + 1; i < 10; i++) {
        prev.push(n + i);
        nonBouncys.push(n + i);
      }
      for(var i = +n[last]; i >= 0; i--) {
        prev.push(n + i)
        nonBouncys.push(n + i);
      }
    }
  });
  deg++;
}

nonBouncys.sort((a,b) => a - b);
var n = nonBouncys.filter(n => n < 1000000).length;
var total = 1000000;
nonBouncys = nonBouncys.filter(n => n >= 1000000);

var searching = true;
for(var i = 0; i < nonBouncys.length; i++) {
  while(total < nonBouncys[i]) {
    if(n / total === .01) {
      console.log(total);
      searching = false;
    }
    total++;
  }
  n++;
  if(!searching) {
    break;
  }
}
