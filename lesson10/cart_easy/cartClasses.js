'use strict';



class Cart {

  constructor() {
    // * свойства
    this.items = [];        // пустой массив список товаров
    this._totalPrice = 0;  // общая стоимость корзины
    this.count = 0;       //? количество товаров
  }


  // *** методы ***

  //* getter
  get totalPrice() {
    console.log('let get the price', this._totalPrice);
    return this._totalPrice;
  }
  // *setter
  // set totalPrice(numb) {
  //   console.log('setter', numb);
  //   this._totalPrice = numb;
  // }


  add( productName, productPrice, productAmount = 1 ) {
    const product = {
      name: productName, // * название товара
      price: productPrice, // * цена товара
      amount: productAmount // * количество товаров
    }
    this.items.push(product); // добавляем товар в список
    this.increaseCount(productAmount);
    this.calculateItemPrice();
  }


  increaseCount(num = 1) {
    this.count += num;
  }


  calculateItemPrice() {
    // let count = 0;
    let total = this.items.reduce( (sum, curItem) => {
      // count++;
      console.log(`  ${curItem.name}:  ${curItem.price}р * ${curItem.amount}шт`);
      return sum + curItem.price * curItem.amount;
    }, 0);

    // this.count = count;
    this._totalPrice = total;

    return this.totalPrice;
  }


  clear() {
    //console.log('очищает полностью нашу корзину, возвращает все значения в изначальные [] 0 0 ');
    this.items = [];
    this._totalPrice = 0;
    this.count = 0;
  }


  print() {
    const str = JSON.stringify(this);
    console.log('содержание объекта корзины : ', str);
  }

}


// *****************************************

const cart = new Cart();

console.log('пустая корзина cart: ', cart);

// console.log('Добавили носки cart: ', cart);

// console.log('Добавили Скейт cart: ', cart);

cart.add('Носки', 150, 5);
cart.add('Куртка', 1150, 7);
cart.add('Скейтборд', 2550, 5);
cart.add('Кроссовки', 1250, 10);
// console.log('Добавили кроссовки cart: ', cart);

// console.log(cart.get_TotalPrice());

// //в итоге получаем корзину и несколько товаров
// cart.print();
console.log('корзина cart: ', cart);
