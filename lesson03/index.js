'use strict'

{
  const name = 'Кроссовки';
  const quantity = 12;
  const category = 'обувь';
  const price = 1250;
  let money = quantity * price;

  console.log(name);
  console.log(`Общая сумма товара: ${money} деревянных`);
}


{
  const name = 'Сноуборд';
  const quantity = 17;
  const category = 'спорт-инвентарь';
  const price = 2500;

  console.log(name);
  console.log(`Общая сумма товара: ${quantity * price} деревянных`);
}


{
  const name = prompt('Введите наименование товара');
  console.log('name: ', typeof name, name); // String

  const quantity =  +prompt('Введите количестова товара ' + name); // приводим к Number
  console.log('quantity: ', typeof quantity, quantity);
  
  const category = prompt('Введите категорюю товара ' + quantity);
  console.log('category: ', typeof category, category); // String
  
  const price = parseInt(prompt('Введите цену на ' + name)); // приводим к Number через parseInt
  console.log('price: ', typeof price, price);

  console.log(`На складе имеется ${quantity} единицы товара ${name} на сумму ${price * quantity} деревянных`);
}
