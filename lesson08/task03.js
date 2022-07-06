'use strict';

/*
* Вторая задача:
    Скопируйте код task01.js в task02.js
    Продолжаем работать с предыдущей функцией
    Функция принимает еще два параметра n и m
    Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива
    m и n включительно
    Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.;

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
const isNumber = n => (!isFinite(n) && isNaN(n));


// * функция проверки на Чётное число
const isEvenNumber = n => ((n % 2) === 0);

// * функция проверки на Нечётное число
const isOddNumber = n => ((n % 2) === 1);


// * функция минимум
const myMin = (n, m) => (n < m) ? n : m;

// * функция максимум
const myMax = (n, m) => (n > m) ? n : m;


// * своя функция генерации случайных чисел от n до m
// * c проверкой на положительные и отрицательные числа независимо от порядка
const getRandomMinMaxInt = (n, m) => {
  const min = myMin(n, m);
  const max = myMax(n, m);
  return Math.floor( Math.random() * Math.abs(max - min + 1) + min );
}


// * функция принимает параметры
// todo math method here in generator ??
// nCount количество элементов в массиве
// min минимальная граница диапазона чисел
// max максимальная граница чисел
// parity - четность 'even' -> четный 'odd' -> нечетный
const getRandomArray = (nCount = 100, min = 1, max = 100, parity) => {
  console.log('nCount: ', nCount);
  
  const minNumber = myMin(min, max);
  const maxNumber = myMax(min, max);
  console.log('minNumber: ', minNumber);
  console.log('maxNumber: ', maxNumber);

  if (parity) {
    parity = parity.toLowerCase();
  }
  console.log('parity: ', parity);

  let arr = [];
  for (let i = 0; i < nCount; i++) {

    let pushNumber = getRandomMinMaxInt(minNumber, maxNumber); // генерируем число

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

  return arr;
}



//тест
console.log(getRandomArray(10, -100, 999, 'odd'));
console.log(getRandomArray(10, 100, -999, 'even'));
console.log(getRandomArray(15, 10, 99));

