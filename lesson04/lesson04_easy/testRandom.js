'use strict';

// * ТЕСТ РАСПРЕДЕЛЕНИЯ ВЕРОЯТНОСТЕЙ 
 // Math.random(0,1)

// наша тестируемая функции
// будет ли дождь <- 1
//       или нет  <- 0
function getRain() {
  const rain = Math.round(Math.random());
  return rain;
}

// запус тест
function test(count) {

  // count = count ? count : 100; // * количество прохождений теста
  count = count || 100;
  console.log('count: ', count);
  
  const rainCounter = {
    "0": 0, // * вероятность выпадения 0
    "1": 0, // * вероятность выпадения 1
  }

  for (let i = 0; i <= count; i++) {
    rainCounter[getRain()]++;
  }

  console.log(rainCounter);
  console.log( Math.abs((rainCounter[0] - rainCounter[1]) / count * 100), '%'  ); // * процент погрешности распределения
}

test(102400);



// ? результаты теста

// count:  1024000
// { '0': 512183, '1': 511818 }
// 0.03564453125 = 0.03% at 1e6

// count:  1024000
// { '0': 512628, '1': 511373 }
// 0.12255859374999999

// count:  10240
// { '0': 5111, '1': 5130 }
// 0.185546875 %

// count:  102400
// { '0': 51123, '1': 51278 }
// 0.1513671875 %