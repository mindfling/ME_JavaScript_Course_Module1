'use strict';


const getRandomInt = (min, max) => Math.floor( Math.random() * (max - min + 1) + min );

const isNumber = (n) => !isNaN(n) && isFinite(n);


const promptNumber = (str) => {
  let n;
  do {
    n = prompt(str);
    if (!isNumber(n)) {
      console.log('n: ', n);
      alert('Вы ввели не число');
      continue;
    }
    if (n === null) {
      return false;
      break;
    }
  } while( !isNumber(n) );

  return parseInt(n);
}


// * начало игрового цикла
do {
  // todo еще проверка на число здесь
  const n = promptNumber('Введите первое число диапазона min');
  const m = promptNumber('Введите второе число диапазона max');

  const minNumb = (n < m) ? n : m;
  const maxNumb = (n > m) ? n : m;

  const delta = Math.abs(maxNumb - minNumb); // количество чисел в диапазоне
  let triesCount = Math.round(delta * 0.30); // количество попыток 30%

  // todo use numberSet = new Set();
  const userNumbersList = []; //список чисел которые ввел кользователь

  const botNumber = getRandomInt(minNumb, maxNumb);
  console.log('Бот загадал число: ', botNumber);

  //число которое вводит пользователь
  let userNumber;
  // если пользователь нажимает Cancel -> prompt возвращает null
  while ( (userNumber = prompt(`Угадайте целое число от ${minNumb} до ${maxNumb}`)) && (userNumber !== null) ) {

    if (isNumber(userNumber)) {
      //ввели число      
      //todo проверка масс на это число
      if (userNumbersList.includes(userNumber)) {
        // число уже в массиве, попытка не защитывается
        console.log('Это число вы уже вводили. Попробуйте еще раз');
        alert('Это число вы уже вводили,', userNumber, 'Попробуйте еще раз');
        continue;
      } else {
        console.log('Вы ввели новое число,',  userNumber);
        userNumbersList.push(userNumber);
        console.log(userNumbersList);
      }

    } else {
      //ввели не число
      console.log('Вы ввели не число, попробуйте еще раз');
      alert('Вы ввели не число');
      continue;
    }

    if ( botNumber > userNumber ) {
      console.log('Загаданное число Больше вашего');
      alert('Больше');
    } else if ( botNumber < userNumber ) {
      console.log('Загаданное число Меньше вашего');
      alert('Меньше');
    } else if (+userNumber == botNumber ) {
      console.log('Правильно! Угадал...');
      alert('Правильно! Угадал...');
      break;
    }
    
  }
  
  console.log('Конец игры');
  alert('Конец игры');

} while (confirm('Продолжить игру?'));

console.log('Игра окончена, чтобы начать заново, перезагрузите страницу');
