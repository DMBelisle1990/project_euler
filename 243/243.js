var Euler = require('../euler.js');
var d = 2*3*5*7*11*13*17*19*23;
var i = 1;
while(true) {
  var resillience = Euler.totient(d * i) / (d * i - 1);
  if(resillience < 15499/94744) {
    console.log(d * i);
    break;
  }
  i++;
}
