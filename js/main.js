const hamburger = document.querySelector('.header__button-menu');
const nav = document.querySelector('.navigation');
const arrow = document.querySelector('.arrow');

const handleClick = () => {
  hamburger.classList.toggle('header__button-menu--active');
  nav.classList.toggle('navigation--active');
};

const moveUp = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};


const navigationButtons = [
  ...document.querySelectorAll('.desktop-navigation__item-link'),
];

function smoothScroll(event) {
  event.preventDefault();
  const targetId =
    event.currentTarget.getAttribute('href') === '#' ?
    'header' :
    event.currentTarget.getAttribute('href');
  document.querySelector(targetId).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

function navbarLinkClick(event) {
  smoothScroll(event);
}
hamburger.addEventListener('click', handleClick);
arrow.addEventListener('click', moveUp);
navigationButtons.forEach(elem =>
  elem.addEventListener('click', navbarLinkClick),
);