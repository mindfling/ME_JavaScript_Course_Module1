'use strict'

{
  const name = 'Кроссовки';
  const quantity = 12;
  const category = 'обувь';
  const price = 1250;
  let money = quantity * price;

  console.log(name);
  console.log(`Общая сумма товара: ${money}`);
}


{
  const name = 'Сноуборд';
  const quantity = 17;
  const category = 'спорт-инвентарь';
  const price = 2500;

  console.log(name);
  console.log(`Общая сумма товара: ${quantity * price}`);
}


{
  const name = prompt('Введите наименование товара');
  console.log('name: ', typeof name, name);
  const quantity =  parseInt(prompt('Введите количестова товара ' + name));
  console.log('quantity: ', typeof quantity, quantity);
  const category = prompt('Введите категорюю товара ' + quantity);
  console.log('category: ', typeof category, category);
  const price = +prompt('Введите цену на ' + name);
  console.log('price: ', typeof price, price);
}
