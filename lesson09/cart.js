'use strict';


// * формируем объект корзины покупок cart
const cart = {

  // * свойства
  items: [], // пустой массив список товаров
  totalPrice: 0, // общая стоимость корзины
  count: 0, // количество товаров


  // *** методы ***
  // * getTotalPrice()
  //    - получить общую стоимость товаров - метод возвращает значение свойства
  getTotalPrice() {
    return this.totalPrice;
  },

  // * add() - добавить товар
  add(productName, productPrice, productAmount = 1) {
    //    Принимает три параметра:
    // *  название товара
    // *  цену товара
    // *  количество товара (опциональный параметр, по умолчанию 1 товар)
    // формирует объект из полученных параметров и добавляет его в свойство
    // вызывает все необходимые методы чтобы актуализировать count и totalPrice
    // * товар, который добавляем в корзину
    const product = {
      name: productName, // * название товара
      price: productPrice, // * цена товара
      amount: productAmount, // * количество товаров
    };
    cart.items.push(product); // добавляем товар в список
    cart.increaseCount(productAmount);
    cart.calculateItemPrice();
  },

  // * increaseCount() - увеличить количество товаров
  increaseCount(num = 1) {
    // Принимает один параметр(число num)
    // Увеличивает свойство count на num
    cart.count += num;
  },

  // * calculateItemPrice()  посчитать общую стоимость всех товаров items[]
  // - пересчитывает стоимость всей корзины и записывает значение в
  calculateItemPrice() {
    let count = 0;
    let total = 0;
    // todo try to do it with .reduce()
    cart.items.forEach(product => {
      count++;
      total += product.price * product.amount;
    });
    cart.count = count;
    cart.totalPrice = total;
  },

  // * clear() - очистить корзину //* clear()
  // очищает полностью нашу корзину, возвращает все значения в изначальные
  clear() {
    cart.items = [];
    cart.totalPrice = 0;
    cart.count = 0;
  },


  // * print - распечатать корзину
  print() {
    const str = JSON.stringify(cart);
    console.log('содержание объекта корзины : ', str);
  },

};

// *****************************************
console.log('пустая корзина cart: ', cart);

cart.add('Носки', 150, 5);
console.log('Добавили носки cart: ', cart);

cart.add('Скейтборд', 2550, 1);
console.log('Добавили Скейт cart: ', cart);

cart.add('Кроссовки', 1250, 1);
console.log('Добавили кроссовки cart: ', cart);

console.log(cart.getTotalPrice());

// в итоге получаем корзину и несколько товаров
cart.print();
console.log('корзина cart: ', cart);

