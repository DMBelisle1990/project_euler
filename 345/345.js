var stringMatrix = '7  53 183 439 863 497 383 563  79 973 287  63 343 169 583 \n' +
                   '627 343 773 959 943 767 473 103 699 303 957 703 583 639 913 \n' +
                   '447 283 463  29  23 487 463 993 119 883 327 493 423 159 743 \n' +
                   '217 623   3 399 853 407 103 983  89 463 290 516 212 462 350 \n' +
                   '960 376 682 962 300 780 486 502 912 800 250 346 172 812 350 \n' +
                   '870 456 192 162 593 473 915  45 989 873 823 965 425 329 803 \n' +
                   '973 965 905 919 133 673 665 235 509 613 673 815 165 992 326 \n' +
                   '322 148 972 962 286 255 941 541 265 323 925 281 601  95 973 \n' +
                   '445 721  11 525 473  65 511 164 138 672  18 428 154 448 848 \n' +
                   '414 456 310 312 798 104 566 520 302 248 694 976 430 392 198 \n' +
                   '184 829 373 181 631 101 969 613 840 740 778 458 284 760 390 \n' +
                   '821 461 843 513  17 901 711 993 293 157 274  94 192 156 574 \n' +
                   '34 124   4 878 450 476 712 914 838 669 875 299 823 329 699 \n' +
                   '815 559 813 459 522 788 168 586 966 232 308 833 251 631 107 \n' +
                   '813 883 451 509 615  77 281 613 459 205 380 274 302  35 805';

// var stringMatrix = '7  53 183 439 863 \n' +
//                    '497 383 563  79 973 \n' +
//                    '287  63 343 169 583 \n' +
//                    '627 343 773 959 943 \n' +
//                    '767 473 103 699 303';
stringMatrix = stringMatrix.split('\n')

var matrix = [];
for(var i = 0; i < stringMatrix.length; i++) {
  matrix.push(stringMatrix[i].trim().split(/\s+/).map(Number));
}

var sum = 0;
var count = 225;

while(count > 17) {
  var coords = [];
  var minSD = 10000;

  for(var i = 0; i < matrix.length; i++) {
    var row = matrix[i].filter((val) => val != '_');
    var rowAvg = (row.reduce((sum, n) => sum + n)) / row.length;

    for(var j = 0; j < matrix.length; j++) {
      var col = matrix.map(x => x[j]);
      col = col.filter((val) => val != '_');
      
      if(matrix[i][j] == "_" || row.length == 2 || col.length == 2) {
        continue;
      }
      var colAvg = (col.reduce((sum, n) => sum + n)) / col.length;
      var SD = (2*matrix[i][j] - rowAvg - colAvg) / 2;
      if(SD < minSD) {
        minSD = SD;
        coords = [i, j];
      }
    }

  }
  if(coords.length == 0) break;
  matrix[coords[0]][coords[1]] = "_";
  count--;
}

console.log(matrix);

