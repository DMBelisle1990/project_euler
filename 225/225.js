var Euler = require('../euler.js');

var t1 = t2 = t3 = 1;
while(t3 < Number.MAX_SAFE_INTEGER) {
  var temp = t3 + t2 + t1;
  t1 = t2;
  t2 = t3;
  t3 = temp;
  console.log(Euler.factorization(t3));
}
