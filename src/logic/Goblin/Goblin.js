import { getRandomCell } from './utils.js';
import goblin from './img/goblin.png';

class Goblin {
   constructor() {
      this.isClicked = false;
   }
   appear() {
      const cell = getRandomCell();
      cell.innerHTML = `<img src="${goblin}">`;
      cell.addEventListener('click', () => {
         this.isClicked = true;
      });
   }
   disappear() {
      this.isClicked = false;
   }
}

export default Goblin;