'use strict';

/*
Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.
В качестве аргументов функция принимает 3 параметра:

  calculate(
    Общая сумма корзины,
    Количество товаров в корзине,
    Промокод
  )
*/

/*
  Правила и порядок (порядок важен!) начисления скидок: ...

  Порядок применения скидок должен соблюдаться
*/

const calculate = function (totalSum, productsNumber, promo = '') {
  console.log();
  let currentSum = totalSum;
  console.log('totalSum: ', totalSum);
  console.log('productsNumber: ', productsNumber);
  console.log('promo: ', promo);

  // Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
  if (productsNumber > 10) {
    console.log('скидка 3% от суммы');
    currentSum -= currentSum * 0.03; // скидка 3% от суммы
  }

  // При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
  if (currentSum > 30000) {
    console.log('скидка 15% от числа ПРЕВЫШАЮЩЕГО СУММУ');
    currentSum -= (currentSum - 30000) * 0.15; //  скидка 15% от числа ПРЕВЫШАЮЩЕГО СУММУ
    // currentSum -= currentSum * 0.15;  // скидка 15% от ОБЩЕЙ СУММЫ
  }

  // Если промокод равен "METHED", то скидка 10%
  if (promo === "METHED") {
    console.log(`скидка 10% от суммы по промокоду ${promo}`);
    currentSum -= currentSum * 0.10;  // скидка 10% от суммы
  }
  
  // Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма корзины после предыдущих скидок превышает 2000р
  if ( currentSum > 2000 && promo === 'G3H2Z1' ) {
    console.log(`скидка 500p от суммы по промокоду ${promo}`);
    currentSum -= 500; // еще скидываем 500р
  }

  let allDiscount = totalSum - currentSum;
  console.log('totalSum: ', totalSum);
  console.log('currentSum: ', currentSum);
  console.log('allDiscount: ', (allDiscount / totalSum * 100).toFixed(2), '%');

  // возвращаем сумму которая получилась
  return currentSum;
};


// тест функции скидки
console.log();
console.log('Task04');
console.log(calculate(30000, 9, ''));
console.log(calculate(32000, 9, ''));
console.log(calculate(30000, 12, ''));
console.log(calculate(31000, 12, ''));
console.log(calculate(31000, 12, 'METHED'));
console.log(calculate(31000, 12, ''));
console.log(calculate(31000, 12, 'G3H2Z1'));
