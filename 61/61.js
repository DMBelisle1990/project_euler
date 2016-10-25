var _ = require('underscore');
var polyNums = [];
var possibleStarts = [], possibleEnds = []; // temp arrays used to get all valid nums

/* HELPER FUNCTIONS */
function inRange(num) {
  return num > 999 && num < 10000 && (num+'')[2] !== '0';
}

function valid(num) {
  num += '';
  var start = num.substring(0,2);
  var end = num.substring(2);
  return ~validNums.indexOf(start) && ~validNums.indexOf(end);
}

function getStart(num) {
  return num.substring(0,2);
}

function getEnd(num) {
  return num.substring(2);
}

function getNthPolyNums(n) {
  var polyNums = [];
  polyNums.push((n * (n + 1)) / 2);   // tri
  polyNums.push(n * n);               // sq
  polyNums.push((n * (3*n - 1)) / 2); // pent
  polyNums.push(n * (2*n - 1));       // hex
  polyNums.push((n * (5*n - 3)) / 2); // hept
  polyNums.push(n * (3*n - 2));       // oct
  return polyNums;
}

/* IMPLIMENTATION */
for(var i = 10; !polyNum || polyNum[0] < 10000; i++) {
  var polyNum = getNthPolyNums(i);

  for(var j = 0; j < polyNum.length; j++) {
    if(typeof polyNums[j] === 'undefined') {
      polyNums[j] = [];
    } else {
      if(inRange(polyNum[j])) {
        var str = polyNum[j] + '';
        polyNums[j].push(str);
        if(possibleStarts.indexOf(str.substring(0, 2)) === -1) {
          possibleStarts.push(str.substring(0, 2));
        }
        if(possibleEnds.indexOf(str.substring(2)) === -1) {
          possibleEnds.push(str.substring(2));
        }
      }
    }
  }

}

var validNums = _.intersection(possibleStarts, possibleEnds);

for(var i = 0; i < polyNums.length; i++) {
  polyNums[i] = polyNums[i].filter( num => valid(num) );
}

polyNums = _.flatten(polyNums);
console.log(polyNums.length);
polyNums = _.uniq(polyNums);
console.log(polyNums.length);
