import getRandom from '../helpers.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

function getProgression(firstNumber, arrayLength, d) {
  let result = [firstNumber];
  for (let i = 0; i < arrayLength; i += 1) {
    result.push(result[i] + d);
  }
  const findMe = result[Math.floor(Math.random() * result.length)];
  result[result.indexOf(findMe)] = '..';
  result = String(result.join(' '));
  return [result, findMe];
}

function getQuestionAndAnswer() {
  const firstNumber = getRandom(1, 100);
  const arrayLength = getRandom(5, 10);
  const hiddenNumberIndex = getRandom(1, 10);
  const [question, currentAnswer] = getProgression(firstNumber, arrayLength, hiddenNumberIndex);
  const answer = String(currentAnswer);
  return [question, answer];
}
function brainProgression() {
  startGame(description, getQuestionAndAnswer);
}

export default brainProgression;
