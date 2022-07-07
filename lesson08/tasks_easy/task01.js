'use strict';

/*
* Первая задача:
  Напишите функцию генератор  массива случайных чисел в файле task01.js
  Функция принимает один обязательный параметр это количество элементов в массиве
  И возвращает массив со случайными числами от одного до 100 включительно;
*/


// * своя функция генерации случайных чисел от 1 до n
const getRandomInt = (min, max) => Math.floor( Math.random() * (max - min + 1) + min );



// * функция принимает количество элементов в массиве
const getRandomArray = (nCount = 100) => {
  let arr = [];
  for (let i = 0; i < nCount; i++) {
    arr.push(getRandomInt(1, 100));
  }
  return arr;
}


//тест
console.log(getRandomArray(15));
console.log(getRandomArray(100));
console.log(getRandomArray(500));
console.log(getRandomArray());


