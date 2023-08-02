import Goblin from './goblin';
import ClickHandler from './clickHandler';

let curBox;
let newBox;
const attemptsLimit = 5;
const goblin = new Goblin(attemptsLimit);
const click = new ClickHandler('.playground');
const gameOn = setInterval(() => {
   do {
      newBox = Math.floor(Math.random() * 16) + 1;
   } while (curBox === newBox);
   try {
      goblin.goblinOff(curBox);
   } catch (err) {
      if (err.message === 'Counter limitation') {
         alert('GAME OVER!');
         clearInterval(gameOn);
         newBox = undefined;
      }
   }
   goblin.goblinOn(newBox);
   curBox = newBox;
}, 1000);

gameOn();
