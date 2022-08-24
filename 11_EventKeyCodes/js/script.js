'use strict';

const display = document.querySelector('.keycode__display');
const eventKey = document.querySelector('#event-key');
const eventWhich = document.querySelector('#event-which');
const eventCode = document.querySelector('#event-code');

document.addEventListener('keydown', e => {
	display.innerText = e.key;
	eventKey.innerText = e.key;
	eventWhich.innerText = e.which;
	eventCode.innerText = e.code;
});
