'use strict';


const getRandomInt = (min, max) => Math.floor( Math.random() * (max - min + 1) + min );

const isNumber = (n) => !isNaN(n) && isFinite(n);

// todo еще проверка на число здесь
const n = +prompt('Введите первое число диапазона min');
const m = +prompt('Введите второе число диапазона max');

const minNumb = (n < m) ? n : m;
const maxNumb = (n > m) ? n : m;

const userNumbers = []; // todo use numberSet = new Set();


// * начало игрового цикла
do {
  const botNumber = getRandomInt(minNumb, maxNumb);
  console.log('Бот загадал число: ', botNumber);

  let userNumber;
  while ( (userNumber = prompt('Угадайте целое число от 1 до 100')) && (userNumber != botNumber) ) {

    if (isNumber(userNumber)) {
      //ввели число      
      //todo проверка масс на это число
      if (userNumbers.includes(userNumber)) {
        // число уже в массиве
        console.log('Вы уже вводили это число,', userNumber, 'Попробуйте еще раз');
        alert('Вы уже вводили это число,', userNumber, 'Попробуйте еще раз');
        continue;
      } else {
        console.log('Вы ввели новое число,',  userNumber);
        userNumbers.push(userNumber);
        console.log(userNumbers);
      }

    } else {
      //ввели не число
      console.log('Вы ввели не число, попробуйте еще раз');
      alert('Вы ввели не число');
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

} while (confirm('Продолжить игру?'));

console.log('Конец игры, чтобы начать заново, перезагрузите страницу');
