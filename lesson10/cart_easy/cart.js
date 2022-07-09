'use strict';



// * формируем объект корзины покупок cart
const cart = {

  // * свойства
  items: [],         // пустой массив список товаров
  count: 0,         // количество товаров
  _totalPrice: 0,  // общая стоимость корзины


  // *** методы ***
  //    - получить общую стоимость товаров - метод возвращает значение свойства //? _totalPrice
  get totalPrice() {
    console.log('getter for totalPrice');
    return this.calculateItemPrice();
  },

  // ? ВОПРОС почему этот метод не геттер ?
  // getTotalPrice() {
  //   return this.totalPrice;
  // },


  //  добавить товар
  /*     Принимает три параметра:
  *  название товара //?  productName 
  *  цену товара      //?   productPrice
  *  количество товара (опциональный параметр, по умолчанию 1 товар) //?   productAmount
   этот метод формирует объект из полученных параметров и добавляет его в свойство items
   также вызывает все необходимые методы чтобы свойства count и _totalPrice были актуальные
  */
  add( productName, productPrice, productAmount = 1 ) {
    const product = {
      name: productName, // * название товара
      price: productPrice, // * цена товара
      amount: productAmount // * количество товаров
    }
    this.items.push(product);          // добавляем товар в список
    this.increaseCount(productAmount); // увеличиваем счетчик количества товаров в корзине
    this.calculateItemPrice();         // вычисляем общую стоимость корзины
  },


  // увеличить количество товаров
  // Увеличивает свойство count на num
  increaseCount(num = 1) {
    this.count += num;
  },


  // пересчитывает стоимость всей корзины и записывает значение в //? _totalPrice 
  calculateItemPrice() {
    // вычисляем сумму
    let total = this.items.reduce( (sum, curItem) => {
      return sum + curItem.price * curItem.amount;
    }, 0);
    this._totalPrice = total; // сохраняем

    return total;
  },


  // очищает полностью нашу корзину, возвращает все значения в изначальные
  clear() {
    console.log('очищает полностью нашу корзину');
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },


  // распечатать вывести в консоль содержание корзины //* print
  print() {
    console.log(JSON.stringify(this));
  },

}


// *****************************************

console.log('пустая корзина cart: ', cart);
cart.print();

cart.add('Носки', 150, 5);
cart.add('Куртка', 1150, 7);
cart.add('Кроссовки', 1250, 1);
cart.add('Скейтборд', 2550, 2);
//в итоге получаем корзину и несколько товаров

cart.print();
// console.log('корзина cart: ', cart);

