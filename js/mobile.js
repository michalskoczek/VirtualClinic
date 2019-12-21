const hamburgerMenu = document.querySelector('.header__button-menu');
const navMobile = document.querySelector('.navigation');

const handleClickMobile = () => {
  hamburgerMenu.classList.toggle('header__button-menu--active');
  navMobile.classList.toggle('navigation--active');
};

const mobileNavigationButtons = [
  ...document.querySelectorAll('.navigation__item a'),
];

function smoothScroll(event) {
  event.preventDefault();
  const targetId =
    event.currentTarget.getAttribute('href') === '#' ?
    'header' : event.currentTarget.getAttribute('href');
  document.querySelector(targetId).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

function navbarLinkClick(event) {
  handleClickMobile();
  smoothScroll(event);
}

mobileNavigationButtons.forEach(elem =>
  elem.addEventListener('click', navbarLinkClick),
);