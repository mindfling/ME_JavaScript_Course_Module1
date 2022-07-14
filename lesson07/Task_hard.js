'use strict';

/*
Не обязательное задание (+1 балл)
  Напишите функцию
  * getAveragePriceGoods
  для получения средней цены товара
  * Дан многомерный (двумерный) массив :
*/
const allCashbox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370],
];

/*
? В каждом массиве из двух элементов,
  первым - является количество товаров в чеке,
  а вторым — общая сумма.
? Необходимо посчитать среднюю стоимость одного товара в магазине.
*/

const getAveragePriceGoods = goodsList => {
  if (!Array.isArray(goodsList)) {
    return;
  }
  const len = goodsList.length; // длина массива == количество елементов
  // формируем массив стоимостей каждого товара
  // делим общую сумму на количество товара
  const oneGoodPriceList = goodsList.map(oneGood =>
    Math.floor(oneGood[1] / oneGood[0] * 100) / 100,
  );
  // подсчитываем сумму элементов массива
  let sumPrices = 0;
  oneGoodPriceList.forEach(onePrice => {
    sumPrices += onePrice;
  });
  // вычисляем среднюю цену товаров в магазине
  const averagePrice = Math.floor(sumPrices / len * 100) / 100;

  return averagePrice;
};


// тест
console.log();
console.log(getAveragePriceGoods(allCashbox));
console.log();
console.log(
  getAveragePriceGoods([
    [17, 4500],
    [7, 3210],
    [4, 650],
    [3, 1250],
    [18, 9830],
    [1, 990],
    [16, 13900],
    [1, 370],
  ]),
);
