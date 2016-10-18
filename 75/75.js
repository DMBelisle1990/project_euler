// Euclidean algorithm
function gcd(a,b) {
  return b === 0 ? a : gcd(b, a % b);
}


const MAX = 1250;
const MAX_P = 1500000;
var perimeters = {};

// Generate pythagorean triples
for(var n = 1; n < MAX; n++) {
  for(var m = n + 1; m < MAX; m++) {
    // m and n must be coprime and not both odd to guarentee unique triples
    if((m % 2 === 1 && n % 2 === 1) || gcd(m,n) !== 1) {
      continue;
    }

    var a = m*m - n*n;
    var b = 2*m*n;
    var c = m*m + n*n;
    var p = a + b + c;

    // any constant multiple of a triple is also a triple
    var i = p;
    while(p <= MAX_P) {
      p in perimeters ? perimeters[p]++ : perimeters[p] = 1;
      p += i;
    }
  }
}

var ans = 0;
for(p in perimeters) {
  if(perimeters[p] === 1) {
    ans++;
  }
}

console.log(ans);
