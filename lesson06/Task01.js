'use strict';

/*
  Первая задача:
  Выведите в консоль таблицу степеней от 1 до 10 по аналогии как в уроке
  выводится таблица умножения
*/


console.log('\nTask01 Таблица умножения');
for (let i = 1; i <= 10; i++) {
  console.log('----------');
  for (let j = 0; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}


console.log('\nTask01 Таблица Степеней');
for (let i = 0; i <= 10; i++) {
  console.log('- - - - - - - - - - ');
  for (let j = 0; j <= 10; j++) {
    console.log(`${i} ^ ${j}\t= ${i ** j}`);
  }
}
