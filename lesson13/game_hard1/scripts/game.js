'use strict';


(() => {
  const FIGURE_SET = ['Камень', 'Ножницы', 'Бумага']; // RUS
  // const FIGURE_SET = ['Rock', 'Scissors', 'Paper']; // ENG
  // const FIGURE_SET = ['к', 'н', 'б']; // short

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

  const game = () => {
    const figures = FIGURE_SET;

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

    const start = () => {
      // спрашиваем бота
      const botAnswer = getBotAnswer(figures).charAt(0).toLowerCase();

      // спрашиваем пользователя
      let userAnswer = prompt('Выбирайте: ' + FIGURE_SET.join(', или ') + ' ?');

      console.log('bot', botAnswer, '\nplayer', userAnswer);

      // если пользователь нажал Отмена или ввел пустую строку
      if (userAnswer === null || userAnswer === '') {
        // переспрашиваем
        if (confirm('Вы точно хотите выйти?')) {
          console.log('КОНЕЦ ИГРЫ');
          consoleAlert(`
  КОМПЬЮТЕР:\t ${result.computer} 
  ИГРОК:\t ${result.player}`,
          );
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

        // * бот загадал Камень
        if (botAnswer === figures[0].charAt().toLowerCase()) {
          console.log('figures[0]: ', figures[0]);
          if (userAnswer === figures[1].charAt().toLowerCase()) {
            console.log('figures[1]: ', figures[1]);
            consoleAlert('камень тупит ножницы, бот выиграл');
            result.computerWin(); // computer++;
          } else {
            consoleAlert('пользователь выиграл, бумага накрыла камень');
            result.playerWin(); // player++;
          }
          return start();
        }

        // * бот загадал Ножницы
        if (botAnswer === figures[1].charAt().toLowerCase()) {
          if (userAnswer === figures[2].charAt().toLowerCase()) {
            console.log('ножницы режут бумагу, бот выиграл');
            result.computerWin();
          } else {
            console.log('пользователь выиграл, камень потупил ножницы');
            result.playerWin();
          }
          return start();
        }

        // * бот загадал Бумага
        if (botAnswer === figures[2].charAt().toLowerCase()) {
          if (userAnswer === figures[0].charAt().toLowerCase()) {
            console.log('бумага накрыла камень и бот выиграл');
            result.computerWin();
          } else {
            console.log('пользователь выиграл, ножницы разрезали бумагу');
            result.playerWin();
          }
          return start();
        }

        return start();
      }
    };


    // **********
    return start;
  }; // game возращает ссылку на start

  // * сохраняем ссылку в глобальном объекте
  window.RPS = game();
})();

