'use strict'

{
  /*
  * первый товар 
  * видимость const и let только внутри блока
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
  /*
   * второй товар
   */
  const name = 'Сноуборд';
  const quantity = 17;
  const category = 'спорт-инвентарь';
  const price = 2500;

  console.log(name);
  console.log(`Общая сумма товара: ${quantity * price}`);
}

