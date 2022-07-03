'use strict';

/*
Вторая задача:
  Напишите функцию, которая принимает строку и возвращает модифицированную строку
  Строка начинается с большой буквы, остальные буквы маленькие
  Пример:  "привет Мир" => "Привет мир"
*/

const capitalize = (str) => {
  str = str || ''; // проверка на пустую строку
  const copyStr = str.toLowerCase(); //переводим все символы в нижний регистр
  const resultStr = copyStr.charAt(0).toUpperCase() + copyStr.substring(1); // первый символ строки верхнего регистра
  return resultStr;
}


console.log('');
console.log('Task 02');
console.log(capitalize("привет Мир"));
console.log(capitalize("прИвЕт мИр"));
console.log(capitalize("СТРоКа ЗаГЛаВНоЙ БуКВы..."));
