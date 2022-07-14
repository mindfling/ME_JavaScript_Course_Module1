'use strict';

/*
* Первая задача:
  Напишите функцию filter()
  функция принимает в параметрах 2 массива
    Первый массив — список всех студентов,
    второй — список студентов не сдавших экзамен.
  Результат функции: массив из всех студентов, которые сдали экзамен.
Пример:
*/

const allStudents = [
  'Иванов',
  'Петров',
  'Сидоров',
  'Кузнецов',
  'Смирнов',
  'Попов',
  'Соколов',
];
const failedStudents = ['Сидоров', 'Кузнецов', 'Смирнов'];
let passedSudents = [];

const filter = (allList, failedList) => {
  // проверка аргументов
  if (!Array.isArray(allList)) {
    allList = [];
  }

  if (!Array.isArray(failedList)) {
    failedList = [];
  }

  const passedList = [];
  allList.forEach(item => {
    if (!failedList.includes(item)) {
      passedList.push(item);
    }
  });

  return passedList;
};

passedSudents = filter(allStudents, failedStudents);
console.log();
console.log('Список всех студентов:', allStudents);
console.log('Список студентов не сдавших экзамен:', failedStudents);
console.log('Список студентов сдавших экзамен:', passedSudents);
