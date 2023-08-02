import ClickHandler from '../clickHandler';

describe('ClickHandler', () => {
   let clickHandler;
   let mockBox;

   beforeEach(() => {
      mockBox = document.createElement('div');
      mockBox.className = 'box';

      document.body.appendChild(mockBox);

      clickHandler = new ClickHandler('.playground');
   });

   afterEach(() => {
      document.body.removeChild(mockBox);
   });

   test('increments kill count on goblin click', () => {
      mockBox.className = 'box goblin';

      clickHandler.testGoblinClick({ target: mockBox });

      expect(clickHandler.kills).toBe(1);
   });

   test('removes goblin class on click', () => {
      mockBox.className = 'box goblin';

      clickHandler.testGoblinClick({ target: mockBox });

      expect(mockBox.className).toBe('box');
   });

   test('throws error on non-goblin click', () => {
      expect(() => {
         clickHandler.testGoblinClick({ target: mockBox });
      }).toThrow('No Goblin');
   });

});