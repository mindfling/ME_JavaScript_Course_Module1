'use strict';


/*
Задача #1
  Создать объект rectangle, который описывает ширину и высоту
  (свойства width и height) прямоугольника
  Объект должен иметь 2 сеттера для записи ширины и высоты и
  два геттера для получения периметра и площади прямоугольника

  Сеттеры могут принимать только числа
  Геттеры возвращают строку число + "см"
  пример "40см"

  По умолчанию значения высоты и ширины заданы 5 см
*/

const rectangle = {

  _width: 5,
  _height: 5,

  get perimeter() {
    console.log('setter perimeter');
    return `${this._width * 2 + this._height * 2}см`;
  },

  get square() {
    console.log('setter square');
    return `${this._width * this._height}кв.см`;
  },

  set width(w = 5) {
    console.log('setter width', w);
    this._width = w;
  },

  set height(h = 5) {
    console.log('setter height', h);
    this._height = h;
  },

};


console.log(rectangle);
rectangle.width = 10;
console.log(rectangle.perimeter);
console.log(rectangle.square);
rectangle.height = 10;
console.log(rectangle.perimeter);
console.log(rectangle.square);
