// setup nav
const navBtn = document.querySelector('.nav-btn');
const navbar = document.querySelector('.navbar');
const navClose = document.querySelector('.nav-close');
// show nav
navBtn.addEventListener('click', () => {
  navbar.classList.add('showNav');
});
// close nav
navClose.addEventListener('click', () => {
  navbar.classList.remove('showNav');
});
//setup date
const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear());
