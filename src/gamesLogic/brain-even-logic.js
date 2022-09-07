import readlineSync from 'readline-sync';

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(num) {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

function brainEven() {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const numberOfRounds = 3;

  for (let currentRound = 0; currentRound < numberOfRounds; currentRound += 1) {
    const number = getRandom(1, 10);
    const answer = isEven(number);

    console.log(`Question: ${number}`);

    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer !== answer) {
      console.log(`'${playerAnswer}'is wrong answer ;(. Correct answer was '${answer}'.\n Let's try again, ${playerName}!`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
}

export default brainEven;
