'use strict';

/*
# Задача #2
Напишите рекурсивную функцию, которая принимает один параметр массив,
генерирует целое число от 0 до 10 включительно и добавляет его в массив.
Каждый раз после добавления нового числа проверяет сумму элементов массива,
если она меньше 50 запускается снова передавая себе массив.
Если сумма больше 50-ти, то функция возвращает этот массив.
*/


// генератор случайного числа
// The maximum is inclusive and the minimum is inclusive
const getRandomIntInclusive = (min, max) => {
  min = min < max ? min : max;
  max = min > max ? min : max;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// функция нахождения суммы чисел в массиве
const sumOfArray = arr => arr.reduce((prev, current) => (prev += current), 0);

// генератор массива случайных чисел
const generateArray = arr => {
  const rand = getRandomIntInclusive(0, 10); // случайное число
  arr.push(rand); // добавляем в массив
  const sum = sumOfArray(arr); // сумма массива
  if (sum < 50) {
    return generateArray(arr); // запуск рекурсии
  } else {
    return arr;
  }

  // почему здесь код недоступен // ?
  // console.log('++count', ++count);
  // return arr;
};

console.log(generateArray([]));
console.log(generateArray([1, 2, 10]));
console.log(generateArray([5, 20, 10, 25]));
