'use strict';

// * IIFE
(() => {
  const isNumb = x => {
    if (!Number.isNaN(parseFloat(x)) && isFinite(x)) {
      return +x;
    } else {
      return null;
    }
  };

  const sum = (a) => {
    a = isNumb(a); // проверяем и возвращаем число
    // a хранится в замыкании
    if (a) {
      return (b) => (a + b);
    } else {
      return null;
    }
  };

  // передаем фабрику функц в глобальный обкт
  window.factorySum = sum;
})();


const sumFive = window.factorySum(5); // сюда возвращается функция сумм(арг + 5)
