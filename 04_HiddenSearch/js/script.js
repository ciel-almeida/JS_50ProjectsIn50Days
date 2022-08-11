'use strict';

const searchButton = document.querySelector('.search__button');
const searchInput = document.querySelector('.search__input');

searchButton.addEventListener('click', () => {
	searchInput.classList.toggle('search__input--active');
	searchInput.focus();
});
