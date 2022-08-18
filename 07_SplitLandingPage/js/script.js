'use strict';

const container = document.querySelector('.container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('mouseover', function () {
	container.classList.add('hover-left');
});
left.addEventListener('mouseleave', function () {
	container.classList.remove('hover-left');
});
right.addEventListener('mouseover', function () {
	container.classList.add('hover-right');
});
right.addEventListener('mouseleave', function () {
	container.classList.remove('hover-right');
});
