var monopoly = {
  /*
   * Variables */
  landedOn: [], // Tracks the frequency each square is landed on
  board: ['GO','A1','CC','A2','T1','R1','B1','CH','B2','B3',
          'JAIL','C1','U','C2','C3','R2','D1','CC','D2','D3',
          'FP','E1','CH','E2','E3','R3','F1','F2','U','F3',
          'G2J','G1','G2','CC','G3','R4','CH','H1','T2','H2'],
  chance: ['GO','JAIL','C1','E3','H2','R1','NEXTR','NEXTR','NEXTU','BACK3','','','','','',''],
  chest: ['GO','JAIL','','','','','','','','','','','','','',''],
  DICE_SIZE: 4,
  CARD_STACK_SIZE: 16,
  doubleCounter: 0,
  NUM_TRIALS: 10000000,


  /*
   * Methods */
   init() {
     this.landedOn = new Array(this.board.length).fill(0);
     this.start();
   },

   start() {
     console.log('Running Simulation...\n\n');
     var position = 0;
     var BOARD_SIZE = this.board.length;


     // Simulation loop
     for(var i = 0; i < this.NUM_TRIALS; i++) {
       var roll = this.roll();

       if(roll === 'JAIL') {
         position = this.board.indexOf('JAIL');
       } else {
         position = (position + roll) % BOARD_SIZE;
       }
       // CHECK ALL POSSIBLE REDIRECTS HERE BEFORE UPDATING LANDEDON
       if(this.board[position] === 'G2J') {
         position = this.board.indexOf('JAIL');
       } else if(this.board[position] === 'CC') {
         var card = this.chest[0];
         if(card !== '') {
           position = this.board.indexOf(card);
         }
         this.chest.push(this.chest.shift());
       } else if(this.board[position] === 'CH') {
         var card = this.chance[0];
         if(card === 'BACK3') {
           position = (position - 3) % BOARD_SIZE;
         } else if(card === 'NEXTR') {
           while(this.board[position][0] !== 'R') {
             position = (position + 1) % BOARD_SIZE;
           }
         } else if(card === 'NEXTU') {
           while(this.board[position][0] !== 'U') {
             position = (position + 1) % BOARD_SIZE;
           }
         } else if(card !== '') {
           position = this.board.indexOf(card);
         }
         this.chance.push(this.chance.shift());
       }
       this.landedOn[position]++;
     }
     var sorted = this.landedOn.slice().sort((a,b) => b - a);
     var temp0 = this.landedOn.indexOf(sorted[0]);
     var temp1 = this.landedOn.indexOf(sorted[1]);
     var temp2 = this.landedOn.indexOf(sorted[2]);
     console.log(this.board[temp0], this.board[temp1], this.board[temp2]);
   },

   roll() {
     var dice1 = this.randNum(1, this.DICE_SIZE);
     var dice2 = this.randNum(1, this.DICE_SIZE);
     if(dice1 === dice2) {
       this.doubleCounter = ++this.doubleCounter % 3;
       if(this.doubleCounter === 0) {
         return 'JAIL';
       }
     } else {
       this.doubleCounter = 0;
     }
     return dice1 + dice2;
   },

   randNum(min, max) {
     return Math.floor(Math.random() * (max - min + 1) + min);
   }
}

monopoly.init();
