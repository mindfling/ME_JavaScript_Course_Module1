'use strict';
const MIN = 1;
const MAX = 100;

// ! Eslint требует писать JSDoc перед каждой функцией

/**
 * get random integer number
 * @param {Number} min - must be minimum
 * @param {Number} max - must be maximum
 * @return {Number} get random int nuber inclusive between min and max
 */
function getRandomIntInclusive(min, max) {
  min = min < max ? min : max;
  max = min > max ? min : max;
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// let count = 0; // ?

/**
 * next() function for next iteration
 * @param {number} botNumber - число которое загадал бот
 * @return {void} ничего не возвращает
 */
function next(botNumber) {
  // console.log('Итерация', count++); // ?

  const userAnswer = prompt('Введите целое число от ' + MIN + ' до ' + MAX);
  // если пользователь нажал Cancel
  if (userAnswer === null) {
    console.log('Игра прервана пользователем');
    alert('Игра прервана пользователем');
    return userAnswer;
  }

  const userNumber = parseInt(userAnswer);
  // console.log('userNumber: ', userNumber);

  if (!isNaN(userNumber)) {
    if (botNumber > userNumber) {
      console.log('Загаданное число должно быть Больше чем', userNumber);
      alert('Больше');
    } else if (botNumber < userNumber) {
      console.log('Загаданное число должно быть Меньше чем', userNumber);
      alert('Меньше');
    } else {
      console.log('Правильно! Угадал...');
      alert('Правильно! Угадал!');
      // завершение игры
      return;
    }
  } else {
    console.log('Вы ввели не число...');
    alert('Вы ввели не число...');
  }

  // запускаем следующую итерацию
  next(botNumber);

  return;
}

// play game
console.log('Загадывает число от 1 до 100');
console.log('Бот загадал новое целое число от', MIN, 'до', MAX);
alert('Бот загадал новое целое число от ' + MIN + ' до ' + MAX);

next(getRandomIntInclusive(MIN, MAX));

console.log('Игра окончена, перезагрузите страницу');
alert('Игра окончена, перезагрузите страницу');
