'use strict';

/*
Вторая задача:
  Напишите функцию getAverageValue
  для получения среднеарифметического значения
  с округлением в меньшую сторону до целого числа
  С помощью этой функции
  получите средний чек за день, в массиве данные всех чеков за день:
  const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
*/

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
  //* проворяем аргумент должен быть массив
  if (!Array.isArray(arr)) {
    // если аргумент не массив выход из функции
    return;
  }

  let sum = 0; // сюда сохраняем сумму елементов
  const len = arr.length; // длина массива == количество елементов
  // const average = 0; // среднее значение
  /*
    * обычный for
    for (let i = 0; i < len; i++) {
      sum += arr[i];
    }
  */

  /*
    * с помощью forEach
    arr.forEach( (item) => {
      sum += item;
    })
  */

  /*
    * цикл for-in
    for (const key in arr) {
        const elem = arr[key];
        sum += elem;
    }
  */

  //* цикл for-of
  for (const value of arr) {
    sum += value;
  }

  // return (Math.floor(sum / len * 100)) / 100; // округляем до сотых
  return Math.floor(sum / len); // округляем до целых
};


// тест
console.log();
console.log(getAverageValue(allСashbox));
console.log(getAverageValue());
console.log(getAverageValue(''));
