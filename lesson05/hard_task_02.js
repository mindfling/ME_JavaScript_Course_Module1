'use strict';

/*
Вторая задача
  В отдельном файле hard_task_02
  Получите от пользователя 2 числа
  Напишите функцию нахождения минимального числа, без использования условного оператора, циклов и массивов
  Не используйте Math.max и Math.min
*/


// * by google without conditions
// ? вообще говоря на самом деле чисто математически 
// ? условие зарыто здесь на уровне оператора Модуля abs()

// * функция максимум на модулях
const max = (x, y) => {
  return (x + y + Math.abs(x - y)) / 2;
}

// * функция минимум на модулях
const min = (x, y) => {
  return (x + y - Math.abs(x - y)) / 2;
}



// тест
console.log(max(-4, 6), min(-4, 6));
console.log(max(-4, -6), min(-4, -6));
console.log(max(4, -6), min(4, -6));
console.log(max(4, 6), min(4, 6));
console.log(max(1, 6), min(1, 6));
console.log(max(2, 3), min(2, 3));
console.log(max(5, 5), min(5, 5));
console.log(max(0, 5), min(0, 5));
console.log(max(5, 0), min(5, 0));


// не подходит по ТЗ
// * простой способ min
// const myMin = (x, y) =>  x < y ? x : y;
// * простой способ max
// const myMax = (x, y) => x > y ? x : y;


