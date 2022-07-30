'use strict';


(() => {
  const FIGURE_SET = ['Камень', 'Ножницы', 'Бумага']; // RUS
  // const FIGURE_SET = ['Rock', 'Scissors', 'Paper']; // ENG


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
        console.log('Пользователь выиграл');
        alert('Пользователь выиграл');
      },
      computerWin() {
        this.computer++;
        console.log('Компьютер выиграл');
        alert('Компьютер выиграл');
      },
    };

    const start = () => {
      // спрашиваем бота
      const botAnswer = getBotAnswer(figures).charAt(0).toLowerCase();
      // console.log('botAnswer: ', botAnswer);

      // спрашиваем пользователя
      let userAnswer = prompt('Выбирайте: ' + FIGURE_SET.join(', или ') + ' ?');
      // console.log('userAnswer: ', userAnswer);


      // если пользователь нажал Отмена или ввел пустую строку
      if (userAnswer === null || userAnswer === '') {
        console.log('Cancel');

        // переспрашиваем
        if (confirm('Вы точно хотите выйти?')) {
          console.log('КОНЕЦ ИГРЫ');
          console.log(`
  КОМПЬЮТЕР:\t ${result.computer} 
  ИГРОК:\t ${result.player}`,
          );
          alert(`
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
          console.log('Ничья');
          alert('Ничья');
          return start();
        }

        // * бот загадал Камень
        if (botAnswer === 'к') {
          if (userAnswer === 'н') {
            console.log('камень тупит ножницы, бот выиграл');
            result.computerWin(); // computer++;
            return start();
          } else {
            console.log('пользователь выиграл, бумага накрыла камень');
            result.playerWin(); // player++;
            return start();
          }
        }

        // * бот загадал Ножницы
        if (botAnswer === 'н') {
          if (userAnswer === 'б') {
            console.log('ножницы режут бумагу, бот выиграл');
            result.computerWin();
            return start();
          } else {
            console.log('пользователь выиграл, камень потупил ножницы');
            result.playerWin();
            return start();
          }
        }

        // * бот загадал Бумага
        if (botAnswer === 'б') {
          if (userAnswer === 'к') {
            console.log('бумага накрыла камень и бот выиграл');
            result.computerWin();
            return start();
          } else {
            console.log('пользователь выиграл, ножницы разрезали бумагу');
            result.playerWin();
            return start();
          }
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


