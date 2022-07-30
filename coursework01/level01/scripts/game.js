'use strict';

// * сохраняем ссылку в глобальном объекте на game
window.marbleGame = (() => {
//

  const getRandomIntInclusive = (m, n) => {
    const min = Math.floor(m < n ? m : n);
    const max = Math.ceil(m > n ? m : n);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // eslint-disable-next-line require-jsdoc
  function game() {
    // * main game function

    const marbles = {
      bot: 5,
      user: 5,
      info: () => {
        console.log('количество marbles:');
        console.log('bot: ', this.bot);
        console.log('user: ', this.user);
      }
    };

    let botAns;
    let userAns;

    return function start() {
      if (marbles.bot <= 0 || marbles.user <= 0) {
        return;
      }

      // ask bot
      botAns = getRandomIntInclusive(1, marbles.bot);
      console.log('бот загадал botAns: ', botAns);

      // ask user
      // userAns = +prompt('Какое количество marbles вы ставите от 1 до ' + marbles.user);
      userAns = +prompt('Какое количество marbles вы угадываете у бота');
      console.log('пользоваетель отгадывает userAns: ', userAns);

      if (botAns === userAns) {
        console.log('Пользователь УГАДАЛ');
        return;
      } if (isNaN(userAns) || userAns == 0) {
        console.log('Выход');
      } else {
        return start();
      }

      console.log('Конец игры');
    }; // game возращает ссылку на start
  }

  return game();
})();

