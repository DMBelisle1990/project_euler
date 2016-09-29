/*
 * This problem was my first implimentation of dynamic programming
 *
 * All possible solutions for any 2 blocks can be mapped in a 2-D array
 * Heres an example with tiles of length 1 and 2
 *
 * |0, 1, 2, 3, 4, 5|
 * |2, 3, 4, 5      |
 * |4, 5            |
 *
 * The sum of the number of ways to each corner will give us the solution
 * which can be computed using a simple combination
*/


/*
 * Helper functions */

function factorial(x) {
  return (x === 0 ? 1 : x * factorial(x - 1));
}

function C(x, y) {
  return factorial(x) / (factorial(y) * factorial(x - y));
}

/*
 * Implimentation */

var tileSizes = [2,3,4];
var MAX = 50;
var ans = 0;

tileSizes.forEach(tileSize => {

  for(var i = 0; i * tileSize <= MAX; i++) {
    var sum = i * tileSize;
    var tiles = [sum];

    var y = 0;
    while(sum < MAX) {
      tiles.push(++sum);
      y++;
    }

    var last = tiles.pop();
    ans += C(y + i ,y)
  }

  ans--; // Don't count the case where we only use black tiles
});

console.log(ans);
