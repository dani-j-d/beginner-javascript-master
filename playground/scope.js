const first = 'wes';
let second = 'bos';
var age = 100;
let temp = null;

function go(){
  const hair = 'blonde';
  return hair;
}
function isCool(name){
  let cool = false;
  if(name === 'wes'){
    cool = true;
  }
  console.log(cool);
  return cool;
}
 
// function outer(){
//   const outerVar = 'hey I am an outer var!';
//   function inner(){
//     const innerVar = 'hey I am an inner var!';
//     console.log(innerVar);
//     console.log(outerVar);
//   }
//   return inner;
// }

// const innerFn = outer();

function createGreeting(greeting = ''){
  const myGreet = greeting.toUpperCase();
  return function (name) {

    return`${myGreet} ${name.toUpperCase()}`;
  }
}
const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');
console.log(sayHello('wes'));
console.log(sayHey('wes'));

temp = go();


// const age = 100;

// function go() {
//   const myAge = 200;
//   const hair = 'blonde';
//   console.log(age);
//   console.log(myAge);
//   console.log(hair);
// }

// go();
/* eslint-disable*/

// function isCool(name) {
//   if (name === 'wes') {
//     var cool = true;
//   }
//   console.log(cool);
//   return cool;
// }

// for(let i = 0; i < 10; i++) {
//   console.log(i);
// }

/*
const dog = 'snickers';

function logDog(dog) {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog('sunny');
}

go();

function yell() {
  console.log(name.toUpperCase())
}

function sayHi(name) {

  yell();
}


yell();
*/