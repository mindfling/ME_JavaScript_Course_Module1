'use strict';

/*
Вам дан список ip-адресов -> IPv4
задача: написать функцию, которая будет возвращать число равное количеству уникальных ip-адресов
*/

// * массив listIPv4 загружем в предыдущем скрипте


// * самый простой способ с помощью Set() коллекции
const getUniqueCountSimple = (list = []) => {
  if (Array.isArray(list)) {
    let setIP = new Set(list); // создаем коллекцию из массива
    return setIP.size; // возвращает количество уникальных элементов в коллекции
  }
  return; // если на входе был не массив
}

console.log(listIPv4);
console.log(listIPv4.length, '<- всего элементов в массиве');
console.log(getUniqueCountSimple(listIPv4), '<- количество уникальных элементов в коллекции');



/*
const len = listIPv4.length;
const setIP = new Set(); // set для подсчета уникальных адресов
let uniqueCount = 0;
let repeatCount = 0;
// подсчет в цикле
listIPv4.forEach( oneIP => {
  if (setIP.has(oneIP)) {
    repeatCount++; // подсчет повторяющихся адресов
  } else {
    uniqueCount++; // подсчет списка неповторяющихся адресов
    setIP.add(oneIP);
  }
});
*/

/*
// console.log('исходный массив listIPv4: ', listIPv4);
console.log('исходное количество адресов в списке:', len);
// console.log('множестово SetIPv4: ', setIP);
console.log('количество элементов множества size:', setIP.size, '= количеству неповторяющихся адресов');
console.log('уникальные uniqueCount:', uniqueCount);
console.log('повторяющиеся repeatCount:', repeatCount);
*/
// todo Записать видео с моим вопросом
//? 
//? уникальные адреса ?
//? неповторяющиеся адреса ?
//? неуникальные адреса ?
//? повторяющиеся адреса ?
//? 