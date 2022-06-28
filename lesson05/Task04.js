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

const calculate = function (totalSum, productsNumber, promo) {
  
  let currentSum = totalSum;

  // Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
  if (productsNumber > 10) {
    currentSum -= currentSum * 0.03; // скидка 3% от суммы
  }

  // При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
  if (currentSum > 30000) {
    currentSum -= currentSum * 0.15;  // скидка 15% от суммы
  }

  // Если промокод равен "METHED", то скидка 10%
  if (promo === "METHED") {
    currentSum -= currentSum * 0.10;  // скидка 10% от суммы
  }

  // Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма корзины после предыдущих скидок превышает 2000р
  if ( currentSum > 2000 && promo === 'G3H2Z1' ) {
    currentSum -= 500; // еще скидываем 500р
  }

  let allDiscount = totalSum - currentSum;

  // возвращаем сумму которая получилась
  return currentSum;
};


// тест функции скидки
console.log('');
console.log('Task04');
console.log(calculate(30000, 9, ''));
console.log(calculate(30000, 12, ''));
console.log(calculate(31000, 12, ''));
console.log(calculate(31000, 12, 'METHED'));
console.log(calculate(31000, 12, ''));
console.log(calculate(31000, 12, 'G3H2Z1'));
