import Goblin from './goblin';

describe('Goblin', () => {

   let goblin;

   beforeEach(() => {
      goblin = new Goblin(5);
   });

   test('should turn goblin on', () => {
      goblin.goblinOn(1);
      expect(goblin.curBox).toBe(1);
   });

   test('should turn goblin off', () => {
      goblin.goblinOn(2);
      goblin.goblinOff(2);
      expect(goblin.curBox).toBeNull();
   });

   test('should throw error if attempts exceeded', () => {
      for (let i = 0; i < 5; i++) {
         goblin.goblinOff(i);
      }

      expect(() => goblin.goblinOff(5)).toThrow('Counter limitation');
   });

});

