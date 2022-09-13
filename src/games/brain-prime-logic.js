import { getRandom } from '../helpers.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function prime(number) {
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
  const answer = prime(question);
  return [question, answer];
}

function brainPrime() {
  startGame(description, newRound);
}

export default brainPrime;
