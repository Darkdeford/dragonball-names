import {expect} from 'chai';
import dragonBall from './index';

describe('dragonball-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(dragonBall.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Son Goku`', function() {
      expect(dragonBall.all).to.include('Son Goku');
    });
  });

  describe('random', function() {
    it('should return a random item from the dragonBall.all', function() {
      const randomItem = dragonBall.random();
      expect(dragonBall.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function() {
      const randomItems = dragonBall.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(dragonBall.all).to.include(item);
      });
    });
  });
});
