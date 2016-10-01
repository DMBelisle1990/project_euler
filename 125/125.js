function isPalindrome(s, i) {
  return (i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&isPalindrome(s,++i);
}

var palindromicSums = [];
for(var i = 1; i < 10000; i++) {
  var num = i * i;
  for(var j = i + 1; num <= 100000000; j++) {
    num += j * j;
    if(num <= 100000000 && isPalindrome(num+'') && palindromicSums.indexOf(num) === -1) {
      palindromicSums.push(num);
    }
  }
}

console.log(palindromicSums.reduce((a,b) => a + b));
