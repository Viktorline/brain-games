import getRandom from '../helpers.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }

  let i = 2;
  const limit = Math.sqrt(number);
  while (i <= limit) {
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
}

function getQuestionAndAnswer() {
  const question = getRandom(1, 20);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
}

function brainPrime() {
  startGame(description, getQuestionAndAnswer);
}

export default brainPrime;
