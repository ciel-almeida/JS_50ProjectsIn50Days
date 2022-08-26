'use strict';

const menuBtn = document.querySelector('.menu__button');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu--active');
});
