class Game {
   constructor() {
      this.score = 0;
      this.misses = 0;
      this.maxMisses = 5;
   }
   start() {
      this.spawnGoblins();
   }
   updateScore() {
      document.getElementById('score').textContent = this.score;
   }
   spawnGoblins() {
      setInterval(() => {
         const goblin = new Goblin();
         goblin.appear();
         setTimeout(() => {
            if (!goblin.isClicked) {
               this.miss();
            } else {
               this.score++;
               this.updateScore();
            }
            goblin.disappear();
         }, 1000);
      }, 1500);
   }
   miss() {
      this.misses++;
      this.updateMisses();
      if (this.misses >= this.maxMisses) {
         alert('Game over!');
      }
   }
}

export default Game;
