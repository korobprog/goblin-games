import Goblin from '../goblin';

describe('Goblin', () => {
   let goblin;
   let mockBox;

   beforeEach(() => {
      goblin = new Goblin(5);

      mockBox = document.createElement('div');
      mockBox.id = 'box1';
      document.body.appendChild(mockBox);
   });

   afterEach(() => {
      document.body.removeChild(mockBox);
   });

   test('adds goblin class on goblinOn', () => {
      goblin.goblinOn(1);
      expect(mockBox.className).toBe('box goblin');
   });

   test('removes goblin class on goblinOff', () => {
      mockBox.className = 'box goblin';
      goblin.goblinOff(1);
      expect(mockBox.className).toBe('box');
   });

   test('decrements counter on goblinOff', () => {
      goblin.goblinOff(1);
      expect(goblin.counter).toBe(4);
   });

   test('throws error when counter hits 0', () => {
      for (let i = 0; i < 5; i++) {
         goblin.goblinOff(1);
      }
      expect(() => goblin.goblinOff(1)).toThrow('Counter limitation');
   });
});