// let tabButtons = document.querySelectorAll('.tab-labels .label');
// let tabContent = document.querySelectorAll('.tab-content .tab-content-item');
// tabButtons.forEach((button, index) => {
//    button.addEventListener('click', () => {
//       tabButtons.forEach((btn) => {
//          btn.classList.remove('active');
//       })
//       button.classList.add('active');
//       tabContent.forEach((block) => {
//          block.classList.remove('active');
//       })
//       tabContent[index].classList.add('active');
//    })
// });

// let scrollBtn = document.getElementById('scroll-to-bottom');
// scrollBtn.addEventListener('click', (event) => {
//    event.preventDefault();
//    let tabsContainer = document.querySelector('.main-tabs');
//    console.log(tabsContainer.offsetTop)

//    window.scrollTo({
//       top: tabsContainer.offsetTop,
//       behavior: 'smooth'
//    })
// })

let burgerMenu = document.getElementById('burger');
let overlay = document.getElementById('overlay');
let nav = document.getElementById('nav');
let navClose = document.getElementById('nav-close');
//Отримую main з services.html
let mainStatic = document.querySelector('.main-bg');

burgerMenu.addEventListener('click', () => {
   overlay.classList.remove('hide');
   overlay.classList.add('show');
   nav.classList.remove('hide');
   nav.classList.add('show-flex');
   navClose.classList.remove('hide');
   navClose.classList.add('show');
   mainStatic.classList.add('main-static');
})
navClose.addEventListener('click', () => {
   overlay.classList.remove('show');
   overlay.classList.add('hide');
   nav.classList.remove('show-flex');
   nav.classList.add('hide');
   navClose.classList.remove('show');
   navClose.classList.add('hide');
   mainStatic.classList.remove('main-static');
})
