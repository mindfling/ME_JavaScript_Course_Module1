'use strict';


// const a = [1, 11, 111, 1111, 11111];
const a = [10, 20, 5, 15];
console.log('a: ', a);

const recuduceSum = a.reduce( (acc, curr) => (acc + curr));
console.log('recuduceSum: ', recuduceSum);



// ****************************************************
let count = 0;

const getRecuForward = (arr, current) => {
  // console.log('current: ', current, 'count', count++);
  if (current >= arr.length) {
    return 0;
  } else {
    return (arr[current] + getRecuForward(arr, current + 1));
  }
  return 0;
}

let sum = getRecuForward(a, 0);
console.log('sum1 =', sum);



// ****************************************************
count = 0;

const getRecursionBackward = (sumArray, currentIndex) => {
  
  if (Array.isArray(sumArray)) {
    let sum = 0;
    
    let len = sumArray.length;
    const recu = (arr, curr) => {
      if (curr < 0) {
        return 0;
      } else {
        return (arr[curr] + recu(arr, curr - 1));
      }
      return 0;
    };
    
    sum = recu(sumArray, len - 1);
    return sum;

  } 

  return;
}


console.log('a: ', a);
sum = getRecursionBackward(a);
console.log('sum2 =', sum);


