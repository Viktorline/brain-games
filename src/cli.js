import readlineSync from 'readline-sync';

function welcome() {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
}

export default welcome;
