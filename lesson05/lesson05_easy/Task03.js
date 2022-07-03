'use strict';

/*
Третья задача:
  Напишите функцию, которая принимает строку и возвращает обратную строку
  Пример: "Привет мир" => "рим тевирП"
*/

// * первый вариант
// * самый простой декларативный способ
const flipString = str => {
  str = str || '';
  return str.split('').reverse().join('');
}

console.log('');
console.log('Task03');

// тест функции
console.log(flipString("Привет мир"));
console.log(flipString("Привет Перевернутая Срока"));
console.log(flipString("TeNet палиндром ДоВод"));



// * второй вариант
// * перебор элементов строки в цикле for
// здесь вариант аргумента по умолчанию
function flipStringFor(str = '') {
  let result = '';
  for (let i = str.length - 1; i >= 0; i-- ) {
    result += str[i];
  }
  return result;
}

// тест функции
console.log('');
console.log(flipStringFor("Привет мир"));
console.log(flipStringFor("Привет Перевернутая Срока"));
console.log(flipStringFor("TeNet палиндром ДоВод"));



// * перебор элементов строки в цикле while
function flipStringWhile(str = '') {
  let result = '';
  let i = str.length;
  while (i > 0) {
    result += str[--i];
  }
  return result;
}

// тест функции
console.log('');
console.log(flipStringWhile("Привет мир"));
console.log(flipStringWhile("Привет Перевернутая Срока"));
console.log(flipStringWhile("TeNet палиндром ДоВод"));

