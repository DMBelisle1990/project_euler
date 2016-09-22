var limit = Math.pow(2, 30);
var ans = 0;
for(var i = 0; i <= limit; ) {
  var n1 = Math.floor(Math.log2(2*i));
  var n2 = Math.floor(Math.log2(3*i))
  if(n1 !== n2) {
    i = Math.pow(2, n1);
  } else {

    ans++;
    i++;
  }
}

console.log(ans);
