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
    for(var i = 0; i < content.length; i++) {
      var words = [];
      var length = content[i].length;
      while(content[i] && content[i].length === length) {
        words.push(content[i]);
        i++;
      }
      var list = this.findAnagrams(words);
      if(list.length > 1) {
        anagrams.push(list);
      }
    }
    console.log(anagrams);
  },

  /**
   * Return an array of all strings with an anagram present in the array
   * @param {array} words An array of strings
   * @return {array}
   */
  findAnagrams(words) {
    var anagramCache = {};
    var anagrams = [];
    var anagramMap = {};
    for(var i = 0; i < words.length; i++) {
      var sorted = words[i].split('').sort().join('');
      anagramMap[words[i]] = sorted;
      sorted in anagramCache ? anagramCache[sorted]++ : anagramCache[sorted] = 1;
    }
    for(word in anagramMap) {
      if(anagramCache[anagramMap[word]] > 1) {
        anagrams.push(word);
      }
    }
    return anagrams;
  }

}

problem_98.init();
