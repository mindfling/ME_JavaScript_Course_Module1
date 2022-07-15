'use strict';

/*
* Третья задача:
Скопируйте код task02.js в task03.js
Добавьте 4-ый опциональный параметр у функции
  4-ый опциональный параметр это строка:
    если функция получает 'even', то функция возвращает массив чётных чисел
    ? even -  чётных чисел
    если функция получает 'odd', то функция возвращает массив нечётных чисел
    ? odd - нечётных чисел
*/

// * функция проверки на число
// const isNumber = n => (!isFinite(n) && isNaN(n));


// * функция проверки на Чётное число
const isEvenNumber = n => ((n % 2) === 0);

// * функция проверки на Нечётное число
const isOddNumber = n => ((n % 2) === 1);


// * функция минимум
const myMin = (n, m) => ((n < m) ? n : m);

// * функция максимум
const myMax = (n, m) => ((n > m) ? n : m);


// * своя функция генерации случайных чисел от n до m
// * c проверкой на положительные и отрицательные числа независимо от порядка
const getRandomMinMaxInt = (n, m) => {
  const min = (n < m) ? n : m;
  const max = (n > m) ? n : m;
  return Math.floor(Math.random() * Math.abs(max - min + 1) + min);
};


// * функция принимает параметры
// todo math method here in generator
// TODO математический генератор на основе Math.random() БЫЛ БЫ ЛУЧШЕ by Tiger;)
// nCount количество элементов в массиве
// min минимальная граница диапазона чисел
// max максимальная граница чисел
// parity - четность 'even' -> четный 'odd' -> нечетный
const getRandomArray = (nCount = 100, min = 1, max = 100, parity = '') => {
  const minNumb = myMin(min, max);
  const maxNumb = myMax(min, max);
  const arr = [];

  /*
    if (parity) {
      parity = parity.toLowerCase();
    }
    for (let i = 0; i < nCount; i++) {
      let pushNumber = getRandomMinMaxInt(minNumb, maxNumb); // генерируем число
      if (parity === 'even') {
        // * even - если нам нужны четные числа
        if (isEvenNumber(pushNumber)) {
          arr.push(pushNumber); //если четные even - добавляем
        } else {
          i--;      // счетчик на один цикл назад
          continue; // возвращаемся назад на цикл
        }

      } else if (parity === 'odd') {
        // * odd - если нам нужны НЕчетные НеПарные числа
        if (isOddNumber(pushNumber)) {
          arr.push(pushNumber); // добавляем в массив если нечетные
        } else {
          i--;
          continue;
        }

      } else {
        // * в противном случае нам нужны как четные так и нечетыне числа
        arr.push(pushNumber);
      }
    }
  */

  if (parity.toLowerCase() === 'even') {
    // * even чётный
    for (let i = 0; i < nCount; i++) {
      const pushNumber = getRandomMinMaxInt(minNumb, maxNumb);
      if (isEvenNumber(pushNumber)) {
        arr.push(pushNumber); // добаляем четные
      } else {
        i--; // в противном случае проходим эту итерацию еще раз
        continue;
      }
    }
  } else if (parity.toLowerCase() === 'odd') {
    // * odd отбираем только нечетные числа
    for (let i = 0; i < nCount; i++) {
      const pushNumber = getRandomMinMaxInt(minNumb, maxNumb);
      if (isOddNumber(pushNumber)) {
        arr.push(pushNumber); // добавляем нечетные
      } else {
        i--;
        continue;
      }
    }
  } else {
    // * по умолчанию и четные и нечетные
    for (let i = 0; i < nCount; i++) {
      const pushNumber = getRandomMinMaxInt(minNumb, maxNumb);
      arr.push(pushNumber);
    }
  }
  return arr;
};


// тест
console.log(getRandomArray(10, -100, 999, 'odd'));
console.log(getRandomArray(10, 100, -999, 'even'));
console.log(getRandomArray(15, 10, 99));

