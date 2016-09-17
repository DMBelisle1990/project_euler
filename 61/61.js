var triNums = [], sqNums = [], pentNums = [], hexNums = [], heptNums = [], octNums = [];
var possibleStarts = [], possibleEnds = [];
function valid(num) {
  return num > 999 && num < 10000 && (num+'')[2] != '0';
}

for(var i = 10; !triNum || triNum < 10000; i++) {
  var triNum = (i * (i + 1)) / 2;
  var sqNum = i * i;
  var pentNum = (i * (3*i - 1)) / 2;
  var hexNum = i * (2*i - 1);
  var heptNum = (i * (5*i - 3)) / 2;
  var octNum = i * (3*i - 2);

  if(valid(triNum)) {
    triNums.push(triNum+'');
  }

  if(valid(sqNum)) {
    sqNums.push(sqNum+'');
  }

  if(valid(pentNum)) {
    pentNums.push(pentNum+'');
  }

  if(valid(hexNum)) {
    hexNums.push(hexNum+'');
  }

  if(valid(heptNum)) {
    heptNums.push(heptNum+'');
  }

  if(valid(octNum)) {
    octNums.push(octNum+'');
  }
}

console.log(triNums);
console.log(sqNums);
console.log(pentNums);
console.log(heptNums);
console.log(hexNums);
console.log(octNums);
