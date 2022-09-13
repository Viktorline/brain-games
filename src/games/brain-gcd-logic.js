import { getRandom } from '../helpers.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

function getGcd(firstNumber, secondNumber) {
  let a = firstNumber;
  let b = secondNumber;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return String(a + b);
}

function newRound() {
  const firstNumber = getRandom(1, 100);
  const secondNumber = getRandom(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber);
  return [question, answer];
}

function brainGcd() {
  startGame(description, newRound);
}

export default brainGcd;
