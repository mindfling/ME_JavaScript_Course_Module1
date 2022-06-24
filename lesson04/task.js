'use strict';


// * Вторая задача
console.log('task 4.2');

const rain = Math.round(Math.random());
console.log('rain: ', rain);

if (rain) {
  console.log('Пошел дождик! Возьмите зонт!');
} else {
  console.log('Дождя нет!');
}


// * Третья задача
console.log('task 4.3');

let markTotal = 0;

const markMathematics = parseInt(prompt('Введите количество баллов по Математике', 0));
const markComputerScience = parseInt(prompt('Введите количество баллов по Информатике', 0));
const markRussianLanguage = parseInt(prompt('Введите количество баллов по Русскому языку', 0));

markTotal = markMathematics + markComputerScience + markRussianLanguage;
console.log('markTotal: ', markTotal);

if ( markTotal >= 265 ) {
  console.log('Поздравляю, вы поступили на бюджет ))');
} else {
  console.log('К сожалению, вы не поступили :(');
}


// * Четвертая задача
console.log('task 4.4');

const minimalBankNote = 100; // номинал минимальной купюры 100р
const requestedAmount = parseInt(prompt('Какую сумму вы хотите снять?', 0));
if ( requestedAmount % minimalBankNote ) {
  console.log('К сожалению, банкомат не может выдать вам данную сумму.\nВ наличии имеются только купюры номиналом',
                minimalBankNote, 'рублей!');
} else {
  console.log('Банкомат может выдать вам эту сумму купюрами по', minimalBankNote, 'рублей');
}
