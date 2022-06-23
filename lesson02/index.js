'use strict'

{
  const name = 'Smart-проектор Philips';
  const quantity = 5;
  const category = 'видео-техника';
  const price = 3200;
  let money = quantity * price;

  console.log(name);
  console.log(`Общая сумма товара: ${money}`);
}

{
  /* 
  * Видимосто const и let только внутри блока
  *
  *   Создайте второй товар
  *   Другой категории
  */
  const name = 'Кроссовки';
  const quantity = 12;
  const category = 'обувь';
  const price = 1250;
  let money = quantity * price;

  console.log(name);
  console.log(`Общая сумма товара: ${money}`);
}


{
  /**
   *   Создайте третий товар
   */
  const name = 'Сноуборд';
  const quantity = 17;
  const category = 'спорт-инвентарь';
  const price = 2500;

  console.log(name);
  console.log(`Общая сумма товара: ${quantity * price}`);
}

