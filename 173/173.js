// Array of total tiles used for each side length
// ie sideLength[n] will give you num tiles of square with side length n
var sideLength =[0,0,0];
var ans = 0;
const MAX_TILES = 1000000;
for(var tiles = 8; tiles <= MAX_TILES; tiles += 4) {
  sideLength.push(tiles);
  ans++;
}

// refactor this
for(var i = 3; i < sideLength.length; i += 2) {
  var total = sideLength[i];
  for(var k = i - 2; k > 2; k -= 2) {
    total += sideLength[k];
    if(total <= MAX_TILES) {
      ans++;
    } else {
      break;
    }
  }
  var j = i + 1;
  total = sideLength[j];
  for(var k = j - 2; k > 3; k -= 2) {
    total += sideLength[k];
    if(total <= MAX_TILES) {
      ans++;
    } else {
      break;
    }
  }
}

console.log(ans);
