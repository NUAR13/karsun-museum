const nav = document.querySelector('.navigation');
const list = document.querySelector('.navigation__list');
const menuBtn = document.querySelector('.navigation__button');
const menuLink = document.querySelectorAll('.navigation__link');

if (menuBtn) {
  menuBtn.addEventListener('click', function (item) {
    item.preventDefault();
    nav.classList.add('navigation--open');
    list.classList.toggle('navigation__list--open');
    menuBtn.classList.toggle('navigation__button--open');
    document.querySelector('body').classList.toggle('modal-menu');
  });
}

if (document.querySelector('.no-js')) {
  document.querySelector('.no-js').classList.remove('no-js');
}

menuLink.forEach((link) => {
  link.addEventListener('click', function () {
    nav.classList.remove('navigation--open');
    list.classList.remove('navigation__list--open');
    menuBtn.classList.remove('navigation__toogle--open');
    document.querySelector('body').classList.remove('modal-menu');
  });
});
