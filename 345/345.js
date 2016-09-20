var _ = require('underscore');
var fs = require('fs');

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Setup
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~

fs.readFile("matrix.txt", function(error, data) {
	content = data.toString().split("\n");
  var matrix = [];
  for(var i = 0; i < content.length - 1; i++) {
    // Applying Hungarians to -1 * Matrix will minimize loss, or maximize sum
    matrix.push(content[i].trim().split(/\s+/).map((num) => num * -1));
  }
	hungarian(matrix);
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Implimentation
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~
// USING HUNGARIAN ALGORITHM
// http://www.wikihow.com/Use-the-Hungarian-Algorithm

function hungarian(matrix) {
  // Step 1: Reduce rows
  for(var i = 0; i < matrix.length; i++) {
    var min = Math.min(...matrix[i]);
    matrix[i] = matrix[i].map((num) => num - min);
  }

  // Transpose matrix
  matrix = _.zip.apply(_, matrix);

  // Step 2: Reduce columns
  for(var i = 0; i < matrix.length; i++) {
    min = Math.min(...matrix[i]);
    matrix[i] = matrix[i].map((num) => num - min);
  }

  matrix = _.zip.apply(_, matrix);
  console.log(matrix);

  while(getCover(matrix).length < matrix.length) {
    console.log(matrix);
  }
}

function getCover(matrix) {

}

console.log(matrix);

