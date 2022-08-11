'use strict';

const overlay = document.querySelector('.overlay');
const overlayContent = document.querySelector('.overlay__content');
const image = document.querySelector('img');
let progress = 0;

// overlay.style.display = 'none';
const overlayFading = function (progress) {
	overlay.style.opacity = 1 - progress / 100;
	if (progress === 100) {
		overlay.style.display = 'none';
	}
};

const progressPercentage = function (progress) {
	overlayContent.innerText = `${progress}%`;
};

const blurEffect = function (progress) {
	image.style.filter = `blur(${10 - progress / 10}px)`;
};

const loading = function () {
	progress++;
	overlayFading(progress);
	progressPercentage(progress);
	blurEffect(progress);

	if (progress === 100) {
		clearInterval(repeatInterval);
	}
};

const repeatInterval = setInterval(loading, 20);
