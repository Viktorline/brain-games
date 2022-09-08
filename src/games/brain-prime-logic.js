import { getRandom } from '../functions.js';
import startGame from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(number) {
  if (number < 2) {
    return 'no';
  }
  if (number === 2) {
    return 'yes';
  }

  let i = 2;
  const limit = Math.sqrt(number);
  while (i <= limit) {
    if (number % i === 0) {
      return 'no';
    }
    i += 1;
  }

  return 'yes';
}

function newRound() {
  const question = getRandom(1, 20);
  const answer = isPrime(question);
  return [question, answer];
}

function brainPrime() {
  startGame(gameRule, newRound);
}

export default brainPrime;
