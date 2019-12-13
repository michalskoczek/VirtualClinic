const hamburger = document.querySelector('.header__button-menu');
const nav = document.querySelector('.navigation');

const arrow = document.querySelector('.arrow');


const handleClick = () => {
  hamburger.classList.toggle('header__button-menu--active');
  nav.classList.toggle('navigation--active');
}

const moveUp = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

hamburger.addEventListener('click', handleClick);
arrow.addEventListener('click', moveUp);