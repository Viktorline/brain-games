import { getRandom } from '../functions.js';
import startGame from '../index.js';

const gameRule = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

function makeAnswer(operation, firstNumber, secondNumber) {
  if (operation === '+') {
    return String(firstNumber + secondNumber);
  }
  if (operation === '-') {
    return String(firstNumber - secondNumber);
  }
  if (operation === '*') {
    return String(firstNumber * secondNumber);
  }
  return 'error';
}

function newRound() {
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const firstNumber = getRandom(1, 50);
  const secondNumber = getRandom(1, 50);
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const answer = makeAnswer(operation, firstNumber, secondNumber);
  return [question, answer];
}

function brainEven() {
  startGame(gameRule, newRound);
}

export default brainEven;
