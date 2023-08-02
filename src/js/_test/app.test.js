import Goblin from '../goblin';
import ClickHandler from '../clickHandler';

describe('Game', () => {

   let goblin;
   let clickHandler;
   let curBox;
   let newBox;
   let gameOnInterval;

   beforeEach(() => {
      goblin = new Goblin(5);
      clickHandler = new ClickHandler('.playground');
      curBox = null;
      newBox = null;

      gameOnInterval = setInterval(() => {
         // game loop
      }, 1000);
   });

   afterEach(() => {
      clearInterval(gameOnInterval);
   });

   test('calls goblinOn/Off', () => {
      const goblinOnSpy = jest.spyOn(goblin, 'goblinOn');
      const goblinOffSpy = jest.spyOn(goblin, 'goblinOff');

      jest.advanceTimersByTime(3000);

      expect(goblinOnSpy).toHaveBeenCalled();
      expect(goblinOffSpy).toHaveBeenCalled();
   });

   test('alternates boxes', () => {
      jest.advanceTimersByTime(2000);

      expect(curBox).not.toBe(newBox);
   });

   test('game over on max attempts', () => {
      for (let i = 0; i < 5; i++) {
         jest.advanceTimersByTime(1000);
      }

      expect(clearInterval).toHaveBeenCalledWith(gameOnInterval);
   });

});
