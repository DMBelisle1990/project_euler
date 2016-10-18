var fs = require('fs');

fs.readFile('cipher.txt', function(error, data) {
  decrypt(data.toString().split(',').map(Number))
});



function decrypt(message) {
  var start = 97;
  var end = 122;

  for(var k1 = start; k1 <= end; k1++) {
    for(var k2 = start; k2 <= end; k2++) {
      for(var k3 = start; k3 <= end; k3++) {

        var str = '';
        var ans = 0;

        for(var i = 0; i < message.length; i++) {
          if(i % 3 === 0) {
            var k = k1;
          } else if(i % 3 === 1) {
            var k = k2;
          } else {
            var k = k3;
          }
          ans += (message[i] ^ k);
          str += String.fromCharCode(message[i] ^ k);
        }
        str = str.split(' ');
        if(str.indexOf('the') !== -1) {
          console.log(ans);
        }
      }
    }
  }
}
