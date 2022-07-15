'use strict';

/*
* Вторая задача:
  Скопируйте код task01.js в task02.js
  Продолжаем работать с предыдущей функцией
  Функция принимает еще два параметра n и m
  Числа m и n формируют диапазон, в пределах которого должно сгенерироваться
  числа для массива m и n включительно
  Учтите, что n и m могут быть отрицательными, а также
  может быть n > m или n < m
*/

// * функция минимум
const myMin = (n, m) => ((n < m) ? n : m);

// * функция максимум
const myMax = (n, m) => ((n > m) ? n : m);


// * своя функция генерации случайных чисел от n до m
// * c проверкой на положительные и отрицательные числа независимо от порядка
const getRandomMinMaxInt = (n, m) => {
  const min = myMin(n, m);
  const max = myMax(n, m);

  return Math.floor(Math.random() * Math.abs(max - min + 1) + min);
};


// * функция принимает количество элементов в массиве
const getRandomArray = (nCount = 100, min = 1, max = 100) => {
  const minNumber = myMin(min, max);
  const maxNumber = myMax(min, max);
  const arr = [];
  for (let i = 0; i < nCount; i++) {
    arr.push(getRandomMinMaxInt(minNumber, maxNumber));
  }
  return arr;
};


// тест
console.log(getRandomArray(15, 0, 25));
console.log(getRandomArray(10, -10, 10));
console.log(getRandomArray(50, -20, -10));
console.log(getRandomArray(10));
console.log(getRandomArray());

