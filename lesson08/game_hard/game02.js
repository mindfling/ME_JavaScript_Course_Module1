'use strict';

// генератор случайных чисел
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// проверка на число
const isNumber = n => !isNaN(n) && isFinite(n);

// моя функция работает в цикле пока пользователь не ввел число
const promptNumber = str => {
  let n;
  do {
    n = prompt(str);
    if (!isNumber(n)) {
      alert('Вы ввели не число, введите правильно');
      continue;
    }
    if (n === null) {
      // то что делает если пользователь нажал Cancel в окне prompt
      return false;
    }
  } while (!isNumber(n));

  return parseInt(n);
};

// * начало игрового цикла
do {
  // todo еще проверка на число здесь
  const n = promptNumber('Введите первое число диапазона min');
  const m = promptNumber('Введите второе число диапазона max');

  const minNumb = n < m ? n : m;
  const maxNumb = n > m ? n : m;

  const delta = Math.abs(maxNumb - minNumb); // количество чисел в диапазоне
  let triesCount = Math.ceil(delta * 0.30); // количество попыток 30% delta
  console.log('Готово! у вас ', triesCount, ' попыток');
  // eslint-disable-next-line max-len
  console.log(`Готово! 
  бот загадывает число в диапазоне ${minNumb}..${maxNumb} включительно
    У Вас ${triesCount} попыток чтобы угадать`);
  alert(`Готово! 
  бот загадывает число в диапазоне ${minNumb}..${maxNumb} включительно
    У Вас есть ${triesCount} попыток чтобы угадать `);

  // todo use numberSet = new Set();
  const userNumbersList = []; // список чисел которые ввел кользователь
  const botNumber = getRandomInt(minNumb, maxNumb);
  console.log('По секрету;) бот загадал число: ', botNumber);

  // число которое вводит пользователь
  let userNumber;
  // если пользователь нажимает Cancel -> prompt возвращает null
  while (
    (userNumber = prompt(
      // eslint-disable-next-line max-len
      `Угадайте целое число от ${minNumb} до ${maxNumb}, осталось ${triesCount} попыток`,
    )) &&
    userNumber !== null
    // (triesCount <= 0)
  ) {
    console.log('userNumber: ', userNumber);
    if (isNumber(userNumber)) {
      // ввели число
      // число уже в массиве, попытка не защитывается
      if (userNumbersList.includes(userNumber)) {
        console.log('Это число вы уже вводили. Попробуйте еще раз');
        alert('Это число вы уже вводили,', userNumber, 'Попробуйте еще раз');
        continue;
      } else {
        console.log('Вы ввели новое число,', userNumber);
        triesCount--;
        userNumbersList.push(userNumber);
        console.log('userNumbersList: ', userNumbersList);
      }
    } else {
      // ввели не число
      console.log('Вы ввели не число, попробуйте еще раз');
      alert('Вы ввели не число');
      continue;
    }

    if (botNumber > userNumber) {
      console.log('Загаданное число Больше вашего');
      alert('Больше');
    } else if (botNumber < userNumber) {
      console.log('Загаданное число Меньше вашего');
      alert('Меньше');
    } else if (+userNumber === botNumber) {
      console.log('Правильно! Угадал...');
      alert('Правильно! Угадал...');
      break;
    }
  }

  console.log('Конец игры');
  alert('Конец игры');
} while (confirm('Продолжить игру?'));

console.log('Игра окончена, чтобы начать заново, перезагрузите страницу');
