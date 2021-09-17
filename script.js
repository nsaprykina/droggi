let navBurger = document.querySelector('.nav__burger');
let header = document.querySelector('.header');
let navMenu = document.querySelector('.nav__menu');
let headerContent = document.querySelector('.header__content');
let navContent = document.querySelector('.nav__content');

navBurger.onclick = function() {
    header.classList.toggle('header--menu');
    navMenu.classList.toggle('nav__menu--close');
    headerContent.classList.toggle('header__content--close');
    navContent.classList.toggle('nav__content--open');
};