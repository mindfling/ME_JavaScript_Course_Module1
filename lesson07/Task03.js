'use strict';

/*
* Третья задача * :
  Напишите функцию 
  ? addPrefix 
  Функция получает массив в виде параметров и возвращает массив с префиксами
  После префикса пробел добавляется автоматически

* Входящий массив :
?  const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
* Вызов функции:
?  addPrefix(names, 'Mr')
* Результат функции:
?  ['Mr Noah', 'Mr Liam', 'Mr Mason', 'Mr Jacob', 'Mr. Robot', 'Mr William', 'Mr Ethan', 'Mr Michael', 'Mr Alexander'];
*/


// функция принимает на входе массив с именами и префикс
// возвращает массив имен с префиксами
const addPrefix = (namesList, prefix = 'Mr.') => {

  if (!Array.isArray(namesList)) {
    return;
  }

  return namesList.map( item => `${prefix} ${item}` );
} 


// Тест
const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
const namesRus = ['Иванчей', 'Пьеров', 'Сидоров', 'Каземцев', 'Смирнов', 'Соколов', 'Паприков'];

console.log();
console.log( 'output :', addPrefix(names), '\n\n' );
console.log( 'output :', addPrefix(names, 'Mr'), '\n\n' );
console.log( 'output :', addPrefix(namesRus, 'Господин'), '\n\n' );
