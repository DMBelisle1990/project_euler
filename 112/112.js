var nonBouncys = [1,2,3,4,5,6,7,8,9];
var prev = []; // Used to build the next set of non bouncy numbers
for(var i = 10; i < 100; i++) {
  nonBouncys.push(i+'');
  prev.push(i+'');
}

var deg = 2;

while(nonBouncys.length / Math.pow(10, deg++) > .1) {
  console.log('nonbouncys', nonBouncys.length);
  console.log('pow', Math.pow(10,deg-1));
  console.log(nonBouncys.length / Math.pow(10, deg-1));
  var temp = prev.slice();
  prev.length = 0;

  var last = temp[0].length;
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
      prev.push(n + n[0]);
      nonBouncys.push(n + n[0]);
    }
  });
}
