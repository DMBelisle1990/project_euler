var cubes = {};
var ans = {};
for(var i = 346; i < 10000; i++) {
  var n = ((i*i*i)+'').split('').sort().join('');
  if(n in cubes) {
    cubes[n]++;
    if(cubes[n] == 5) {
      console.log('called', ans[n]);
      break;
    }
  } else {
    cubes[n] = 1;
    ans[n] = i*i*i;
  }
}
