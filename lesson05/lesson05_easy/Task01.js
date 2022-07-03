'use strict';

/*
  Первая задача:
  Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях
  1 евро = 1.2 доллара
  1 доллар = 73 рубля
*/

function convertEuroToRuble(euro) {
  const rateEuroDollar = 1.2; // 1 евро = 1.2 доллара
  const rateDollarRuble = 73; // 1 доллар = 73 рубля
  const ruble = euro * rateEuroDollar * rateDollarRuble; // 1 евро = 1.2 * 73 рубля = 87.60 рубля
  return ruble.toFixed(2); // сокращаем до копеек
}

console.log('');
console.log('Task 01');
console.log(1 + ' euro = ' + convertEuroToRuble(1) + 'p');
console.log(1.5 + ' euro = ' + convertEuroToRuble(1.5) + 'p');
console.log(2 + ' euro = ' + convertEuroToRuble(2) + 'p');
