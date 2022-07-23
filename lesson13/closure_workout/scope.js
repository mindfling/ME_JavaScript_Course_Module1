'use strict';

let glo = 'blog';
const x = 5;

const scopeOne = (y, z) => {

  let  x = 555;
  //
  //
  console.log(x, y, z);

  const scopeTwo = () => {
    //
    //
    console.log(x);
  };
  scopeTwo();
  console.dir(scopeTwo);

};

scopeOne(25);
// console.dir(scopeOne);