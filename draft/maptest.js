'use strict';

// генератор случайных чисел от 0 до n
const getRandiFloor = seed => Math.floor( (seed + 1) * Math.random() + 0);

// генератор случайных чисел от min до max
const getRandMinimaxFloor = (min, max) => Math.floor( (max - min + 1) * Math.random() + min);



const test = (iterations, callbackRandy, minNumber,  maxNumber)  => {
  
  const seed = maxNumber;
  const min = minNumber;
  const max = maxNumber;

  console.log('minNumber: ', minNumber);
  console.log('maxNumber: ', maxNumber);
  console.log('iterations: ', iterations);
  console.log('seed: ', seed);


  let map = new Map();
  
  // get randy statistics
  for (let i = 0; i < iterations; i++) {
    // let rand = callbackRandy(seed);
    let rand = callbackRandy(min, max);
    if (map.has(rand)) {
      map.set(rand, map.get(rand) + 1);
    } else {
      map.set(rand, 0);
    }
  }

  // * ГОТОВО * 
  // console.log(map);


  //*сортировка по ключам
  //извлекаем все ключи
  const keysArr = [];
  for (const oneKey of map.keys()) {
    keysArr.push(oneKey);
  }
  
  //сортируем массив ключей
  keysArr.sort( (next, prev) =>  next - prev);
  
  //обработка результатов
  let sortmap = new Map();
  keysArr.forEach( item => {
    sortmap.set(item, map.get(item));
  });
  
  let resmap = new Map();
  keysArr.forEach( number => {
    const quantity = map.get(number);
    const percent = (quantity * 100 / iterations).toFixed(2) + ' %';
    const info = {number, quantity, percent};
    resmap.set(number, info);
  });
  
  console.log('resmap: ', resmap);
}


//test
// test(10000000, getRandiFloor, 3, 6);
test(1000000, getRandMinimaxFloor, 10, 25);
