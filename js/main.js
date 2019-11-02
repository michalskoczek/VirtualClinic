const hamburger = document.querySelector('.header__button-menu');
const nav = document.querySelector('.navigation');

const handleClick = () => {
  hamburger.classList.toggle('header__button-menu--active');
  nav.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleClick);