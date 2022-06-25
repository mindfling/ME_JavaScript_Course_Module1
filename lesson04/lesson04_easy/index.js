'use strict'

{
  const name = 'Кроссовки';
  const quantity = 12;
  const category = 'обувь';
  const price = 1250;
  let money = quantity * price;
}


{
  const name = 'Сноуборд';
  const quantity = 17;
  const category = 'спорт-инвентарь';
  const price = 2500;
  let money = quantity * price;
}


// * Первая задача
// делаем проверку на число
// убираем лишние console.log()
{
  const name = prompt('Введите наименование товара');
  // console.log('name: ', typeof name, name); // String

  const quantity =  parseInt(prompt('Введите количестова товара ' + name)); // приводим к Number
  // console.log('quantity: ', typeof quantity, quantity);
  if ( isNaN(quantity) ) {
    console.log('Вы ввели некорректные данные');
  } else {
    console.log('Вы ввели количество товара число', quantity);
  }
  
  const category = prompt('Введите категорюю товара ' + quantity);
  // console.log('category: ', typeof category, category); // String
  
  const price = parseFloat(prompt('Введите цену на ' + name)); // приводим к Number через parseInt
  // console.log('price: ', typeof price, price);
  if (isNaN(price)) {
    console.log('Вы ввели некорректные данные');
  } else {
    console.log('Вы ввели цену товара, число', price);
  }

  // console.log(`На складе имеется ${quantity} единицы товара ${name} на сумму ${price * quantity} деревянных`);
}
