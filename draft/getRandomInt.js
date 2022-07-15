'use strict';


// * функция минимум
const myMin = (n, m) => ((n < m) ? n : m);

// * функция максимум
const myMax = (n, m) => ((n > m) ? n : m);


const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const getRandomMinMaxInt = (n, m) => {
  const min = myMin(n, m);
  const max = myMax(n, m);
  return Math.floor(Math.random() * Math.abs(max - min + 1) + min);
};

// const getRandomMinMaxInt = (n, m) => {
//   const min = Math.min(n, m);
//   const max = Math.max(n, m);
//   return Math.floor( Math.random() * Math.abs(max - min + 1) + min );
// }


// * TESTING * //
const test = (iterations, callbackRandy, minNumber, maxNumber) => {
  const min = minNumber;
  const max = maxNumber;

  console.log('minNumber: ', minNumber);
  console.log('maxNumber: ', maxNumber);
  console.log('iterations: ', iterations);

  const map = new Map();

  // * get randy statistics
  for (let i = 0; i < iterations; i++) {
    const rand = callbackRandy(min, max);
    if (map.has(rand)) {
      map.set(rand, map.get(rand) + 1);
    } else {
      map.set(rand, 0);
    }
  }

  // * ГОТОВО *
  // console.log(map);

  //* сортировка по ключам
  // извлекаем все ключи
  const keysArr = [];
  for (const oneKey of map.keys()) {
    keysArr.push(oneKey);
  }

  // сортируем массив ключей
  keysArr.sort((next, prev) => next - prev);

  // обработка результатов
  const sortmap = new Map();
  keysArr.forEach(item => {
    sortmap.set(item, map.get(item));
  });

  const resmap = new Map();
  keysArr.forEach(number => {
    const quantity = map.get(number);
    const percent = (quantity * 100 / iterations).toFixed(2) + ' %';
    const info = {number, quantity, percent};
    resmap.set(number, info);
  });

  // простой вывод в консоль
  console.log('resmap: ', resmap);

  // свой вывод в консоль
  for (const statData of resmap.values()) {
    // console.log(statData);
    // let res = '';
    for (const key in statData) {
      // if (Object.hasOwnProperty.call(statData, key)) {
      const value = statData[key];
      // console.log(key, '=', value);
      // res += value + '\t-> ' + key + '\t'
      // }
    }
    // console.log(res);
  }
};


// test
// проверяем распределение вероятностей выпадения случайного числа от 1 до 100
// test(1000000, getRandomInt, -1, 1)
// test(10000000, getRandomMinMaxInt, -10, -20)
// test(10000000, getRandomInt, -10, -20)
test(10000000, getRandomMinMaxInt, 100, -50);
