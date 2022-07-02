'use strict';

/*
* Первая задача:
  Напишите функцию генератор  массива случайных чисел в файле task01.js
  Функция принимает один обязательный параметр это количество элементов в массиве
  И возвращает массив со случайными числами от одного до 100 включительно;
*/

// * пример на https://learn.javascript.ru/task/random-int-min-max
function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}


// * своя функция генерации случайных чисел от 0 до n
// можно использовать одну из этих функций:
const getRandiFloor = n => Math.floor( (n + 1) * Math.random() );
const getRandiRound = n => Math.round( (n + 1) * Math.random() - 0.5 );
const getRandiCeil  = n =>  Math.ceil( (n + 1) * Math.random() - 1 );



const getRandomArray = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = getRandiRound(100);
  }
  return arr;
}


//тест
console.log(getRandomArray(15));
console.log(getRandomArray(100));
console.log(getRandomArray(500));


