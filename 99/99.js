var fs = require('fs');

fs.readFile("base_exp.txt", function(error, data) {
	content = data.toString().split("\n");

  var max = 0;
  var ans = 0;
  var line = 1;
  for(var i = 0; i < content.length - 1; i++) {
     var temp = content[i].split(',');
     var base = temp[0];
     var exp = temp[1];
     console.log(base, exp);
     if(exp * Math.log(base) > max) {
       max = exp * Math.log(base);
       ans = line;
     }
     line++;
  }

  console.log(ans);
});
