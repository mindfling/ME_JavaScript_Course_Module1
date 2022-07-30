'use strict';


(() => {
  const FIGURE_RUS_SET = ['Камень', 'Ножницы', 'Бумага']; // RUS
  const FIGURE_ENG_SET = ['Rock', 'Scissors', 'Paper']; // ENG
  // const FIGURE_SET = ['к', 'н', 'б']; // short
  // * 0 -> 'к'
  // * 1 -> 'н'
  // * 2 -> 'б'

  const consoleAlert = (s) => {
    console.log(s);
    alert(s);
  };

  const getRandomIntInclusive = (m, n) => {
    const min = Math.floor(m < n ? m : n);
    const max = Math.ceil(m > n ? m : n);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // * ход бота
  const getBotAnswer = (figures) => {
    if (Array.isArray(figures)) {
      // генерация нового хода бота, возвращает figure
      const randi = getRandomIntInclusive(0, figures.length - 1);
      return figures[randi];
    }
    return;
  };

  const game = (lang = 'EN') => {
    // ГЛАВНАЯ ФУНКЦИЯ ЗАПУСКА ИГРЫ

    let figures = [];
    if (lang.toUpperCase() === 'RU' || lang.toUpperCase() === 'RUS') {
      figures = FIGURE_RUS_SET;
    } else {
      figures = FIGURE_ENG_SET;
    }

    // текущие результаты игры
    const result = {
      player: 0,
      computer: 0,
      playerWin() {
        this.player++;
        consoleAlert('Пользователь выиграл');
      },
      computerWin() {
        this.computer++;
        consoleAlert('Компьютер выиграл');
      },
      info() {
        consoleAlert(`
  КОМПЬЮТЕР:\t ${result.computer}
  ИГРОК:\t ${result.player}`,
        );
      },
    };

    // eslint-disable-next-line require-jsdoc
    function start() {
      // спрашиваем бота
      const botAnswer = getBotAnswer(figures).charAt(0).toLowerCase(); // к н б

      // спрашиваем пользователя
      // к н б null ...
      let userAnswer = prompt('Выбирайте: ' + figures.join(', или ') + ' ?');

      console.log('bot:', botAnswer,
        '\nplayer:', userAnswer);

      // если пользователь нажал Отмена
      if (userAnswer === null) {
        // переспрашиваем
        if (confirm('Вы точно хотите выйти?')) {
          console.log('КОНЕЦ ИГРЫ');
          result.info();
          //         consoleAlert(`
          // КОМПЬЮТЕР:\t ${result.computer}
          // ИГРОК:\t ${result.player}`,
          //         );
          return null; // выход из игры
        } else {
          return start();
        }
      } else {
        // если пользователь ввел корректный ответ
        userAnswer = userAnswer.charAt().toLowerCase();

        // * проверяем ничью
        if (userAnswer === botAnswer) {
          consoleAlert('Ничья');
          return start();
        }

        if (userAnswer === figures[0].charAt().toLowerCase()) { // к
          // * пользователь загадал Камень
          if (botAnswer === figures[1].charAt().toLowerCase()) { // н
            // камень тупит ножницы, игрок выиграл
            result.playerWin(); // player++; // * к -> н
          } else {
            // бот выиграл, бумага накрыла камень
            result.computerWin(); // computer++; // * к <- б
          }
          //
        } else if (userAnswer === figures[1].charAt().toLowerCase()) { // н
          // * пользователь загадал Ножницы
          if (botAnswer === figures[2].charAt().toLowerCase()) { // б
            // ножницы режут бумагу, бот выиграл
            result.playerWin(); // player // * н -> б
          } else {
            // пользователь выиграл, камень потупил ножницы
            result.computerWin(); // bot // * н <- к
          }
          //
        } else if (userAnswer === figures[2].charAt().toLowerCase()) { // б
          // * пользователь загадал Бумага
          if (botAnswer === figures[0].charAt().toLowerCase()) { // к
            // бумага накрыла камень и бот выиграл
            result.playerWin(); // player // * б -> к
          } else {
            // пользователь выиграл, ножницы разрезали бумагу
            result.computerWin(); // bot // * б <- н
          }
          //
        } else {
          // пользователь ввел что-то другое
          // consoleAlert('Некоректный ввод');
          console.log('Некоректный ввод');
        }

        return start();
      }
    }


    return start;
  }; // game возращает ссылку на start

  // * сохраняем ссылку в глобальном объекте
  window.gameRPS = game;
})();
