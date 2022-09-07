import readlineSync from 'readline-sync';

const numberOfRounds = 3;

function startGame(gameRule, newRound) {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameRule);
  for (let currentRound = 0; currentRound < numberOfRounds; currentRound += 1) {
    const [question, answer] = newRound();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer !== answer) {
      console.log(`'${playerAnswer}'is wrong answer ;(. Correct answer was '${answer}'.\n Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
}

export default startGame;
