'use strict';


const getRandomInt = (min, max) => Math.floor( Math.random() * (max - min + 1) + min );

const isNumber = (n) => {
  return !isNaN(n) && isFinite(n);
}

// let start = confirm('Запустить игру?');
// console.log('start: ', start);

// let start;
// * начало игрового цикла
do {
  // console.log('start: ', start);

  const botNumber = getRandomInt(1, 100);
  console.log('Бот загадал число botNumber: ', botNumber);

  let userNumber;
  while ( (userNumber = prompt('Угадайте целое число от 1 до 100')) && (userNumber != botNumber) ) {
    // userNumber = prompt('Угадайте целое число от ');
    console.log('userNumber: ', userNumber);

    if (isNumber(userNumber)) {
      console.log('Вы ввели число', userNumber);
    } else {
      console.log('Вы ввели не число, попробуйте еще раз');
      continue;
    }

    if ( botNumber > userNumber ) {
      console.log('Загаданное число должно быть Больше');
      alert('Больше');
    } else if ( botNumber < userNumber ) {
      console.log('Загаданное число должно быть Меньше');
      alert('Меньше');
    } else {
      console.log('Правильно! Угадал...');
      alert('Правильно! Угадал...');
    }
    
  }
  
  console.log('Правильно! Угадал! Конец игры');
  alert('Правильно! Угадал! Конец игры');
  console.log('botNumber: ', botNumber, 'userNumber: ', userNumber);

} while (confirm('Продолжить игру?'));

console.log('Конец игры, чтобы начать заново, перезагрузите страницу');
