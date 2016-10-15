// Array of total tiles used for each side length
// ie sideLength[n] will give you num tiles of square with side length n
var sideLength =[0,0,0];
var ans = 0;
const MAX_TILES = 1000000;
for(var tiles = 8; tiles <= MAX_TILES; tiles += 4) {
  sideLength.push(tiles);
  ans++;
}

for(var i = 3; i < sideLength.length; i ++) {
  var total = sideLength[i];
  var stop = (i % 2 === 0 ? 3 : 2);
  for(var k = i - 2; k > stop; k -= 2) {
    total += sideLength[k];
    if(total <= MAX_TILES) {
      ans++;
    } else {
      break;
    }
  }
}

console.log(ans);
