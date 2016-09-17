var stringMatrix = '7  53 183 439 863 \n' +
                   '497 383 563  79 973 \n' +
                   '287  63 343 169 583 \n' +
                   '627 343 773 959 943 \n' +
                   '767 473 103 699 303';
stringMatrix = stringMatrix.split('\n')

var matrix = [];
for(var i = 0; i < stringMatrix.length; i++) {
  matrix.push(stringMatrix[i].trim().split(/\s+/).map(Number));
}


var vals = [];
for(var i = 0; i < matrix[0].length; i++) {
  for(var j = i + 1; j < matrix[0].length; j++) {

  }
}