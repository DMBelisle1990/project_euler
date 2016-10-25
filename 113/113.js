var inc = [1,1,1,1,1,1,1,1,1];
var dec = [1,1,1,1,1,1,1,1,1];
var ans = 9;

for(var i = 0; i < 101; i++) {

  var prevInc = inc.slice();
  var prevDec = dec.slice();
  inc.length = 0;
  dec.length = 0;

  for(var j = 0; j < prevInc.length; j++) {
    for(var k = j; k < prevInc.length; k++) {
      inc[k] = inc[k] || 0;
      inc[k] += prevInc[j];
    }
  }

  for(var j = 0; j < prevDec.length; j++) {
    for(var k = prevDec[j] - 1; k >= 0; k++) {
      dec[k] = dec[k] || 0;
      dec[k] += prevInc[j];
    }
  }

}

