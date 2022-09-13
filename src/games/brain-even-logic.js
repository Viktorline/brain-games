import { getRandom, even } from '../helpers.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function newRound() {
  const question = getRandom(1, 10);
  const answer = even(question);
  return [question, answer];
}

function brainEven() {
  startGame(description, newRound);
}

export default brainEven;
