'use strict';


// * макс пример функ возведения в степень
// проверяем только на положительные целые числа
const pow = (x, n) => {
  n = parseInt(n);
  console.log('n: ', n);

  if (n < 0) {
    return;
  }

  if (n === 0) {
    return 1;
  }

  if (n > 1) {
    return (x * pow(x, (n - 1)));
  }
};

/*
((x,n) => {
  console.log(x, '^', n, '=', pow(x,n), '\n');
})(0,3.34544);
*/


// * функция факториал
const factorial = (n) => {
  if (n < 0) {
    return;
  }
  if (n === 0) {
    return 1;
  }
  if (n > 0) {
    return (n * factorial(n - 1));
  }
  return;
}

/*
((x) => {
  console.log(x + '! =', factorial(x), '\n');
})(10);
*/

// * функция Фибоначчи
const fibo = (n) => {
  if (n <= 2) {
    return 1;
  }
  return fibo(n - 2) + fibo(n - 1);
};

console.time('fibo2');
((n) => {
  console.log(' fibo(' + n + ') = ', fibo(n), '\n');
})(32);
console.timeEnd('fibo2');
