console.log('it works!');

function calculateBill(cost, rate){
//this is function body
console.log('Running calculateBill');
const total = cost * (1 + rate);
return total;
}

//average
function avOfFour(a, b, c, d){
  const avved = (a + b + c + d)/4;
  return avved;
}

function doctorize(name){
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose'){
  return `HEY ${name.toUpperCase()}`;
}
//function call
const myTotal = calculateBill(200, .07);
console.log(myTotal);


function add(a, b = 3){
  const total = a + b;
  return total;
}

const add2 = (a, b = 3) => a + b;


/*
// Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body
  console.log('Running Calculate Bill!!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// Function Call. Or **Run**
const wesTotal = 500;
const wesTaxRate = 0.3;
// const myTotal = calculateBill(wesTotal, wesTaxRate);

// Function Definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Wes');
// console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
*/