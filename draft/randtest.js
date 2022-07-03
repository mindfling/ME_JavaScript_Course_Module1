'use strict';


const getRandom = n => Math.round(Math.random());

const getRandiRound = n => Math.round( (n + 1) * Math.random() - 0.5 );
const getRandiFloor = n => Math.floor( (n + 1) * Math.random() + 0);
const getRandiCeil  = n =>  Math.ceil( (n + 1) * Math.random() - 1 );

//const getRandiCeil  = n =>  Math.floor( (n) * Math.random()  );


const myMax = (x, y) => (x + y + Math.abs(x - y)) / 2;
const mymin = (x, y) => (x + y - Math.abs(x - y)) / 2;


function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(1, 6)
console.log(rndInt)

function generateRandomInteger(min, max) {
  return Math.floor(min + Math.random()*(max - min + 1))
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



new Map()

new Set()
// для подсчета )))





