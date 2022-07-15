'use strict';

/*
* Четвертая задача:
  Создайте файл task04.js
  Необходимо написать функцию, которая принимает 2 параметра n и m
  И возвращает массив с високосными годами в диапазоне между n и m
  Алгоритм определения високосного года следует найти в интернете
  самостоятельно или спросите у куратора
  Учтите, что n и m могут быть отрицательными,
  а также может быть n > m или n < m.
*/


// * функция проверки на число
// const isNumber = n => (!isFinite(n) && isNaN(n));


// * функция минимум
// const myMin = ((n, m) => ((n < m) ? n : m));

// * функция максимум
// const myMax = ((n, m) => ((n > m) ? n : m));


// * простое вычисление по Юлианскому календарю
const getLeapYearsSimple = (n, m) => {
  const min = (n < m) ? n : m;
  const max = (n > m) ? n : m;
  const arr = [];
  for (let year = min; year <= max; year++) {
    console.log('year: ', year);
    // простая проверка на високосный год
    // todo проверку по википедии
    if (!(year % 4)) {
      arr.push(year);
    }
  }
  return arr;
};

// test
console.log(getLeapYearsSimple(1800, 2050));
