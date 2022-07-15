'use strict';

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const isNumber = n => !isNaN(n) && isFinite(n);

// * начало игрового цикла
do {
  // console.log('start: ', start);

  const botNumber = getRandomInt(1, 100);
  console.log('Бот загадал число botNumber: ', botNumber);
  alert('Бот загадал новое целое число от 1 до 100');

  let userNumber;
  while (userNumber = prompt('Угадайте целое число от 1 до 100')) {
    // userNumber = prompt('Угадайте целое число от ');
    console.log('userNumber:', userNumber);

    if (isNumber(userNumber)) {
      // ввели число играем дальше
      userNumber = parseInt(userNumber);
      console.log('Вы ввели число', userNumber);
    } else {
      // ввели нечисло попытка не защитыватся заново
      console.log('Вы ввели не число, попробуйте еще раз');
      alert('Вы ввели не число, попробуйте еще раз');
      continue;
    }

    if (botNumber > userNumber) {
      console.log('Загаданное число должно быть Больше чем', userNumber);
      alert('Больше');
    } else if (botNumber < userNumber) {
      console.log('Загаданное число должно быть Меньше чем', userNumber);
      alert('Меньше');
    } else {
      console.log('Правильно! Угадал...');
      alert('Правильно! Угадал...');
      // завершение цикла
      break;
    }
  }

  console.log('Цикл игры завершен');
  console.log('Было botNumber: ', botNumber, 'userNumber: ', userNumber);
} while (confirm('Продолжить игру?'));

console.log('Конец игры, чтобы начать заново, перезагрузите страницу');
