'use strict';

/*
* Первая задача Усложненное задание
  В отдельном файле hard_task_01
  Напишите функцию, вычисляющую наибольший общий делитель двух чисел
*/



function nod(_x, _y) {
  let x = _x || 0;
  let y = _y || 0;
  while (x && y) {
    // повторяем пока одно из не станет == 0
    if (x > y) {
      x = x % y;
    } else {
      y = y % x;
    }
  }

  return x + y;
}


// тест
((x, y) => console.log(`nod(${x},${y}): ${nod( x, y )}`))( 12, 64);
((x, y) => console.log(`nod(${x},${y}): ${nod( x, y )}`))( 12, 3);
((x, y) => console.log(`nod(${x},${y}): ${nod( x, y )}`))( 8, 64);

((x, y) => console.log(`nod(${x},${y}): ${nod( x, y )}`))( 55, 21);
((x, y) => console.log(`nod(${x},${y}): ${nod( x, y )}`))( 12, 1);


