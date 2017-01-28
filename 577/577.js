var ans = 0;
var max = 12344
var m = 1;
while(max > 1) {
  for(var n = 1; n < max; n++) {
    ans += (m * (n * (n + 1))) / 2;
  }
  max -= 3;
  m++;
}

console.log(ans)