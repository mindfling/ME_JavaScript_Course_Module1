'use strict';

const closure = () => {


  const x = 10;
  const y = 555;
  const a = 'aa';
  console.log('x: ', x);
  console.log('y: ', y);
  console.log('a: ', a);

  const closeTwo = (y) => {
    console.log('close2');
    return x +yy
  };

  console.log(closeTwo);
  console.dir(closeTwo);

  const closeThree = (c) => {
    console.log('close3', c + a);
    const y = 15;
    return x + y;
  };

  console.dir(closeThree);

  return closeTwo(25);
};


closure();
// console.log(closure());
