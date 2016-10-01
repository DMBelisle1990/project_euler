function randInt(max) {
  return Math.floor(Math.random() * max) + 1;
}


var numTrials = 500000000;
var peterWins = 0;

for(var i = 0; i < numTrials; i++) {
  var peter = 0;
  for(var p = 0; p < 9; p++) {
    peter += randInt(4);
  }
  var colin = 0;
  for(var c = 0; c < 6; c++) {
    colin += randInt(4);
  }
  if(peter > colin) {
    peterWins++;
  }
}

console.log(peterWins / numTrials);
