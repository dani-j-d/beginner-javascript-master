console.log('It works!');

const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

console.log(butts);

function handleClick() {
  console.log('IT GOT CLICKED!');
  alert('WHAT ARE YOU DOING!?!?!?');
}

const hooray = () =>
  alert("Seall! Tha i sgòthach a-muigh!");

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

//listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function buyItem() {
  console.log('Buying the shit out of that item');
  alert('Your purchased will processes as soon as possible. Thank you for your business!');
  }

function handleBuyButtonClick(buyButton) {
  // console.log('HEY');
  // console.log(buyButton);
  console.log('Binding the buy button');
  buyButton.addEventListener('click', buyItem);
}

  //buyButtons.addEventListener('click', buyItem);
buyButtons.forEach(handleBuyButtonClick);




// butts.removeEventListener('click', handleClick);



// const butts = document.querySelector('.butts');
// const coolButton = document.querySelector('.cool');

// function handleClick() {
//   console.log('🐛 IT GOT CLICKED!!!');
// }

// const hooray = () => console.log('HOORAY!');

// butts.addEventListener('click', function() {
//   console.log('Im an anon!');
// });
// coolButton.addEventListener('click', hooray);

// butts.removeEventListener('click', handleClick);

// // Listen on multiple items
// const buyButtons = document.querySelectorAll('button.buy');

// function handleBuyButtonClick(event) {
//   console.log('You clicked a button!');
//   const button = event.target;
//   // console.log(button.textContent);
//   // console.log(parseFloat(event.target.dataset.price));
//   console.log(event.target);
//   console.log(event.currentTarget);
//   console.log(event.target === event.currentTarget);
//   // Stop this event from bubbling up
//   // event.stopPropagation();
// }

// buyButtons.forEach(function(buyButton) {
//   buyButton.addEventListener('click', handleBuyButtonClick);
// });

// window.addEventListener(
//   'click',
//   function(event) {
//     console.log('YOU CLICKED THE WINDOW');
//     console.log(event.target);
//     console.log(event.type);
//     // event.stopPropagation();
//     console.log(event.bubbles);
//   },
//   { capture: true }
// );

// const photoEl = document.querySelector('.photo');

// photoEl.addEventListener('mouseenter', e => {
//   console.log(e.currentTarget);
//   console.log(this);
// });
