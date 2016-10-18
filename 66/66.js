var ans = [];

// This wont work since some of the min values of x are very large
// Also need to use a big int language/library
for(var D = 2; D <= 1000; D++) {
  if(Math.sqrt(D) % 1 === 0) {
    continue;
  }
  var y = 1;
  var x = Math.floor(Math.sqrt(D));
  var pell = x*x - D*(y*y);
  while(pell != 1) {
    if(pell < 1) {
      x++;
      y = 1;
    } else {
      y++;
    }
    pell = x*x - D*(y*y);
  }
  ans.push(x);
}

console.log(ans);
