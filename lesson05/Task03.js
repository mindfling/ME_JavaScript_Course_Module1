'use strict';

/*
Третья задача:
  Напишите функцию, которая принимает строку и возвращает обратную строку
  Пример: "Привет мир" => "рим тевирП"
*/

// * самый простой декларативный способ
const flipString = str => {
  str = str || '';
  return str.split('').reverse().join('');
}

console.log(flipString("Привет мир"));
console.log(flipString("Привет Перевернутая Срока"));
