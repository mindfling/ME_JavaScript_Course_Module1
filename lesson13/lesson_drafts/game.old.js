'use strict';

// ? ОК всё класссно!!!
// todo ТОЛЬКО СДЕЛАТЬ ТОЖЕ САМОЕ ПОПРОЩЕ ))))

(() => {

  // массив возможных вариантов по умолчанию на русском
  const FIGURE_SET = ['Камень', 'Ножницы', 'Бумага'];

  // // * на английском
  const en = ['Rock', 'Scissors', 'Paper'];

  // // * на русском
  // const ru = ['Камень', 'Ножницы', 'Бумага'];

  // const figures = {en, ru};

  // const figures = {
  //   en:  ['Rock', 'Siccores', 'Paper'],
  //   ru: ['Камень', 'Ножницы', 'Бумага'],
  // };  
  
  // проверка на число
  const isNumber = n => !isNaN (parseFloat (n)) && isFinite (n);

  // проверка на строку
  const isString = s => typeof s === 'string';

  // генерация случайного числа от min до max включительно
  const getRandomIntInclusive = (m, n) => {
    const min = Math.floor (m < n ? m : n);
    const max = Math.ceil (m > n ? m : n);
    return Math.floor (Math.random () * (max - min + 1) + min);
  };


  // * ход бота
  const getBotFigure = (figures = FIGURE_SET) => {
    if (Array.isArray (figures)) {
      const randi = getRandomIntInclusive (0, figures.length - 1);
      console.log('randi: ', randi);
      return figures[randi];
    } else {
      return;
    }
  };

  // * ход пользователя
  const getUserFigure = figures => {
    console.log ('figures: ', figures);
    if (!Array.isArray (figures)) {
      // если аргумен не массив
      return;
    } else {

      // спрашиваем пользователя
      let userAnswer = prompt (
        'Ход пользователя, выберите: ' + figures.join (' или ')
      );

      if (userAnswer === null) {
        // пользователь нажал Отмена
        console.log('Cancel');
        if (confirm("Вы точно хотите выйти?")) {
          return false; // выход из игры
        } else {
          return; // todo повторный ввод
        }

      } else if (isNumber(userAnswer)) {
        //если ввел число
        if (userAnswer >= 0 && userAnswer < figures.length) {
          // если пользователь ввел правильное число
          return userAnswer + ' -> ' + figures[userAnswer];
        } else {
          return;
        }

      } else if (isString (userAnswer)) {
        // если пользователь ввел строку
        return userAnswer.charAt(1).toLowerCase();
      } else {
        return;
      }

    }
  };


  const game = () => {
    
    const result = {
      player: 0,
      computer: 0,
    };

    // const figures = FIGURE_SET; // todo
    const figures = en;

    // const lang = (language === 'en' || language === 'eng') ? FIGURES_ENG : FIGURES_RUS;

  //*************************** */
    function start() {
      // ? HERE SCOPE :
      //    result.player
      //    result.computer
      //    lang

      console.log('start next try');

      const botFigure = getBotFigure();
      console.log('bot -> ', botFigure);

      // getUserFigure();
      let userAnswer = prompt(FIGURE_SET.join(', ') + '?');
      let userFigure = '';
      if (userAnswer === null) {
        console.log('The End\n Bot:\t' + result.computer + 
                    '\n User:\t' + result.player);
        return null; // ! Cancel, the End
      }
      if (typeof userAnswer === 'string') {
        userAnswer = userAnswer.toLowerCase();
        console.log('user inputed string: ' + userAnswer);

        let userAnsIsFigure = figures.some( (fig, index) => userAnswer === fig );
        console.log('user is: ', userAnsIsFigure);

        let userAnsIndex = figures.findIndex( (item, index) => {
          return item.toLowerCase().charAt(0) === userAnswer.toLowerCase().charAt(0);
        });
        console.log('userAnsIndex: ', userAnsIndex);

        // let figureAt = -1;
        // let findUserAns = figures.find( (item, index) => {
          // return item === userAnswer;
        // });

        console.log(figures);

      }
    }
  //*************************** */
    
    // console.log (getUserFigure (en));

    return start;
  };

  // window.gameRockPaperScissors = game;
  window.gameRockPaperScissors = game;
}) ();
