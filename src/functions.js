function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(num) {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

export { getRandom, isEven };
