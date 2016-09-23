var fs = require('fs');

var problem_98 = {
  /*
   * Methods */
  init() {
    var _this = this;
    fs.readFile('words.txt', function(error, data) {
    	// Prepare the data for computation
    	content = data.toString().split(',').sort((a,b) => b.length - a.length);
      _this.start(content);
    });
  },

  start(content) {
    var anagrams = [];
    anagrams = this.findAnagrams(content);
    for(var i = 0; i < anagrams.length; i++) {
      this.findAnagramSquares(anagrams[i]);
    }
  },

  /**
   * Return a 2-D array with each subarray containing a list of anagrams
   * @param {array} words An array of strings
   * @return {array}
   */
  findAnagrams(words) {
    var patterns = {};
    var anagrams = [];
    for(var i = 0; i < words.length; i++) {
      var sorted = words[i].split('').sort().join('');
      sorted in patterns ? patterns[sorted].push(words[i]) : patterns[sorted] = [words[i]];
    }
    for(pattern in patterns) {
      if(patterns[pattern].length !== 1) {
        anagrams.push(patterns[pattern]);
      }
    }
    return anagrams;
  },

  /**
   * Takes in an array of anagrams and prints any possible associated anagramic squares
   * @param {array} anagrams An array of anagrams
   */
  findAnagramSquares(anagrams) {
    for(var i = 0; i < anagrams.length; i++) {

      for(var j = i + 1; j < anagrams.length; j++) {
        var sig = this.signature(anagrams[i]);
        var map = this.stringMap(anagrams[i], anagrams[j]);

        // Calculate the range of possible squares given the word length
        var max = Math.pow(10, anagrams[i].length);
        var min = max / 10;

        for(var n = Math.floor(Math.sqrt(max)); n * n >= min; n--) {
          var intSig = this.signature(n * n);
          if(intSig === sig) {
            var mappedInt = this.applyMap(map, n * n);
            if(Math.sqrt(mappedInt) % 1 === 0 && mappedInt[0] !== '0') {
              console.log(n * n);
            }
          }
        }

      }

    }
  },

  /**
   * Returns a strings character pattern
   * @param {String} str String to find pattern of
   * @return {String} pattern String
   */
  signature(str) {
    str = (str+'').split('');
    var idx = 0;
    var map = {};
    str.forEach((letter, i) => {
      if(!(letter in map)) {
        map[letter] = idx++;
      }
      str[i] = map[letter];
    });
    return str.join('');
  },

  /**
   * Returns a map between the 2 strings
   * @param {String} str1 start String
   * @param {String} str2 end String
   * @return {array} map from str1 to str2
   */
  stringMap(str1, str2) {
    var map = [];
    for(var i = 0; i < str1.length; i++) {
      var idx = str2.indexOf(str1[i])
      while(map.indexOf(idx) !== -1) {
        idx = str2.indexOf(idx, idx + 1);
      }
      map.push(idx);
    }
    return map;
  },

  /**
   * Returns a string obtained from applying map to str
   * @param {array} map
   * @param {String} str
   * @return {String}
   */
  applyMap(map, str) {
    var temp = [];
    str += '';
    map.forEach((code, i) => temp[code] = str[i]);
    return temp.join('');
  }

}

problem_98.init();
