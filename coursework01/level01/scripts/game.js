'use strict';

// * сохраняем ссылку в глобальном объекте на game
window.marbleGame = (() => {
//

  // функция чётность
  const isEven = n => (!(n % 2));

  // функция нечетный
  const isOdd = n => (Math.abs(n % 2) === 1);

  // генератор случайных чисел
  const getRandomIntInclusive = (m, n) => {
    const min = Math.floor(m < n ? m : n);
    const max = Math.ceil(m > n ? m : n);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // вывод alert и в консоль
  const consoleAlert = (s) => {
    console.log(s);
    alert(s);
  };

  // eslint-disable-next-line require-jsdoc
  const game = () => {
    // * main game function

    const marbles = {
      bot: 5,
      user: 5,
      info() {
        console.log('\nколичество marbles:',
          '\nbot: ', this.bot,
          '\nuser: ', this.user);
      },
    };


    return function start() {
      // условия завершения игры
      marbles.info();

      if (marbles.bot <= 0 || marbles.user <= 0) {
        // consoleAlert('Кто-то выиграл!');
        if (marbles.bot > marbles.user) {
          consoleAlert('Компьютер выиграл!');
        } else {
          consoleAlert('Поздравляем, вы выиграли!!!!');
        }
        console.log('Конец игры... Перезагрузите страницу');
        return;
      }

      // ask user
      let userAns = +prompt(
        'Какое количество marbles вы ставите от 1 до ' +
        marbles.user);
      console.log('пользоваетель загадывает число userAns: ', userAns);

      if (isNaN(userAns) || userAns === 0 || userAns === '') {
        consoleAlert('Пользовательский Выход\nЗавершение игры!');
        return;
      }


      // ask bot случайно угадывает нечетность у пользователя
      let botAns = getRandomIntInclusive(0, 1);

      // debug
      console.log('пользователь загадал ', userAns, isOdd(userAns));
      console.log('бот угадывает ', botAns, isOdd(botAns));


      // if (botAns === userAns) {
      //   console.log('Пользователь УГАДАЛ');
      //   return;
      // }

      if (isOdd(userAns) === isOdd(botAns)) {
        console.log('Бот угадал');
        marbles.bot += +userAns;
        marbles.user -= +userAns;
      } else {
        console.log('bot НЕугадал, пользователь Выиграл )))');
        marbles.bot -= +userAns;
        marbles.user += +userAns;
      }

      return start();
    }; // game возращает ссылку на start
  };

  return game();
})();

