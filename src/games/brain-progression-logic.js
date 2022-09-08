import { getRandom } from '../functions.js';
import startGame from '../index.js';

const gameRule = 'What number is missing in the progression?';

function makeArray(firstNumber, arrayLength, d) {
  let result = [firstNumber];
  for (let i = 0; i < arrayLength; i += 1) {
    result.push(result[i] + d);
  }
  const findMe = result[Math.floor(Math.random() * result.length)];
  result[result.indexOf(findMe)] = '..';
  result = String(result.join(' '));
  return [result, findMe];
}

function newRound() {
  const firstNumber = getRandom(1, 100);
  const arrayLength = getRandom(5, 10);
  const d = getRandom(1, 10);
  const [array, findMe] = makeArray(firstNumber, arrayLength, d);
  const answer = String(findMe);
  return [array, answer];
}
function brainProgression() {
  startGame(gameRule, newRound);
}

export default brainProgression;
