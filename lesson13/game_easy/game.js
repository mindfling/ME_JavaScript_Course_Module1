'use strict';

// ? ОК всё класссно!!!
// todo ТОЛЬКО СДЕЛАТЬ ТОЖЕ САМОЕ ПОПРОЩЕ ))))

(() => {

  const FIGURE_SET = ['Камень', 'Ножницы', 'Бумага'];  // RUS
  // const FIGURE_SET = ['Rock', 'Scissors', 'Paper']; // ENG
  

  const getRandomIntInclusive = (m, n) => {
    const min = Math.floor (m < n ? m : n);
    const max = Math.ceil (m > n ? m : n);
    return Math.floor (Math.random () * (max - min + 1) + min);
  };



  // * ход бота
  const getBotAnswer = (figures) => {
    if (Array.isArray (figures)) {
      // генерация нового хода бота, возвращает figure
      const randi = getRandomIntInclusive (0, figures.length - 1);
      return figures[randi];
    }
    return;
  };


/*
  // * ход пользователя
// const getUserFigure = figures => {

//   // todo варианты пользователь может вводить строку, букву, или число ))

//     // спрашиваем пользователя
//     let userAnswer = prompt (
//       'Ход пользователя, выберите: ' + figures.join (' или ') + ' ???'
//     );


//     if (userAnswer === null) {
//       // пользователь нажал Отмена
//       console.log('Cancel');
//       if (confirm("Вы точно хотите выйти?")) {
//         return false; // выход из игры
//       } else {
//         return; // todo повторный ввод
//       }



//     } else if (isNumber(userAnswer)) {
//       //если ввел число
//       if (userAnswer >= 0 && userAnswer < figures.length) {
//         // если пользователь ввел правильное число
//         return userAnswer + ' -> ' + figures[userAnswer];
//       } else {
//         return;
//       }

//     } else if (isString (userAnswer)) {
//       // если пользователь ввел строку
//       return userAnswer.charAt(1).toLowerCase();
//     } else {
//       return;
//     }
// };
*/




  const game = () => {
    
    // текущие результаты игры
    const result = {
      player: 0,
      computer: 0,
      playerWin: function() {
        this.player++;
        console.log('Пользователь выиграл');
        alert('Пользователь выиграл');
      },
      computerWin: function() {
        this.computer++;
        console.log('Компьютер выиграл');
        alert('Компьютер выиграл');
      }
    };

    const figures = FIGURE_SET;


    //*************************** */
    function start() {
      // спрашиваем бота
      const botAnswer = getBotAnswer(figures).charAt(0).toLowerCase();
      console.log('спрашиваем бота: ', botAnswer);

      // спрашиваем пользователя
      let userAnswer = prompt(FIGURE_SET.join(', ') + ' ?');
      console.log('спрашиваем пользователя: ', userAnswer);


      // если пользователь нажал Отмена или ввел пустую строку
      if (userAnswer === null || userAnswer === '') {
        console.log('Cancel');

        // переспрашиваем 
        if (confirm("Вы точно хотите выйти?")) {
          console.log('КОНЕЦ ИГРЫ');
          console.log(`КОМПЬЮТЕР:\t ${result.computer} 
ИГРОК:\t ${result.player}`);
          alert(`КОМПЬЮТЕР:\t ${result.computer} 
ИГРОК:\t ${result.player}`);
          return null; // выход из игры
        
        } else {
          return start();
        }

        return null;
      } else {

        // если пользователь ввел корректный ответ
        userAnswer = userAnswer.charAt().toLowerCase();
        console.log('userAnswer: ', userAnswer);

        // * проверяем
        if (userAnswer === botAnswer) {
          console.log('Ничья');
          alert('Ничья');
          return start();
        }

        // пользователь ввел Камень 0
        // if (userAnswer === 'к') {
        //   if (botAnswer === 'б') {
        //     console.log('пользователь выиграл, камень смял бумагу ????');
        //     result.player++;
        //     return start();
        //   } else {
        //     console.log('бот выиграл');
        //     result.computer++;
        //     return start();
        //   }
        //   return start();
        // }

        // * бот загадал Камень
        if (botAnswer === 'к') {
          if (userAnswer === 'н') {
            console.log('камень тупит ножницы, бот выиграл');
            // result.computer++;
            result.computerWin();
            return start();
          } else {
            console.log('пользователь выиграл, бумага накрыла камень');
            // result.player++;
            result.playerWin();
            return start();
          }
          return start();
        }

        // * бот загадал Ножницы
        if (botAnswer === 'н') {
          if (userAnswer === 'б') {
            console.log('ножницы режут бумагу, бот выиграл');
            // result.computer++;
            result.computerWin();
            return start();
          } else {
            console.log('пользователь выиграл, камень потупил ножницы');
            result.player++;
            return start();
          }
          return start();
        }

        // * бот загадал Бумага
        if (botAnswer === 'б') {
          if (userAnswer === 'к') {
            console.log('бумага накрыла камень и бот выиграл');
            // result.computer++;
            result.computerWin();
            return start();
          } else {
            console.log('пользователь выиграл, ножницы разрезали бумагу');
            result.player++;
            return start();
          }
          return start();
        }


        return start();
      }

      return start();
    }


    // **********
    return start;
  } // game возращает ссылку на start


  // window.gameRockPaperScissors = game;
  window.PRS = game;
}) ();
