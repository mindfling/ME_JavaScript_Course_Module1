'use strict';

/*
Вам дан список ip-адресов -> IPv4
задача: написать функцию, которая будет возвращать число равное количеству уникальных ip-адресов
*/


const len = listIPv4.length;

const ipSet = new Set();
let uniqueCount = 0;
let repeatCount = 0;

listIPv4.forEach( oneIP => {
  if (ipSet.has(oneIP)) {
    repeatCount++;
  } else {
    uniqueCount++;
    ipSet.add(oneIP);
  }
});


console.log('исходный массив listIPv4: ', listIPv4);
console.log('исходное количество элементов: ', len);

console.log('множестово SetIPv4: ', ipSet);
console.log('количество элементов множества size: ', ipSet.size);
console.log('уникальные uniqueCount: ', uniqueCount);
console.log('повторяющиеся repeatCount: ', repeatCount);



