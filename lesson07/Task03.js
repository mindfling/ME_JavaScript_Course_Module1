'use strict';

/*
* Третья задача * :
  Напишите функцию 
  ? addPrefix 
  Функция получает массив в виде параметров и возвращает массив с префиксами
  После префикса пробел добавляется автоматически

* Входящий массив :
?  const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

Вызов функции:
?  addPrefix(names, 'Mr')

Результат функции:
?  ['Mr Noah', 'Mr Liam', 'Mr Mason', 'Mr Jacob', 'Mr. Robot', 'Mr William', 'Mr Ethan', 'Mr Michael', 'Mr Alexander'];
*/


// функция принимает на входе массив с именами и префикс
// возвращает массив имен с префиксами
const addPrefix = (namesList, prefix = 'Mr.') => {
  console.log('namesList: ', namesList);
  console.log('prefix: ', prefix);
  console.log('len: ', namesList.length);

  if (!Array.isArray(namesList)) {
    return;
  }

  let resultList = [];
  resultList = namesList.map( (item, index, arr) => {

    // return prefix + ' ' + item;
    return `${prefix} ${item}`;
  });

  return resultList;
}

// Тест
const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

console.log( 'output :', addPrefix(names), '\n\n' );
console.log( 'output :', addPrefix(names, 'Mr'), '\n\n' );
console.log( 'output :', addPrefix(names, 'miss'), '\n\n' );


