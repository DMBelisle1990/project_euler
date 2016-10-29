var x = y = 100;
var grid = [];
grid[x] = [];
var directions = ['N', 'E', 'S', 'W'];
var currentDirection = 'N';
var numBlack = 0;
var move = {
  N: [1, 0],
  E: [0, 1],
  S: [-1, 0],
  W: [0, -1]
}

/**
 * Rotate clockwise by default
 * */
function rotate(cc = false) {
  var idx = directions.indexOf(currentDirection);
  idx = (cc ? (idx === 0 ? 3 : idx - 1) : (idx + 1) % 4);
  currentDirection = directions[idx];
  moveAnt();
}

function moveAnt() {
  x += move[currentDirection][0];
  y += move[currentDirection][1];
  grid[x] = grid[x] || [];
}

// Move ant until it is somewhere inside the highway
// 11064 is used so the multiple of the steps ends on an integer
for(var i = 0; i < 11064; i++) {

  if(typeof grid[x][y] === 'undefined' || grid[x][y] === 'W') {
    grid[x][y] = 'B';
    rotate();
    numBlack++;
  } else {
    grid[x][y] = 'W';
    rotate(true);
    numBlack--;
  }

}

console.log(numBlack);

// Some research shows that langtons ant will start a 104 step loop
const PATTERN_LENGTH = 104;
var repeatBlack = 0;
for(var i = 0; i < PATTERN_LENGTH; i++) {

  if(typeof grid[x][y] === 'undefined' || grid[x][y] === 'W') {
    grid[x][y] = 'B';
    rotate();
    repeatBlack++;
  } else {
    grid[x][y] = 'W';
    rotate(true);
    repeatBlack--;
  }

}

console.log(repeatBlack);
// At this point I finished the computations by hand rather than use a big int library
// The answer is numBlack + (repeatBlack * (10^18 - 11064)/104)
