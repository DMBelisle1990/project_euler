var clockNums = [];
var digitalNums = [
  [1,1,1,0,1,1,1],
  [0,0,1,0,0,1,0],
  [1,0,1,1,1,0,1],
  [1,0,1,1,0,1,1],
  [0,1,1,1,0,1,0],
  [1,1,0,1,0,1,1],
  [1,1,0,1,1,1,1],
  [1,1,1,0,0,1,0],
  [1,1,1,1,1,1,1],
  [1,1,1,1,0,1,1]
];
var sam = 0;
var max = 0;

var prob = {

  start() {
    this.loadPrimes();
    var max = 0;
    for(var i = 0; i < clockNums.length; i++) {
      var n = clockNums[i];
      max += this.slowTransitions(n);
      while(n >= 10) {
        var dr = this.digitalRoot(n);
        sam += 2*this.slowTransitions(n);
        max += this.fastTransitions(n, dr);
        n = dr;
      }
      sam += 2*this.slowTransitions(n);
      max += this.slowTransitions(n);
    } 
    console.log(sam - max);
  },

  loadPrimes() {
    var max = 20000000;
    var primes = [2, 3, 5];    
    for(var i = 7; i < max; i+=2) {
      var isPrime = true;
      if(i % 5 === 0) {
        continue;
      }
      for(var j = 1; primes[j] <= Math.sqrt(i); j++) {
        if(i % primes[j] === 0) {
          isPrime = false;
          break;
        }
      }
      if(isPrime) {
        primes.push(i);
        if(i > 10000000) {
          clockNums.push(i);
        }
      }
    }
    console.log('Primes loaded');
  },

  digitalRoot(num) {
    // First splits the num into a num array of it's digits, then returns the sum
    return ((num+'').split('').map(Number)).reduce((sum, n) => sum + n);
  },

  slowTransitions(num) {
    num = (num+'').split('').map(Number);
    var cost = 0;
    for(var i = 0; i < num.length; i++) {
      cost += digitalNums[num[i]].reduce((s, j) => s + j);
    }
    return cost;
  },

  fastTransitions(num, digitRoot) {
    num = (num+'').split('').map(Number).reverse();
    digitRoot = (digitRoot+'').split('').map(Number).reverse();
    var cost = 0;
    for(var i = 0; i < num.length; i++) {
      cost += (typeof digitRoot[i] !== 'undefined' ? this.transitionCost(num[i], digitRoot[i]) : this.slowTransitions(num[i]));
    }
    return cost;
  },

  transitionCost(num1, num2) {
    var digit1 = digitalNums[num1];
    var digit2 = digitalNums[num2];
    var cost = 0;
    for(var i = 0; i < digit1.length; i++) {
      if(digit1[i] !== digit2[i]) {
        cost++;
      }
    }
    return cost;
  }

}

prob.start();

















