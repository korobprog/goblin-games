import ClickHandler from './clickHandler';

describe('ClickHandler', () => {

   let clickHandler;

   beforeEach(() => {
      clickHandler = new ClickHandler('.playground');
   });

   test('should call callback on click', () => {
      const callback = jest.fn();
      clickHandler.setCallback(callback);

      clickHandler.handleClick({ target: document.body });

      expect(callback).toHaveBeenCalled();
   });

});