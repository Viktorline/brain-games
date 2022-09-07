import { getRandom, isEven } from '../functions.js';
import startGame from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

function newRound() {
  const question = getRandom(1, 10);
  const answer = isEven(question);
  return [question, answer];
}

function brainEven() {
  startGame(gameRule, newRound);
}

export default brainEven;
