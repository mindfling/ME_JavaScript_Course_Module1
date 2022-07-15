'use strict';


const cart = {

  // ** свойства **
  items: [], // пустой массив список товаров
  count: 0, // количество товаров
  _totalPrice: 0, // общая стоимость корзины


  // *** методы ***

  // * getter totalPrice
  get totalPrice() {
    return this.calculateItemPrice();
  },


  //  добавить товар
  add(productName, productPrice, productAmount = 1) {
    const product = {
      name: productName, // название товара
      price: productPrice, // цена товара
      amount: productAmount, // количество товаров
    };
    this.items.push(product); // добавляем товар в список
    this.increaseCount(productAmount); // увеличиваем счетчик количества товаров
    this.calculateItemPrice(); // вычисляем общую стоимость корзины
  },


  // увеличить количество товаров
  increaseCount(num = 1) {
    this.count += num;
  },


  // вычисляем сумму всей корзины
  calculateItemPrice() {
    const total = this.items.reduce((sum, curItem) => {
      console.log('sum: ', sum);
      return sum + curItem.price * curItem.amount;
    }, 0);
    this._totalPrice = total; // сохраняем в _totalPrice
    return total;
  },


  // очищает полностью нашу корзину
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },


  // выводит содержимое корзины в консоль
  print() {
    console.log(JSON.stringify(this));
  },
};


console.log('пустая корзина cart: ', cart);
cart.print();

cart.add('Носки', 150, 5);
cart.add('Куртка', 1150, 7);
cart.add('Кроссовки', 1250, 1);
cart.add('Скейтборд', 2550, 2);

console.log('корзина с товарами cart: ', cart);
cart.print();

