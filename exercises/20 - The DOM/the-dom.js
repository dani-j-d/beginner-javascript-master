// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const heading = document.querySelector('h2');


// console.log(p);
// console.log(imgs);
// //set text content property on that element
// heading.textContent = 'Wes is cool';
// console.log(heading.textContent);
// console.log(heading.innerText);

const pic = document.querySelector('.nice');
pic.classList.add('open');
 
console.log(pic.classList);

function toggleRound(){
    pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);
pic.alt = 'Cute Pup'; //setter
pic.width = 300;
console.log(pic.alt); //getter