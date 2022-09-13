import { getRandom } from '../helpers.js';
import startGame from '../index.js';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

function calculate(operation, firstNumber, secondNumber) {
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
  const operation = operations[Math.floor(Math.random() * operations.length - 1)];
  const firstNumber = getRandom(1, 50);
  const secondNumber = getRandom(1, 50);
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const answer = calculate(operation, firstNumber, secondNumber);
  return [question, answer];
}

function brainEven() {
  startGame(description, newRound);
}

export default brainEven;
