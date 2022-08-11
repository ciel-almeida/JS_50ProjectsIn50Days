'use strict';

const overlay = document.querySelector('.overlay');
const overlayContent = document.querySelector('.overlay__content');
const image = document.querySelector('img');
let progress = 0;

// overlay.style.display = 'none';

// Fades the overlay while the progress increases
const overlayFading = function (progress) {
	// progress is transformed in a fraction of 1 / 100
	overlay.style.opacity = 1 - progress / 100;
	if (progress === 100) {
		overlay.style.display = 'none';
	}
};

// Updates the percentage text in the overlay
const progressPercentage = function (progress) {
	overlayContent.innerText = `${progress}%`;
};

// Blur the images of the site
const blurEffect = function (progress) {
	// to worl the progress has to be equal to the blur value when stops
	image.style.filter = `blur(${10 - progress / 10}px)`;
};

const loading = function () {
	progress++;
	overlayFading(progress);
	progressPercentage(progress);
	blurEffect(progress);

	// Breaking the setInterval when progress = 100
	if (progress === 100) {
		clearInterval(repeatInterval);
	}
};

// Function executing the loading function every 20 miliseconds
const repeatInterval = setInterval(loading, 20);
