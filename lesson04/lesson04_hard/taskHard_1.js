'use strict';

{
  // * Обычная шкала налогообложения
  console.log('\nОбычная шкала налогообложения');


    //доход
  const incomeValue = +prompt('Укажите ваш доход в месяц');
  console.log('Доход: ', incomeValue, 'p');

  let taxPercentage = 0;
  

  //с помощью if else
  if (incomeValue < 15000) {
    // 13% на доход до 15 000 ₽
    taxPercentage = 13;
    
  } else if (incomeValue >= 50000) {
    // 30% на доход выше 50 000 ₽
    taxPercentage = 30;

  } else {
    // 20% на доход от 15 000 ₽ до 50 000 ₽
    taxPercentage = 20;
  }
  console.log('Процент налога: ', taxPercentage, '%');

  let taxValue = incomeValue * taxPercentage / 100;
  console.log('Сумма налога: ', taxValue, 'р\n');


  //с помощью тернарного оператора
  let taxPercentageTerno = (incomeValue < 15000) ? 13 : ((incomeValue >= 50000) ? 30 : 20);
  console.log('taxPercentageTerno: ', taxPercentageTerno, '%');
  console.log('Сумма налога: ', incomeValue * taxPercentageTerno / 100, 'р');

}