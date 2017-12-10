import uniqueRandomArray from 'unique-random-array';
import dragonBallNames from './dragonball-names.json';

const getRandomItem = uniqueRandomArray(dragonBallNames);

module.exports = {
  all: dragonBallNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    const randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
