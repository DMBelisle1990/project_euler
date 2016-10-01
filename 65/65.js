var pn2 = 2;
var pn1 = 3;
var a = 2;

for(var i = 0; i < 998; i++) {
  if(i % 3 === 0) {
    var p = a * pn1 + pn2;
    a += 2;
  } else {
    var p = pn2 + pn1;
  }
  pn2 = pn1;
  pn1 = p;
  console.log(p);
}

console.log(p);
