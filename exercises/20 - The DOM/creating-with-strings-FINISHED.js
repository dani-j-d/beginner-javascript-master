console.log('it works');
const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup <img onload="alert('HACKED')" src="https://picsum.photos/50"/>`;
const myHTML = `
  <div class="wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;

console.log(myHTML.classList);
console.log(typeof myHTML);

item.innerHTML = myHTML;

const itemImage = document.querySelector('.wrapper img');
console.log(itemImage);

//turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);


// item.innerHTML = `
//   <div>
//     <h1>Hey! How are ya?!</h1>
//   </div>
// `;
// console.log(item.innerHTML);


// const item = document.querySelector('.item');

// const width = 500;
// const src = `https://picsum.photos/${width}`;
// const desc = `Cute Pup <img onload="alert('HACKED')" src="https://picsum.photos/50"/>`;
// const myHTML = `
//   <div class="wrapper">
//     <h2>Cute ${desc}</h2>
//     <img src="${src}" alt="${desc}"/>
//   </div>
// `;

// // turn a string into a DOM element
// const myFragment = document.createRange().createContextualFragment(myHTML);

// document.body.appendChild(myFragment);
