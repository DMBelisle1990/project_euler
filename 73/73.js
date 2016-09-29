var fractions = [];
var discovered = new Set();
for(var d = 2; d <= 12000; d++) {
  for(var n = 1; n < d; n++) {
    if(n/d > 1/3 && n/d < 1/2 && !discovered.has(n/d)) {
      fractions.push({
        exact: [n, d],
        estimate: n/d
      });
      discovered.add(n/d);
    }
  }
}

console.log(fractions.length);
