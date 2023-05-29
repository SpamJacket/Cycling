const header = document.querySelector('.header');
const menuButton = header.querySelector('.header__menu-button');

export default function initBurger() {
  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('header__menu-button_opened');
  });
}